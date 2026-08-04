import type { UploadData, UploadHeaders, UploadRequest, UploadRequestOptions } from '../interfaces'

async function resolveValue<T>(value: T | ((file: any) => T | Promise<T>) | undefined, file: any): Promise<T | undefined> {
  if (typeof value === 'function') {
    return (value as (file: any) => T | Promise<T>)(file)
  }
  return value
}

function getResponse(xhr: XMLHttpRequest) {
  const response = xhr.responseText || xhr.response
  if (!response) {
    return undefined
  }

  const contentType = xhr.getResponseHeader('Content-Type')
  if (contentType?.includes('json')) {
    try {
      return JSON.parse(response)
    } catch {
      return response
    }
  }

  return response
}

function appendData(formData: FormData, data?: Awaited<UploadData>) {
  if (!data || typeof data === 'function') {
    return
  }

  Object.keys(data).forEach((key) => {
    const value = data[key]
    if (value !== undefined && value !== null) {
      formData.append(key, value instanceof Blob ? value : String(value))
    }
  })
}

export function uploadRequest(options: UploadRequestOptions): UploadRequest {
  const xhr = new XMLHttpRequest()
  const file = options.file

  if (options.withCredentials) {
    xhr.withCredentials = true
  }

  xhr.upload.onprogress = (event) => {
    const percent = event.lengthComputable && event.total > 0 ? Math.round((event.loaded / event.total) * 100) : 0
    options.onProgress(Object.assign(event, { percent }))
  }

  xhr.onerror = (event) => {
    options.onError(getResponse(xhr) ?? event, event)
  }

  xhr.onload = (event) => {
    const isSuccess = options.isSuccessResponse
      ? options.isSuccessResponse(xhr, file)
      : xhr.status >= 200 && xhr.status < 300

    if (isSuccess) {
      options.onSuccess(getResponse(xhr), event)
    } else {
      options.onError(getResponse(xhr), event)
    }
  }

  Promise.all([
    resolveValue<Awaited<UploadHeaders>>(options.headers, file),
    resolveValue<Awaited<UploadData>>(options.data, file),
    resolveValue<string>(options.name, file),
  ])
    .then(([headers, data, name]) => {
      const formData = new FormData()
      appendData(formData, data)
      if (file.file) {
        formData.append(name || 'file', file.file)
      }

      xhr.open(options.method, options.action || '', true)

      if (headers && typeof headers !== 'function') {
        Object.keys(headers).forEach((key) => {
          const value = headers[key]
          if (value !== undefined && value !== null) {
            xhr.setRequestHeader(key, String(value))
          }
        })
      }

      xhr.send(formData)
    })
    .catch((error) => {
      options.onError(error)
    })

  return {
    abort() {
      xhr.abort()
    },
  }
}
