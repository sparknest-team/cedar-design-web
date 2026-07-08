import { resolve } from 'path'
import { getCompName } from './commandArgv'

// root
export const root = resolve(__dirname, '..', '..', '..')
export const srcRoot = resolve(root, 'src')
export const compRoot = resolve(root, 'src', getCompName())

// output
export const output = resolve(root, 'dist')
export const outputEsm = resolve(root, 'dist/es')
export const outputCjs = resolve(root, 'dist/lib')

// package
export const compPackage = resolve(root, 'package.json')
