import type { IRenderComponent } from './RenderComponent'
import { ComponentEnum, eventMapping, formItemMapping } from './mapping'
import { getPropByPath, setValueByPath } from './util'
import type { VNode } from 'vue'
import { h } from 'vue'
import Radio from '../radio'

const isVue2 = false

export function getRadioGroupOptions(model: IRenderComponent, props: any) {
  const temp = [] as VNode[]
  model.props = model.props || {}
  const prop = model.props.prop
  const options = model.props.options || (props.store && props.store[prop])
  options?.forEach((item: any) => {
    let p = {
      disabled: item.disabled,
      value: item.value,
      onClick: (e: any) => {
        if (e.target.nodeName.toLocaleLowerCase() === 'input') {
          // e.target._value 是原始数据类型，e.target.value 是字符串
          changeData(model, e.target._value, props)
        }
      },
    } as Record<string, any>
    if (isVue2) {
      p = {
        props: {
          disabled: p.disabled,
          value: p.value,
        },
        nativeOn: {
          click: p.onClick,
        },
      }
    }
    const option = h(Radio, p, () => item.label)
    temp.push(option)
  })
  return temp
}

function changeData(model: IRenderComponent, v: any, props: any) {
  model.props = model.props || {}
  model.props.value = v
  model.props.modelValue = v
  // eslint-disable-next-line vue/no-mutating-props
  props.componentTree.props = props.componentTree.props || {}
  // eslint-disable-next-line vue/no-mutating-props
  props.componentTree.props.model = props.componentTree.props.model || {}
  setValueByPath(props.componentTree.props.model, model.props.prop, v)
  setValueByPath(props.value, model.props.prop, v)
  // eslint-disable-next-line vue/no-mutating-props
  props.componentTree.props.model = props.value
}

export function getVNode(model: IRenderComponent, props: any, emit: any, form: any) {
  const dataV = {} as any
  model.attrs = model.attrs || {}
  model.props = model.props || {}
  dataV.props = model.props
  dataV.attrs = model.attrs
  dataV.style = model.style
  dataV.class = model.class
  dataV.nativeOn = model.nativeOn
  dataV.scopedSlots = model.scopedSlots
  if (eventMapping[model.componentName]) {
    if (model.on) {
      Object.keys(model.on).forEach((eventName) => {
        if (eventMapping[model.componentName] !== eventName) {
          dataV.on[eventName.slice(0, 1).toUpperCase() + eventName.slice(1).toLowerCase()] = (...arg: any[]) => {
            const fun = model.on && model.on[eventName]
            if (Array.isArray(fun)) {
              fun.forEach((f) => {
                f(...[arg, { prop: model.props?.prop }])
              })
            } else if (fun) {
              fun(...[arg, { prop: model.props?.prop }])
            }
          }
        }
      })
    }
    if (eventMapping[model.componentName]) {
      if (eventMapping[model.componentName] === 'input') {
        bindInput(dataV, props.value, model, (v: any) => {
          changeData(model, v, props)
          // input 事件只更新value
          emit('update:value', props.value)
        })
      }
      if (model.componentName === ComponentEnum.INPUT_NUMBER) {
        bindInputNumber(dataV, props.value, model, (v: any) => {
          changeData(model, v, props)
          // input 事件只更新value
          emit('update:value', props.value)
        })
      }
      dataV.onChange = (v: any) => {
        const param = [v, { prop: model.props?.prop }]
        changeData(model, v, props)
        const fun = model.on && model.on.change
        if (Array.isArray(fun)) {
          fun.forEach((f) => {
            f(...param)
          })
        } else if (fun) {
          fun(...param)
        }
        // change 事件更新value，并且触发change事件
        emit('update:value', props.value)
        emit('change', {
          prop: model.props?.prop,
          value: v,
        })
      }
      if (
        model.componentName === 'c-date' ||
        model.componentName === 'c-date-range' ||
        model.componentName === 'c-date-picker' ||
        model.componentName === 'c-date-range-picker'
      ) {
        // 日期组件没有 change 以外的统一回写，用 update:modelValue
        dataV['onUpdate:modelValue'] = dataV.onChange
      }
      if (model.on && model.on.enter) {
        dataV.onKeyup = (e: any) => {
          const param = [props.value, { prop: model.props?.prop }]
          if (e.keyCode === 13) {
            const fun = model.on && model.on.enter
            if (Array.isArray(fun)) {
              fun.forEach((f) => {
                f(...param)
              })
            } else if (fun) {
              fun(...param)
            }
          }
        }
      }
    }
  }
  if (model.ref) {
    dataV.ref = model.ref
  }
  if (model.key) {
    dataV.key = model.key
  }
  if (model.ref) {
    dataV.ref = model.ref
  }
  if (model.domProps) {
    Object.assign(dataV, model.domProps)
  }
  if (model.props) {
    Object.assign(dataV, model.props)
  }
  // if (formItemMapping.indexOf(model.componentName) > -1) {
  if (typeof model.props.clearable !== 'undefined') {
    dataV.clearable = model.props.clearable
  } else {
    dataV.clearable = true
  }

  if (model.props.prop) {
    model.props.value = getPropByPath(props.value, model.props.prop, true).v
    model.props.modelValue = model.props.value
    dataV.modelValue = model.props.modelValue
  }
  // }
  if (model.componentName === ComponentEnum.FORM) {
    dataV.class += ' layout-form flex-form'
    if (props.noBottomSpace) {
      dataV.class += ' no-bottom-space'
    }
    dataV.style = model.style
    dataV.ref = form
    dataV.onSubmit = (e: Event) => {
      e.preventDefault()
    }
    dataV.model = props.value
    dataV.layout = model.props.layout || 'horizontal'
    if (dataV.labelPosition === 'left' || dataV.labelPosition === 'right') {
      dataV.layout = 'horizontal'
    }
    if (dataV.inline) {
      dataV.layout = 'inline'
    }
    if (dataV.labelPosition === 'top') {
      dataV.layout = 'vertical'
    }
    dataV.labelWidth = model.props.labelWidth || '150px'
  }
  return dataV
}

export function bindInput(dataV: any, formValue: any, model: IRenderComponent, callback: any) {
  dataV.on = dataV.on || {}
  dataV.onInput = (v: any) => {
    const param = [formValue, { prop: model.props?.prop }]
    callback(v)
    const fun = model.on && model.on.input
    if (Array.isArray(fun)) {
      fun.forEach((f) => {
        f(...param)
      })
    } else if (fun) {
      fun(...param)
    }
  }
}

export function bindInputNumber(dataV: any, formValue: any, model: IRenderComponent, callback: any) {
  dataV.nativeOn = dataV.nativeOn || {}
  dataV.nativeOn.input = (e: any) => {
    const param = [formValue, { prop: model.props?.prop }]
    callback(e.target.value || undefined)
    const fun = model.nativeOn && model.nativeOn.input
    if (Array.isArray(fun)) {
      fun.forEach((f) => {
        f(...param)
      })
    } else if (fun) {
      fun(...param)
    }
  }
}
