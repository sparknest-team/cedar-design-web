import { mergeConfig } from 'vite'
import base from './vitest.config'
export default mergeConfig(base, { test: { minThreads: 1, maxThreads: 2 } })
