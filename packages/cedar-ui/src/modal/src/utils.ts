import type { AppContext } from 'vue'
import type { ModalConfig, ModalReturn, ModalMethod } from '@arco-design/web-vue'
import { Modal as ArcoModal } from '@arco-design/web-vue'

export type Method = keyof ModalMethod

function isValueExist(val: any) {
  return !(val === undefined || val === null)
}

// 转发 Modal 的全局方法，并定制一些默认配置
export function genMethodWithDefaultConfig(method: Method, defaultConfig: any) {
  return (config: ModalConfig, context: AppContext): ModalReturn => {
    if (defaultConfig) {
      // 遍历所有默认配置项
      ;(Object.keys(defaultConfig) as (keyof ModalConfig)[]).forEach((item: keyof ModalConfig) => {
        // 若用户传入的配置中没有值，则赋予默认配置
        if (!isValueExist(config[item])) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          config[item] = defaultConfig[item]
        }
      })
    }

    return ArcoModal[method](config, context)
  }
}
