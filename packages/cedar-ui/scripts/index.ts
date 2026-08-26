#!/usr/bin/env node

import path from 'path'
import fs from 'fs-extra'
import { Command } from 'commander'
import copyDist from './generate/copyDist'
import dtsgen from './generate/dtsgen'
// import screentshotTest from './scripts/test/screentshot';

const program = new Command()

const packageContent = fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8')
const packageData: any = JSON.parse(packageContent)

program.version(packageData.version).name('cedar-vue-scripts').usage('command [options]')

program
  .command('copy-dist')
  .description('copy dist.')
  .action(() => {
    copyDist()
  })

program
  .command('dtsgen <files>')
  .description('emit .d.ts files for vue files.')
  .option('-o, --outDir <direname>', 'Specify an output folder for all emitted files')
  .action((files, options) => {
    dtsgen(files, options)
  })

// program
//   .command('test:screenshot')
//   .description('run test:screenshot for components.')
//   .option('-d, --domain <domain>', 'gen screentshots')
//   .option('-o, --outDir <outDir>', 'gen screentshots')
//   .action(async ({ domain, outDir }) => {
//     await screentshotTest(domain, outDir);
//   });

program.parse(process.argv)
