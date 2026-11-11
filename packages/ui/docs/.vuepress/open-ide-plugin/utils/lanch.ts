import child_process from 'child_process'
import path from 'path'
import fs from 'fs'
import dotenv from 'dotenv'
import chalk from 'chalk'
import os from 'os'

import { FormatColumn, FormatFile, FormatLine, JsFileExtList } from './constant'

type Editor = 'atom' | 'code' | 'code_insiders' | 'idea' | 'idea_ce' | 'phpstorm' | 'pycharm' | 'webstorm' | 'hbuilder'

type CodeMapType = {
  mac: {
    [key in Editor]: string
  }
  linux: {
    [key in Editor]: string
  }
  win: {
    [key in Editor]: string[]
  }
}

// 编辑器路径
const CodeMap: CodeMapType = {
  mac: {
    code: '/Visual Studio Code.app/', // confirmed
    code_insiders: '/Visual Studio Code - Insiders.app/', // confirmed
    webstorm: '/WebStorm.app/', // confirmed
    atom: '/Atom.app/', // confirmed
    hbuilder: '/HBuilderX.app/', // confirmed
    phpstorm: '/PhpStorm.app/', // confirmed
    pycharm: '/PyCharm.app/', // confirmed
    idea: '/IntelliJ IDEA.app/', // confirmed
    idea_ce: '/IntelliJ IDEA CE.app/', // confirmed
    // sublime_text: '/Applications/Sublime Text.app/Contents/MacOS/sublime_text', // can't open the opened project
    // brackets: '/Applications/Brackets.app/Contents/MacOS/Brackets', // can't open file
    // vscodium: 'codium', // cant't open the specific line and column
  },
  linux: {
    code: 'code',
    code_insiders: 'code-insiders',
    webstorm: 'webstorm.sh',
    atom: 'atom',
    hbuilder: 'hbuilderx.sh',
    phpstorm: 'phpstorm.sh',
    pycharm: 'pycharm.sh',
    idea: 'idea.sh',
    idea_ce: 'idea.sh',
    // brackets: 'brackets',
    // vscodium: 'vscodium',
    // sublime_text: 'sublime_text',
  },
  win: {
    code: ['Code.exe'], // confirmed
    code_insiders: ['Code - Insiders.exe'],
    webstorm: ['webstorm.exe', 'webstorm64.exe'],
    atom: ['atom.exe'],
    hbuilder: ['HBuilderX.exe', 'HBuilder.exe'],
    phpstorm: ['phpstorm.exe', 'phpstorm64.exe'],
    pycharm: ['pycharm.exe', 'pycharm64.exe'],
    idea: ['idea.exe', 'idea64.exe'],
    idea_ce: ['idea.exe', 'idea64.exe'],
    // brackets: ['Brackets.exe'],
    // vscodium: ['VSCodium.exe'],
    // sublime_text: [ 'sublime_text.exe', ],
  },
}

const COMMON_EDITORS_OSX = {
  '/Visual Studio Code.app/': 'code',
  '/Visual Studio Code - Insiders.app/': 'code-insiders',
  '/WebStorm.app/': '/Applications/WebStorm.app/Contents/MacOS/webstorm',
  '/Atom.app/': 'atom',
  '/HBuilderX.app/': '/Applications/HBuilderX.app/Contents/MacOS/HBuilderX',
  '/PhpStorm.app/': '/Applications/PhpStorm.app/Contents/MacOS/phpstorm',
  '/PyCharm.app/': '/Applications/PyCharm.app/Contents/MacOS/pycharm',
  '/PyCharm CE.app/': '/Applications/PyCharm CE.app/Contents/MacOS/pycharm',
  '/IntelliJ IDEA.app/': '/Applications/IntelliJ IDEA.app/Contents/MacOS/idea',
  '/IntelliJ IDEA CE.app/': '/Applications/IntelliJ IDEA CE.app/Contents/MacOS/idea',
}

