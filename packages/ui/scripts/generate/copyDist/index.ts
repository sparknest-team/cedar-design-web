import path from 'path'
import fs from 'fs-extra'

export async function build() {
  const root = process.cwd()
  await moveDirectory(path.resolve(root, 'dist/es'), path.resolve(root, 'es'))
  await moveDirectory(path.resolve(root, 'dist/lib'), path.resolve(root, 'lib'))
}

// 函数用于移动目录
async function moveDirectory(source, destination) {
  try {
    // 移动目录
    await fs.move(source, destination, { overwrite: true })
    console.log('Directory moved successfully!')
  } catch (err) {
    console.error(err)
  }
}

export default build
