import http from 'http'
import launchEditor from './lanch'
import net from 'net'

function checkPortAvailability(port) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    server.once('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        resolve(false) // 端口被占用
      } else {
        reject(err) // 发生其他错误
      }
    })

    server.once('listening', () => {
      server.close(() => {
        resolve(true) // 端口未被占用
      })
    })

    server.listen(port)
  })
}

export default function createServer(callback: (port: number) => any, options?: any) {
  const server = http.createServer((req: any, res: any) => {
    // 收到请求唤醒vscode
    const params = new URLSearchParams(req.url.slice(1))
    const file = decodeURIComponent(params.get('file') as string)
    const line = Number(params.get('line'))
    const column = Number(params.get('column'))
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Private-Network': 'true',
    })
    res.end('ok')
    if (file) {
      launchEditor(file, undefined, {})
    }
    // 调用 hooks
    options?.hooks?.afterInspectRequest?.(options, { file, line, column })
  })

  checkPortAvailability(9080).then((available) => {
    if (available) {
      server.listen(9080, () => {
        callback(9080)
      })
    }
  })
}

// createServer((port) => {
//   console.log(port);
// });