const COMMON_EDITORS_LINUX = {
  code: 'code',
  'code-insiders': 'code-insiders',
  'webstorm.sh': 'webstorm',
  atom: 'atom',
  hbuilderx: 'hbuilderx',
  'hbuilderx.sh': 'hbuilderx',
  'phpstorm.sh': 'phpstorm',
  'pycharm.sh': 'pycharm',
  'idea.sh': 'idea',
}

const COMMON_EDITORS_WIN = [
  'Code.exe',
  'Code - Insiders.exe',
  'webstorm.exe',
  'webstorm64.exe',
  'atom.exe',
  'HBuilderX.exe',
  'HBuilder.exe',
  'HBuilderX64.exe',
  'HBuilder64.exe',
  'phpstorm.exe',
  'phpstorm64.exe',
  'pycharm.exe',
  'pycharm64.exe',
  'idea.exe',
  'idea64.exe',
]

const COMMON_EDITORS_WIN_MAP: { [key: string]: string } = {
  'Code.exe': 'code',
  'Code - Insiders.exe': 'code-insiders',
}

// 用户指定了 IDE 时，优先走此处
const getEditorByCustom = (editor: keyof typeof CodeMap.mac): string[] | null => {
  if (process.platform === 'darwin') {
    // mac 系统
    return CodeMap.mac[editor] ? [CodeMap.mac[editor]] : null
  } else if (process.platform === 'win32') {
    // windows 系统
    return CodeMap.win[editor] ? CodeMap.win[editor] : null
  } else if (process.platform === 'linux') {
    // linux 系统
    return CodeMap.linux[editor] ? [CodeMap.linux[editor]] : null
  }
  return null
}

export function formatOpenPath(file: string, line?: string, column?: string, format?: string | string[] | boolean) {
  let path = `${file}`
  if (line) {
    path += `:${line}`
  }
  if (column) {
    path += `:${column}`
  }
  if (typeof format === 'string') {
    path = format
      .replace(FormatFile, file)
      .replace(FormatLine, line ? line : '')
      .replace(FormatColumn, column ? column : '')
  } else if (format instanceof Array) {
    return format.map((item) => {
      return item
        .replace(FormatFile, file)
        .replace(FormatLine, line ? line : '')
        .replace(FormatColumn, column ? column : '')
    })
  }
  return [path]
}

function getArgumentsForLineNumber(
  editor: any,
  fileName: string,
  openWindowParams: string,
  pathFormat?: string | string[],
  lineNumber?: string,
  colNumber?: string,
) {
  const editorBasename = path.basename(editor).replace(/\.(exe|cmd|bat)$/i, '')
  switch (editorBasename) {
    case 'atom':
    case 'Atom':
    case 'Atom Beta':
    case 'subl':
    case 'sublime':
    case 'sublime_text':
      return formatOpenPath(
        fileName,
        lineNumber,
        colNumber,
        pathFormat || `${FormatFile}:${FormatLine}:${FormatColumn}`,
      )
    case 'wstorm':
    case 'charm':
      return formatOpenPath(fileName, lineNumber, colNumber, pathFormat || `${FormatFile}:${FormatLine}`)
    case 'notepad++':
      return formatOpenPath(
        fileName,
        lineNumber,
        colNumber,
        pathFormat || ['-n' + FormatLine, '-c' + FormatColumn, FormatFile],
      )
    case 'vim':
    case 'mvim':
    case 'joe':
    case 'gvim':
      return formatOpenPath(fileName, lineNumber, colNumber, pathFormat || ['+' + FormatLine, FormatFile])
    case 'emacs':
    case 'emacsclient':
      return formatOpenPath(
        fileName,
        lineNumber,
        colNumber,
        pathFormat || ['+' + FormatLine + ':' + FormatColumn, FormatFile],
      )
    case 'rmate':
    case 'mate':
    case 'mine':
      return formatOpenPath(fileName, lineNumber, colNumber, pathFormat || ['--line', FormatLine, FormatFile])
    case 'code':
    case 'Code':
    case 'code-insiders':
    case 'Code - Insiders':
    case 'vscodium':
    case 'VSCodium':
    case 'HBuilderX':
    case 'HBuilder':
      return formatOpenPath(
        fileName,
        lineNumber,
        colNumber,
        pathFormat || [
          '-g',
          ...(openWindowParams ? [openWindowParams] : []),
          `${FormatFile}:${FormatLine}:${FormatColumn}`,
        ],
      )
    case 'appcode':
    case 'clion':
    case 'clion64':
    case 'idea':
    case 'idea64':
    case 'phpstorm':
    case 'phpstorm64':
    case 'pycharm':
    case 'pycharm64':
    case 'rubymine':
    case 'rubymine64':
    case 'webstorm':
    case 'webstorm64':
    case 'goland':
    case 'goland64':
    case 'rider':
    case 'rider64':
      return formatOpenPath(fileName, lineNumber, colNumber, pathFormat || ['--line', FormatLine, FormatFile])
  }

  // For all others, drop the lineNumber until we have
  // a mapping above, since providing the lineNumber incorrectly
  // can result in errors or confusing behavior.
  return formatOpenPath(fileName, lineNumber, colNumber, pathFormat || '{file}')
}

