const preRejectList = new Map<string, () => void>()
/**
 * 防抖函数 在id对应的请求未完成时，新的请求会覆盖上一次请求
 * @param fn 需要防抖的函数
 * @param id 防抖的唯一标识
 * @returns fn函数执行结果
 * @example
 * const res = await promiseDebounce(() => Promise.resolve('test'), 'search')
 * console.log(res) // 'test'
 */
export const promiseDebounce = <T>(fn: (...args: any[]) => T, id: string): Promise<T> => {
  return new Promise((resolve, reject) => {
    const preReject = preRejectList.get(id)
    if (preReject) {
      preReject()
    }
    preRejectList.set(id, reject)
    Promise.resolve(fn()).then(resolve).catch(reject)
  })
}
