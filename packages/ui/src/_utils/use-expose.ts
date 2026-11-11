import { getCurrentInstance } from 'vue'

// expose public api
export function useExpose<T extends Record<string, any> = Record<string, any>>(apis: T) {
  const instance = getCurrentInstance()
  if (instance) {
    // 结构去除代理，只针对函数去赋值。
    const obj = { ...apis }
    Object.keys(obj).forEach((key) => {
      if (typeof apis[key] === 'function' && instance.proxy) {
        instance.proxy[key] = apis[key]
      }
    })
  }
}
