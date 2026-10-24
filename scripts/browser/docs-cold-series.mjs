import { cpus, loadavg } from 'node:os'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

const root = fileURLToPath(new URL('../../', import.meta.url))
const output = process.env.CEDAR_SERIES_DIR || '/private/tmp/cedar-waterfall-series-20261024'
await mkdir(output, { recursive: true })
const snapshot = () => cpus().reduce((a, c) => ({ idle: a.idle + c.times.idle, total: a.total + Object.values(c.times).reduce((s, n) => s + n, 0) }), { idle: 0, total: 0 })
const series = { criteria: { windowSeconds: 8, meanBusyMax: 50, maxBusyMax: 75, stddevMax: 12, waitLimitSeconds: 180 }, gates: [], runs: [] }
series.criteria.meanBusyMax = Number(process.env.CEDAR_SERIES_BUSY_MAX || 50)
series.criteria.stddevMax = Number(process.env.CEDAR_SERIES_STDDEV_MAX || 12)
const variant = process.env.CEDAR_SERIES_VARIANT || 'styles'
if (process.env.CEDAR_SERIES_RESUME === '1') {
  const previous = JSON.parse(await readFile(resolve(output, 'series.json'), 'utf8'))
  if ((previous.node && previous.node !== process.version) || previous.variant !== variant || previous.criteria.meanBusyMax !== series.criteria.meanBusyMax || previous.criteria.stddevMax !== series.criteria.stddevMax) {
    throw new Error('Resume must use the same variant and host criteria')
  }
  Object.assign(series, previous)
  if (series.failure) {
    ;(series.interruptions ??= []).push({ at: new Date().toISOString(), reason: series.failure })
    delete series.failure
  }
}
series.variant = variant
series.node = process.version
series.execPath = process.execPath
if (variant === 'mount') series.criteria.measuredMeanBusyMax = 65
series.attempts ??= []
const save = () => writeFile(resolve(output, 'series.json'), JSON.stringify(series, null, 2))
async function stable() {
  const started = Date.now()
  while (Date.now() - started < 180000) {
    let previous = snapshot()
    const samples = []
    for (let i = 0; i < 8; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      const current = snapshot()
      samples.push(100 * (1 - (current.idle - previous.idle) / (current.total - previous.total)))
      previous = current
    }
    const mean = samples.reduce((s, n) => s + n, 0) / samples.length
    const stddev = Math.sqrt(samples.reduce((s, n) => s + (n - mean) ** 2, 0) / samples.length)
    const accepted = mean <= series.criteria.meanBusyMax && Math.max(...samples) <= series.criteria.maxBusyMax && stddev <= series.criteria.stddevMax
    const gate = { at: new Date().toISOString(), samples, mean, stddev, load: loadavg(), accepted }
    series.gates.push(gate)
    await save()
    console.log('HOST_GATE', JSON.stringify({ accepted, mean: Math.round(mean), stddev: Math.round(stddev), load: gate.load }))
    if (accepted) return gate
  }
  throw new Error('No stable host window within 180 seconds; measurements not started under unsuitable load')
}
try {
  // Alternating order balances background drift. Both variants include initial
  // source-read deduplication; only the theme Sass aggregation is switched.
  const baseline = variant === 'mount' ? 'baseline-mount' : variant === 'client' ? 'baseline-client' : ['combined', 'audit'].includes(variant) ? 'baseline-combined' : 'baseline-styles'
  const order = variant === 'audit' ? [baseline, 'bundled']
    : variant === 'final' ? ['bundled', 'bundled', 'bundled']
    : variant === 'client' ? [baseline, 'bundled', 'bundled', baseline]
    : [baseline, 'bundled', 'bundled', baseline, baseline, 'bundled']
  for (let i = series.runs.length; i < order.length; i++) {
    const gate = await stable()
    const mode = order[i]
    const file = resolve(output, variant === 'mount' ? `${series.attempts.length + 1}-${mode}.json` : `${i + 1}-${mode}.json`)
    const env = { ...process.env, CEDAR_PERF_PAGE: 'scheduler', CEDAR_PERF_OUTPUT: file,
      CEDAR_PERF_BASELINE_STYLES: mode === 'baseline-styles' || mode === 'baseline-combined' ? '1' : '0',
      CEDAR_PERF_BASELINE_CLIENT: mode === 'baseline-client' || mode === 'baseline-combined' ? '1' : '0',
      CEDAR_PERF_INTERACTIONS: i === order.length - 1 ? '1' : '0',
      CEDAR_PERF_HMR: i === order.length - 1 ? '1' : '0',
    }
    if (mode === 'baseline-mount') {
      if (!process.env.CEDAR_SERIES_BASELINE_DIR) throw new Error('Mount comparison needs saved baseline sources')
      env.CEDAR_PERF_BASELINE_DIR = process.env.CEDAR_SERIES_BASELINE_DIR
    } else delete env.CEDAR_PERF_BASELINE_DIR
    for (const key of ['CEDAR_PERF_PROFILE', 'CEDAR_PERF_CPU', 'CEDAR_PERF_VITE_PROFILE']) delete env[key]
    console.log('COLD_RUN', i + 1, mode)
    const code = await new Promise((resolve, reject) => {
      const child = spawn(process.execPath, ['scripts/browser/docs-startup-performance.mjs'], { cwd: root, env, stdio: 'inherit' })
      child.on('error', reject)
      child.on('exit', resolve)
    })
    const result = JSON.parse(await readFile(file, 'utf8'))
    const measuredSamples = result.hostSamples.slice(0, result.hostSamplesAtFirstPage).map(sample => sample.busyPercent)
    const measuredMeanBusy = measuredSamples.reduce((sum, value) => sum + value, 0) / measuredSamples.length
    const accepted = !series.criteria.measuredMeanBusyMax || measuredMeanBusy <= series.criteria.measuredMeanBusyMax
    const record = { mode, file, gateAt: gate.at, exitCode: code, serverReadyMs: result.serverReadyMs, firstPageMs: result.firstPageMs,
      totalMs: result.serverReadyMs + result.firstPageMs, allExamplesMounted: result.allExamplesMounted, measuredMeanBusy, accepted }
    series.attempts.push(record)
    if (accepted) series.runs.push(record)
    else { console.log('MEASURED_HOST_REJECT', JSON.stringify(record)); i-- }
    await save()
    if (code !== 0) throw new Error(`Benchmark failed: ${file}`)
  }
} catch (error) { series.failure = String(error); await save(); console.error(error); process.exitCode = 1 }
