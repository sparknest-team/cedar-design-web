import type { Component, VNodeChild } from 'vue'
import { markRaw, toRaw } from 'vue'
import { isObject } from '../_utils/is'
import type { FormInstance } from '../form'

/** 筛选项 schema */
export interface FilterFormField {
  /** Vue 组件，或可选注册表 `fieldMap` 的 key */
  component: string | Component
  /** 表单字段路径，对齐 FormItem.field */
  field: string
  label?: string
  visible?: boolean
  /** 为 false 时输入过程不触发 change（blur / enter 仍会） */
  autoEmitChange?: boolean
  gridItemProps?: Record<string, unknown>
  formItemProps?: Record<string, unknown>
  /** 透传给字段组件的 props */
  props?: Record<string, unknown>
}

export interface FilterFormFieldRegistration {
  component: Component
  /** 合并进字段组件的默认 props（字段 props 优先） */
  defaultProps?: Record<string, unknown>
}

export type FilterFormFieldMap = Record<string, Component | FilterFormFieldRegistration>

function asRawComponent(component: Component): Component {
  return markRaw(toRaw(component))
}

export function normalizeFieldRegistration(
  entry: Component | FilterFormFieldRegistration | undefined,
): FilterFormFieldRegistration | undefined {
  if (!entry) {
    return undefined
  }
  if (isObject(entry) && 'component' in (entry as FilterFormFieldRegistration)) {
    const reg = entry as FilterFormFieldRegistration
    return {
      ...reg,
      component: asRawComponent(reg.component),
    }
  }
  return {
    component: asRawComponent(entry as Component),
  }
}

/** 筛选容器的通知事件，不等待监听器返回值。 */
export interface FilterFormEmits {
  'update:modelValue': [value: Record<string, unknown>]
  'update:collapsed': [collapsed: boolean]
  change: [value: Record<string, unknown>, field: string]
}

export interface FilterFormSlots {
  /** 操作区，不提供作用域参数。 */
  actions?: () => VNodeChild
}

export interface FilterFormExpose {
  /** 内部 Form 实例；resetFields 只重置内部模型，不通知外部筛选模型。 */
  readonly formRef: FormInstance | undefined
}