function guessEditor(_editor?: Editor) {
  let customEditors: string[] | null = null

  // webpack
  if (process.env.CODE_EDITOR) {
    const editor = getEditorByCustom(process.env.CODE_EDITOR as any)
    if (editor) {
      customEditors = editor
    } else {
      return [process.env.CODE_EDITOR]
    }
  }

  // vite
  const envPath = path.resolve(process.cwd(), '.env.local')
  if (fs.existsSync(envPath) && !customEditors) {
    const envFile = fs.readFileSync(envPath, 'utf-8')
    const envConfig = dotenv.parse(envFile || '')
    if (envConfig.CODE_EDITOR) {
      const editor = getEditorByCustom(envConfig.CODE_EDITOR as any)
      if (editor) {
        customEditors = editor
      } else {
        return [envConfig.CODE_EDITOR]
      }
    }
  }

  if (_editor && !customEditors) {
    const editor = getEditorByCustom(_editor)
    if (editor) {
      customEditors = editor
    }
  }

  // We can find out which editor is currently running by:
  // `ps x` on macOS and Linux
  // `Get-Process` on Windows
  try {
    let first: any

    if (process.platform === 'darwin') {
      const output = child_process.execSync('ps aux', { encoding: 'utf-8' })
      const editorNames = Object.keys(COMMON_EDITORS_OSX)
      for (let i = 0; i < editorNames.length; i++) {
        const editorName = editorNames[i] as keyof typeof COMMON_EDITORS_OSX
        if (output.indexOf(editorName) !== -1) {
          if (customEditors?.includes(editorName)) {
            // 优先返回用户自定义
            return [COMMON_EDITORS_OSX[editorName]]
          }
          if (!first) {
            first = [COMMON_EDITORS_OSX[editorName]]
          }
        }
      }
    } else if (process.platform === 'win32') {
      // Some processes need elevated rights to get its executable path.
      // Just filter them out upfront. This also saves 10-20ms on the command.
      const output = child_process.execSync('wmic process where "executablepath is not null" get executablepath', {
        encoding: 'utf8',
      })
      const runningProcesses = output.split('\r\n').map((item) => item.trim())

      for (let i = 0; i < COMMON_EDITORS_WIN.length; i++) {
        const editorName = COMMON_EDITORS_WIN[i]
        const process = runningProcesses.find((process) => path.basename(process) === editorName)
        if (process) {
          const processName = path.basename(process)
          if (customEditors?.includes(processName)) {
            return [COMMON_EDITORS_WIN_MAP[processName] || process]
          }
          if (!first) {
            first = [COMMON_EDITORS_WIN_MAP[processName] || process]
          }
        }
      }
    } else if (process.platform === 'linux') {
      // --no-heading No header line
      // x List all processes owned by you
      // -o comm Need only names column
      const output = child_process.execSync('ps -eo comm --sort=comm', {
        encoding: 'utf8',
      })
      const editorNames = Object.keys(COMMON_EDITORS_LINUX)
      let first: any
      for (let i = 0; i < editorNames.length; i++) {
        const editorName = editorNames[i] as keyof typeof COMMON_EDITORS_LINUX
        if (output.indexOf(editorName) !== -1) {
          if (customEditors?.includes(editorName)) {
            // 优先返回用户自定义
            return [COMMON_EDITORS_LINUX[editorName]]
          }
          if (!first) {
            first = [COMMON_EDITORS_LINUX[editorName]]
          }
        }
      }
    }
    if (first) {
      return first
    }
  } catch (error) {
    // Ignore...
  }

  // Last resort, use old skool env vars
  if (process.env.VISUAL) {
    return [process.env.VISUAL]
  } else if (process.env.EDITOR) {
    return [process.env.EDITOR]
  }

  return [null]
}

