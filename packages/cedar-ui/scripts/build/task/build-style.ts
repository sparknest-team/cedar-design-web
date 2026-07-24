import { dest, src } from 'gulp'
import path from 'path'
import { Transform } from 'stream'
import less from 'less'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import concat from 'gulp-concat'
import { rollup } from 'rollup'
import esbuild from 'rollup-plugin-esbuild'
import glob from 'fast-glob'
import { srcRoot, output, outputEsm, outputCjs, root } from '../utils/paths'
import { generatePaths } from '../utils/rollup'

/**
 * gulp 流式编译 less -> css
 */
const compileLess = () =>
  new Transform({
    objectMode: true,
    transform(file, _enc, callback) {
      if (file.isNull() || file.isDirectory()) {
        callback(null, file)
        return
      }
      less
        .render(file.contents.toString(), {
          filename: file.path,
          javascriptEnabled: true,
        })
        .then((result) => {
          file.contents = Buffer.from(result.css)
          file.path = file.path.replace(/\.less$/, '.css')
          callback(null, file)
        })
        .catch((err) => callback(err))
    },
  })

/**
 * [src/**\/*.less] to [es/**\/*.less, lib/**\/*.less]
 */
const buildLessCopy = async () => {
  await new Promise((resolve) => {
    src(`${srcRoot}/**/*.less`)
      .pipe(dest(outputEsm))
      .pipe(dest(outputCjs))
      .on('end', resolve)
  })
}

/**
 * [src/**\/style/index.less] to [es/**\/style/index.css, lib/**\/style/index.css]
 */
const buildLessModules = async () => {
  await new Promise((resolve) => {
    src(`${srcRoot}/**/style/index.less`)
      .pipe(compileLess())
      .pipe(autoprefixer({ cascade: false }))
      .pipe(cleanCSS())
      .pipe(dest(outputEsm))
      .pipe(dest(outputCjs))
      .on('end', resolve)
  })
}

/**
 * [src/index.less] to [dist/index.css]
 */
const buildLessFull = async () => {
  await new Promise((resolve) => {
    src(`${srcRoot}/index.less`)
      .pipe(compileLess())
      .pipe(autoprefixer({ cascade: false }))
      .pipe(cleanCSS())
      .pipe(dest(output))
      .on('end', resolve)
  })
  await new Promise((resolve) => {
    src([
      // TODO: 脱敏迁移 - 暂时注释 @maplejs/map-core，后续替换为公有包
      // `${root}/node_modules/@maplejs/map-core/dist/index.css`,
      `${output}/index.css`,
    ])
      .pipe(concat('index.css'))
      .pipe(dest(output))
      .on('end', resolve)
  })
}

/**
 * [src/**\/style/*.ts] to [es/**\/style/*.js, lib/**\/style/*.js]
 */
const buildStyleModules = async () => {
  const input = [
    // style
    ...(await glob(`${srcRoot}/**/style/*.ts`)),
    // resolver
    path.resolve(srcRoot, 'resolver.ts'),
  ]

  const bundle = await rollup({
    input,
    plugins: [
      esbuild({
        sourceMap: true,
      }),
    ],
    external: [/./],
    treeshake: false,
  })

  await Promise.all([
    bundle.write({
      format: 'esm',
      dir: outputEsm,
      exports: undefined,
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
      entryFileNames: '[name].js',
    }),
    bundle.write({
      format: 'cjs',
      dir: outputCjs,
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
      entryFileNames: '[name].js',
      paths: generatePaths(),
    }),
  ])
}

export const buildStyle = async () => {
  await Promise.all([
    buildLessCopy(),
    buildLessModules(),
    buildLessFull(),
    buildStyleModules(),
  ])
}
