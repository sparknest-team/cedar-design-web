import { mergeConfig } from 'vite'
import base from './vitest.config'

export default mergeConfig(base, {
  // Isolate SSR and DOM suites so Vue is initialized after each JSDOM setup.
  test: { threads: true, maxThreads: 1, minThreads: 1 },
})