function printInstructions(fileName: any, errorMessage: string | any[] | null) {
  console.log(chalk.red('Could not open ' + path.basename(fileName) + ' in the editor.'))
  if (errorMessage) {
    if (errorMessage[errorMessage.length - 1] !== '.') {
      errorMessage += '.'
    }
    console.log(chalk.red('The editor process exited with an error: ' + errorMessage))
  }
  console.log(
    'To set up the editor integration, add something like ' +
      chalk.cyan('CODE_EDITOR=code') +
      ' to the ' +
      chalk.green('.env.local') +
      ' file in your project folder,' +
      ' or add ' +
      chalk.green('editor: "code"') +
      ' to CodeInspectorPlugin config, ' +
      'and then restart the development server.',
  )
}

export default function (file: string, _editor?: Editor, fileInfo?: any) {
  if (!fs.existsSync(file)) {
    return
  }
  let [editor, ...args] = guessEditor(_editor)
  if (!editor || editor.toLowerCase() === 'none') {
    console.log(
      'Failed to recognize IDE automatically, add something like ' +
        chalk.cyan('CODE_EDITOR=code') +
        ' to the ' +
        chalk.green('.env.local') +
        ' file in your project folder,' +
        ' or add ' +
        chalk.green('editor: "code"') +
        ' to CodeInspectorPlugin config, ' +
        'and then restart the development server.',
    )
    return
  }
  if (process.platform === 'linux' && file.startsWith('/mnt/') && /Microsoft/i.test(os.release())) {
    file = path.relative('', file)
  }
  const { line, column } = fileInfo
  if (line) {
    args = args.concat(getArgumentsForLineNumber(editor, file, '', '', line, column))
  } else {
    let workspace = ''
    if (file.split('/src')[0]) {
      workspace = file.split('/src')[0]
      args.push(workspace)
    }
    args.push(file)
  }
  // const filepath = path.dirname(file);
  // console.log("filepath:", filepath);
  // args.push(filepath);
  // args.push(file);
  // args.push("-g");
  let child: any = null
  if (process.platform === 'win32') {
    // On Windows, launch the editor in a shell because spawn can only
    // launch .exe files.
    child = child_process.spawn('cmd.exe', ['/C', editor].concat(args), {
      stdio: 'inherit',
      env: {
        ...process.env,
        NODE_OPTIONS: '',
      },
    })
  } else {
    child = child_process.spawn(editor, args, {
      stdio: 'inherit',
      env: {
        ...process.env,
        NODE_OPTIONS: '',
      },
    })
  }
  // @ts-ignore
  child.on('exit', function (errorCode: string) {
    child = null

    if (errorCode) {
      printInstructions(file, '(code ' + errorCode + ')')
    }
  })

  // @ts-ignore
  child.on('error', function (error: { message: any }) {
    printInstructions(file, error.message)
  })
}
