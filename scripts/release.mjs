import { release } from '@cedar-design/cli'
import { runTaskQueue } from './build.mjs'

await release({ task: runTaskQueue })
