import { series, parallel } from 'gulp'
import { buildModules, buildStyle } from './task'

export default series(parallel(buildModules, buildStyle))
