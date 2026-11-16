import { checkVueSources, checkVueArtifacts } from '../../design-ui/bin/vue-compat-check.mjs'
import { release } from '@cedar-design/cli-vue'
import { verifyNativeAcceptance } from '../../design-ui/browser/native-acceptance.mjs'
import { runTaskQueue } from './build.mjs'

await release({
  task: async () => {
    checkVueSources(process.cwd())
    await runTaskQueue()
    await checkVueArtifacts(process.cwd())
    await verifyNativeAcceptance(process.cwd(), 'cedar')
  },
})
