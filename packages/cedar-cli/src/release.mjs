import path from 'node:path'
import { readdir } from 'node:fs/promises'
import { input, select } from '@inquirer/prompts'
import conventionalChangelog from 'conventional-changelog'
import fse from 'fs-extra'
import { createSpinner } from 'nanospinner'
import pc from 'picocolors'
import semver from 'semver'

const { green, red, yellow } = pc

// ── changelog ─────────────────────────────────────────────────────

export async function changelog(options = {}) {
  const { releaseCount = '2', file = 'CHANGELOG.md' } = options

  const changelogPath = path.resolve(file)
  const count = parseInt(releaseCount, 10)

  // Generate changelog from conventional commits
  const content = await generateChangelog({ releaseCount: count })

  // Prepend to existing changelog or create new
  const existing = fse.existsSync(changelogPath) ? await fse.readFile(changelogPath, 'utf-8') : ''

  const header = '# Changelog\n\n'
  const newContent = content + '\n' + existing.replace(/^# Changelog\n\n/, '')

  await fse.writeFile(changelogPath, header + newContent, 'utf-8')
  console.log(green(`✓ Changelog generated at ${changelogPath}`))
}

async function generateChangelog({ releaseCount = 2 } = {}) {
  return new Promise((resolve, reject) => {
    const chunks = []
    conventionalChangelog({
      preset: 'angular',
      releaseCount,
    })
      .on('data', (chunk) => chunks.push(chunk))
      .on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')))
      .on('error', reject)
  })
}

// ── release ───────────────────────────────────────────────────────

export async function release(options = {}) {
  const { remote = 'origin', task } = options

  // 1. Run pre-release build task if provided
  if (task) {
    const spinner = createSpinner('Running build tasks...').start()
    try {
      await task()
      spinner.success({ text: 'Build tasks completed' })
    } catch (err) {
      spinner.error({ text: 'Build tasks failed' })
      throw err
    }
  }

  // 2. Determine which packages to release
  const workspaces = await resolveWorkspaces()

  // 3. Let user select version bump type
  const bumpType = await select({
    message: 'Select version bump type:',
    choices: [
      { name: 'patch', value: 'patch' },
      { name: 'minor', value: 'minor' },
      { name: 'major', value: 'major' },
      { name: 'custom', value: 'custom' },
    ],
  })

  let version
  if (bumpType === 'custom') {
    version = await input({ message: 'Enter new version:' })
  } else {
    const currentVersion = workspaces[0]?.version || '1.0.0'
    version = semver.inc(currentVersion, bumpType)
  }

  // 4. Update package.json files
  const spinner = createSpinner(`Updating version to ${version}...`).start()
  for (const ws of workspaces) {
    ws.packageJson.version = version
    await fse.writeJson(ws.packageJsonPath, ws.packageJson, { spaces: 2 })
  }
  spinner.success({ text: `Version updated to ${version}` })

  // 5. Generate changelog
  await changelog({ releaseCount: '2' })

  // 6. Git commit, tag, push
  const gitSpinner = createSpinner('Committing and pushing to git...').start()
  try {
    const { exec } = await import('tinyexec')
    await exec('git', ['add', '.'])
    await exec('git', ['commit', '-m', `chore(release): ${version}`])
    await exec('git', ['tag', `v${version}`])
    await exec('git', ['push', remote, '--follow-tags'])
    gitSpinner.success({ text: `Released v${version} to ${remote}` })
  } catch (err) {
    gitSpinner.error({ text: 'Git operations failed' })
    throw err
  }
}

async function resolveWorkspaces() {
  let dir = process.cwd()
  while (dir !== path.parse(dir).root) {
    if (fse.existsSync(path.join(dir, 'pnpm-workspace.yaml'))) {
      break
    }
    dir = path.dirname(dir)
  }
  const results = []
  const packagesDir = path.join(dir, 'packages')
  for (const entry of await readdir(packagesDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) {
      continue
    }
    const pkgPath = path.join(packagesDir, entry.name, 'package.json')
    if (!fse.existsSync(pkgPath)) {
      continue
    }
    const pkg = await fse.readJson(pkgPath)
    if (pkg.name?.startsWith('@cedarjs/') && !pkg.private) {
      results.push({ name: pkg.name, version: pkg.version, packageJsonPath: pkgPath, packageJson: pkg })
    }
  }
  return results
}
