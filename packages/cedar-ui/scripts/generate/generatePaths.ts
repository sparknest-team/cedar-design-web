import fs from 'fs'
import path from 'path'

interface PathMapping {
  src: string
  dest: string
}

const projRoot = path.resolve(__dirname, '../../')
const fxFilePath = path.join(projRoot, 'fx.json')

const docsGuideDir = path.join(projRoot, 'docs/guide')
const docsPracticesDir = path.join(projRoot, 'docs/practices')
const srcDir = path.join(projRoot, 'src')

// 用于存储目标数组
const targetArray: PathMapping[] = []

// 处理 docs/guide 目录下的所有 Markdown 文件
function processGuideFiles(dir: string): void {
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isFile() && file.endsWith('.md')) {
      const relativePath = path.relative(dir, filePath)
      const withoutExt = relativePath.replace(/\.md$/, '')
      targetArray.push({
        src: `/guide/${withoutExt}/**`,
        dest: `/guide/${withoutExt}/index.html`,
      })
    }
  })
}

function processProFiles(dir: string): void {
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isFile() && file.endsWith('.md')) {
      const relativePath = path.relative(dir, filePath)
      const withoutExt = relativePath.replace(/\.md$/, '')
      targetArray.push({
        src: `/practices/${withoutExt}/**`,
        dest: `/practices/${withoutExt}/index.html`,
      })
    }
  })
}

// 处理 src 目录下包含 README.md 的目录
function processSrcDirs(dir: string): void {
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      const readmePath = path.join(filePath, 'README.md')
      if (fs.existsSync(readmePath)) {
        const relativePath = path.relative(srcDir, filePath)
        targetArray.push({
          src: `/components/${relativePath}/**`,
          dest: `/components/${relativePath}/index.html`,
        })
        // targetArray.push({
        //   src: `/components/${relativePath}`,
        //   dest: `/components/${relativePath}/index.html`,
        // })
      }
    }
  })
  targetArray.push({
    src: `/components/icon/**`,
    dest: `/components/icon/index.html`,
  })
  // targetArray.push({
  //   src: `/components/icon`,
  //   dest: `/components/icon/index.html`,
  // })
}

// 执行处理
processGuideFiles(docsGuideDir)
processProFiles(docsPracticesDir)
processSrcDirs(srcDir)

// 读取 fx.json 文件
let fxData: { fallback: PathMapping[] }

try {
  const fxContent = fs.readFileSync(fxFilePath, 'utf-8')
  fxData = JSON.parse(fxContent)
} catch (err) {
  console.error('读取 fx.json 文件时出错:', err)
  fxData = { fallback: [] }
}

// 将生成的数组插入到 fallback 中
fxData.fallback = targetArray

// 将更新后的数据写回 fx.json 文件
fs.writeFileSync(fxFilePath, JSON.stringify(fxData, null, 2))

console.log('结果已更新到 fx.json 文件中的 fallback 属性中')
