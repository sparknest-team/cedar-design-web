import { release } from '@cedarjs/cli'
import { runTaskQueue } from './build.mjs'

await release({ task: runTaskQueue })
