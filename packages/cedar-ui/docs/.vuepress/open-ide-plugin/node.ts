import createServer from './utils/index'
import fs from 'fs'
import path from 'path'

export default (options) => {
  return (app) => {
    return {
      name: 'vuepress-open-ide-plugin',
      onInitialized() {
        const root = process.cwd()
        let ideaPath = path.join(root, '.idea')
        if (fs.existsSync(ideaPath)) {
          console.log('.idea directory exists in the root directory.')
        } else {
          console.log('.idea directory does not exist in the root directory.')
        }

        createServer((port) => {
          console.log('服务已启动')
          console.log(port)
        })
      },
    }
  }
}
