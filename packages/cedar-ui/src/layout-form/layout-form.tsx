import type { PropType, VNode } from 'vue'
import { computed, defineComponent, h, onMounted, reactive, ref, useAttrs, watch } from 'vue'
import dayjs from 'dayjs'
import Select, { Option } from '../select'
import Tooltip from '../tooltip'
import { FormItem } from '../form'
import { Col, Row } from '../grid'
import { layoutFormProps } from './props'
import type { IRenderComponent } from './RenderComponent'
import { getPropByPath } from './util'
import { ComponentEnum, formItemMapping, mapping } from './mapping'
import { getRadioGroupOptions, getVNode } from './event'
import { useI18n } from '../locale'
import { createNamespace, getPrefixCls } from '../_utils/global-config'

export type { LayoutFormProps } from './props'

const isVue2 = false


const { name } = createNamespace('layout-form')

export default defineComponent({
  name,
  // model: {
  //   prop: 'value',
  //   event: 'update:value',
  // },
  props: layoutFormProps,
  emits: ['update:value', 'change'],
  setup(props, { slots, emit, expose, attrs }) {
    const { t } = useI18n()
    const prefixCls = getPrefixCls('layout-form')

    const flg = ref(false)
    setTimeout(() => {
      flg.value = true
    }, 100)
    const innerWidth = ref()
    const form = ref(null)
    const data = reactive({
      expandDefaultSlot: false,
      treeLength: 0,
      index: 1,
      maxVisibleRowTemp: 1,
      maxIndex: 99999,
      layoutColArr: props.componentTree.props?.layoutColArr as number[],
      layoutSizeArr: (props.componentTree.props?.layoutSizeArr as number[]) || [768, 1440, 1980],
      layoutCol: (props.componentTree.props?.layoutCol as number) || 1,
      comMap: {} as { [index: string]: IRenderComponent },
    })
    watch(
      () => props.componentTree,
      () => {
        data.layoutColArr = props.componentTree.props?.layoutColArr as number[]
        data.layoutSizeArr = (props.componentTree.props?.layoutSizeArr as number[]) || [768, 1440, 1980]
        data.layoutCol = (props.componentTree.props?.layoutCol as number) || 1
      },
      { deep: true },
    )

    const hasMaxVisibleRowProp = computed(() => data.maxVisibleRowTemp)
    const maxVisibleIndex = computed(() => data.maxVisibleRowTemp * data.layoutCol)
    const modelChildren = () => {
      const model = props.componentTree || {}
      model.children = model.children || []
      return model.children.filter((item) => {
        const prop = item.props || {}
        return prop.visible !== false
      })
    }

    const realSlotIndex = () => {
      const model = props.componentTree || {}
      model.props = model.props || {}
      return model.props.maxVisibleRow * (data.layoutCol || 1)
    }

    function renderBtn() {
      const mc = modelChildren()
      const isOuter = data.layoutCol <= mc.length
      const more = mc.length > realSlotIndex() ? renderBtnNoMore() : ''
      // more 或者 slots 没有的时候不需要显示 visibility:hidden，否则会占位置
      return more || slots.formOperatorGroup
        ? h(
            FormItem,
            {
              label: 'v',
              class: {
                'last-region': true,
                'is-outer': isOuter,
              },
            },
            {
              default: () => [
                h(
                  'div',
                  { class: 'right-form-region' },
                  {
                    default: () => [
                      h(
                        'div',
                        {
                          class: {
                            'more-btn-wrapper': data.expandDefaultSlot,
                            'default-slot-wrapper': true,
                          },
                        },
                        {
                          default: () => [slots.formOperatorGroup?.()],
                        },
                      ),
                      more,
                    ],
                  },
                ),
              ],
            },
          )
        : ''
    }

    function renderBtnNoMore() {
      let p = {
        class: 'more-btn',
        onClick: () => {
          data.expandDefaultSlot = !data.expandDefaultSlot
        },
      } as Record<string, any>
      if (isVue2) {
        p = {
          class: 'more-btn',
          on: {
            click: p.onClick,
          },
        }
      }
      return h('span', p, {
        default: () => (data.expandDefaultSlot ? t('layoutForm.collapseMore') : t('layoutForm.expandMore')),
      })
    }

    function renderComponent(model: IRenderComponent, level = 0, childIndex: number) {
      const child: VNode[] = []
      model = model || {}
      model = model || {}
      model.level = level++
      model.props = model.props || {}
      if (model.level === 0) {
        data.maxVisibleRowTemp = data.expandDefaultSlot ? data.maxIndex : model.props.maxVisibleRow
      }
      model.children = model.children || []
      const mChildren = model.children.filter((item) => {
        const prop = item.props || {}
        return prop.visible !== false
      })
      if (mChildren && mChildren.length > 0) {
        const colVNode = [] as VNode[]
        mChildren.forEach((item, itemIndex) => {
          if (item.props && item.props.visible === false) {
            return
          }
          // 设置父子组件关系
          item.componentId = item.componentId || data.index++
          if (model.componentId) {
            item.parentComponentId = model.componentId
          }
          colVNode.push(renderComponent(mChildren[itemIndex], level, itemIndex))
        })
        let p = {
          gutter: 16,
          style: {
            display: 'flex',
            flex: '1',
            'flex-wrap': 'wrap',
          },
        } as Record<string, unknown>
        if (isVue2) {
          p = {
            props: {
              gutter: p.gutter,
            },
            style: p.style,
          }
        }
        child.push(h(Row, p, { default: () => colVNode }))
      }

      return renderBase(model, child, childIndex)
    }

    function getStyle(model: IRenderComponent, childIndex: number) {
      const mc = modelChildren()
      let styleDisplay
      model.props = model.props || {}
      if (model.level === 1 && hasMaxVisibleRowProp.value) {
        let len = maxVisibleIndex.value
        if (mc.length === realSlotIndex()) {
          len = mc.length
        }
        if (data.expandDefaultSlot && props.componentTree.children) {
          len = props.componentTree.children.length
        }
        styleDisplay = childIndex < len ? '' : 'none'
      } else {
        styleDisplay = ''
      }
      return { display: styleDisplay }
    }

    function getInputSlot(model: IRenderComponent) {
      let select: VNode
      const temp = [] as VNode[]
      model.props = model.props || {}
      if (model.props.selectSlotComponent) {
        const dataVNode = getVNode(model.props.selectSlotComponent, props, emit, form)
        const options =
          model.props.selectSlotComponent.props.options ||
          (props.store && props.store[model.props.selectSlotComponent.props.prop])
        options?.forEach((item: any) => {
          temp.push(
            h(Option, {
              label: item.label,
              value: item.value,
            }),
          )
        })
        select = h(
          Select,
          {
            ...dataVNode,
            class: dataVNode.class + ' input-select-slot',
            // slot: model.props.selectSlotComponent.props.slot
          },
          {
            default: () => temp,
          },
        )
      }
      if (model.props.selectSlotComponent?.props.slot) {
        return {
          [model.props.selectSlotComponent.props.slot]: () => select,
        }
      } else {
        return {}
      }
    }

    function renderBase(model: IRenderComponent, child: VNode[], childIndex: number) {
      if (model.componentId) {
        data.comMap[model.componentId] = model
      }
      model.props = model.props || {}
      const dataVNode = getVNode(model, props, emit, form)
      let props_ = dataVNode as Record<string, any>
      if (isVue2) {
        props_ = dataVNode.props
      }
      props_ = props_ || {}
      let temp
      if (model.componentName === ComponentEnum.DATEPICKER_RANGE) {
        // 兼容旧的写法
        if (props_.startPlaceholder && props_.endPlaceholder) {
          props_.placeholder = [props_.startPlaceholder, props_.endPlaceholder]
        }
        props_.placeholder = props_.placeholder || [t('common.placeholderStart'), t('common.placeholderEnd')]
      }
      if (
        model.componentName === ComponentEnum.PEOPLE_SELECT ||
        model.componentName === ComponentEnum.SELECT ||
        model.componentName === ComponentEnum.DATEPICKER ||
        model.componentName === ComponentEnum.IMAGE_UPLOAD ||
        model.componentName === ComponentEnum.FILE_UPLOAD ||
        model.componentName === ComponentEnum.COLOR_PICKER ||
        model.componentName === ComponentEnum.CASCADER
      ) {
        props_.placeholder = props_.placeholder || t('common.placeholderSelect')
      }
      if (
        model.componentName === ComponentEnum.PEOPLE_SELECT ||
        model.componentName === ComponentEnum.SELECT ||
        model.componentName === ComponentEnum.DATEPICKER_RANGE ||
        model.componentName === ComponentEnum.DATEPICKER ||
        model.componentName === ComponentEnum.IMAGE_UPLOAD ||
        model.componentName === ComponentEnum.FILE_UPLOAD ||
        model.componentName === ComponentEnum.COLOR_PICKER ||
        model.componentName === ComponentEnum.CASCADER
      ) {
        props_.showEmptyText = props_.showEmptyText || props.showEmptyText
        props_.emptyText = props_.emptyText || props.emptyText
      }
      if (
        model.componentName === ComponentEnum.INPUT_NUMBER ||
        model.componentName === ComponentEnum.RICHTEXT ||
        model.componentName === ComponentEnum.INPUT
      ) {
        props_.placeholder = props_.placeholder || t('common.placeholderInput')
      }
      if (model.componentName === ComponentEnum.INPUT) {
        const inputSlot = getInputSlot(model)
        temp = h(mapping[model.componentName], dataVNode, inputSlot)
      } else if (model.componentName === ComponentEnum.SELECT) {
        // const options = getOptions(model)
        dataVNode.options = props_.options ?? (props.store && props.store[model.props.prop])
        temp = h(mapping[model.componentName], dataVNode)
      } else if (model.componentName === ComponentEnum.CASCADER) {
        dataVNode.options = dataVNode.options || (props.store && props.store[model.props.prop]) || []
        temp = h(mapping[model.componentName], dataVNode)
      } else if (model.componentName === ComponentEnum.RADIO_GROUP) {
        const options = getRadioGroupOptions(model, props)
        temp = h(mapping[model.componentName], dataVNode, {
          default: () => options,
        })
      } else if (model.componentName === ComponentEnum.DATEPICKER) {
        props_.valueFormat = props_.valueFormat || 'timestamp'
        props_.type = 'datetime'
        // visible属性重名了，需要特殊处理
        const p = { ...props_ }
        delete p.visible
        if (typeof dataVNode.datepickerVisible !== 'undefined') {
          p.visible = dataVNode.datepickerVisible
        }
        temp = h(mapping[model.componentName], p)
      } else if (model.componentName === ComponentEnum.DATEPICKER_RANGE) {
        // visible属性重名了，需要特殊处理
        props_.type = props_.type || 'datetimerange'
        props_.unlinkPanels = true
        props_.valueFormat = props_.valueFormat || 'timestamp'
        props_.rangeSeparator = props_.rangeSeparator || ' - '
        const d1 = new Date()
        d1.setHours(0)
        d1.setMinutes(0)
        d1.setSeconds(0)
        d1.setMilliseconds(0)
        const d2 = new Date()
        d2.setHours(0)
        d2.setMinutes(0)
        d2.setSeconds(0)
        d2.setMilliseconds(0)
        props_.defaultTime = props_.defaultTime || [d1, d2]
        if (props_.shortcuts) {
          props_.shortcuts.map((data: any) => ({
            label: data.text || data.label,
            value: data.value,
          }))
        }
        props_.shortcuts = props_.shortcuts || [
          {
            label: t('layoutForm.lastWeek'),
            value: () => {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              return [start, end]
            },
          },
          {
            label: t('layoutForm.lastMonth'),
            value: () => {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              return [start, end]
            },
          },
          {
            label: t('layoutForm.lastThreeMonths'),
            value: () => {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              return [start, end]
            },
          },
        ]
        // visible属性重名了，需要特殊处理
        const p = { ...props_ }
        delete p.visible
        if (typeof dataVNode.datepickerVisible !== 'undefined') {
          p.visible = dataVNode.datepickerVisible
        }
        temp = h(mapping[model.componentName], p)
      } else {
        if (model.componentName === ComponentEnum.FORM) {
          const p = {
            type: 'hidden',
          } as Record<string, any>
          // 如果是form组件，那么添加一个隐藏的input输入框，防止刷新浏览器
          temp = h(mapping[model.componentName], dataVNode, {
            default: () => [h('input', p), [...child, renderBtn()]],
          })
        } else {
          temp = h(
            mapping[model.componentName] || props.compMapping[model.componentName],
            dataVNode,
            child.length ? { default: () => child } : {},
          )
        }
      }
      if (model.render) {
        temp = model.render(h, { model, component: temp })
      } else {
        if (formItemMapping.indexOf(model.componentName) > -1) {
          if (
            model.props?.isLabel === true &&
            model.componentName !== ComponentEnum.IMAGE_UPLOAD &&
            model.componentName !== ComponentEnum.PEOPLE_SELECT &&
            model.componentName !== ComponentEnum.FILE_UPLOAD
          ) {
            if (model.props?.renderLabel) {
              temp = model.props.renderLabel()
            } else {
              if (model.componentName === ComponentEnum.DATEPICKER) {
                temp = datePickerLabel(model)
              } else {
                temp = isLabel(model)
              }
            }
          }
          const formItemContent = temp
          temp = getFormItem(model, [formItemContent], dataVNode)
        }
      }
      if (model.componentId) {
        const com = data.comMap[model.componentId]
        let parentCom
        if (com.parentComponentId) {
          parentCom = data.comMap[com.parentComponentId]
        }
        if (parentCom) {
          const layoutCol = model.level === 1 ? data.layoutCol : parentCom.props && parentCom.props.layoutCol
          const col = temp
          temp = getCol([col], layoutCol, getStyle(model, childIndex))
        }
      }
      return temp
    }

    function isLabel(model: IRenderComponent) {
      model.props = model.props || {}
      model.attrs = model.attrs || {}
      const prop = model.props.prop
      const text = [] as string[]
      const value = getPropByPath(props.value, prop, true).v
      const options = model.props.options || (props.store && props.store[prop])
      if (options) {
        options.forEach((item: any) => {
          // 处理下拉框的多选情况
          if (model.componentName === ComponentEnum.SELECT && model.props?.multiple) {
            if (value && value.indexOf(item.value) !== -1) {
              text.push(item.label)
            }
          } else {
            // 其他情况处理方式相同
            if (item.value === value) {
              text.push(item.label)
            }
          }
        })
      } else {
        if (value) {
          text.push(value)
        }
      }
      return h('div', {}, text.length ? text.join('，') : props.showEmptyText ? props.emptyText : '')
    }

    function datePickerLabel(model: IRenderComponent) {
      model.props = model.props || {}
      model.attrs = model.attrs || {}
      const prop = model.props.prop
      let value = getPropByPath(props.value, prop, true).v
      const FORMAT_TIME = prop.format || t('common.dateFormat.datetime')
      // 时间组件默认仅支持时间戳
      if (
        typeof value === 'string' &&
        value &&
        (model.componentName === ComponentEnum.DATEPICKER || model.componentName === ComponentEnum.DATEPICKER_RANGE)
      ) {
        value = parseInt(value)
      }
      return h('div', {}, value ? dayjs(value).format(FORMAT_TIME) : props.showEmptyText ? props.emptyText : '')
    }

    function getOptions(model: IRenderComponent) {
      const temp = [] as VNode[]
      model.props = model.props || {}
      const options = props.store && props.store[model.props.prop]
      options?.forEach((item: any) => {
        temp.push(
          h(Option, {
            label: item.label,
            value: item.value,
          }),
        )
      })
      return temp
    }

    function getFormItem(model: IRenderComponent, formItemChildren: VNode[], data: any) {
      model.props = model.props || {}
      let description: any
      if (model.props?.description) {
        description = h(
          'span',
          {
            style: {
              position: 'relative',
              display: 'inline-block',
            },
          },
          h('span', [
            model.props.label || '',
            h(
              'div',
              { class: 'form-item-description' },
              h(
                Tooltip,
                {
                  class: 'item',
                  effect: 'dark',
                  content: model.props.description,
                  placement: 'top',
                } as any,
                { default: () => [h('i', { class: 'el-icon-info' })] },
              ),
            ),
          ]),
        )
      }

      function getItemProps() {
        model.props = model.props || {}
        return {
          label: model.props?.label || '',
          labelWidth: model.props?.labelWidth,
          rules: model.props.rules || (props.rules && props.rules[model.props.prop]),
          prop: model.props?.prop,
          style: data.style,
        } as any
      }

      return flg.value
        ? h(FormItem, getItemProps(), {
            label: () => description,
            default: () => [...formItemChildren],
          })
        : ''
    }

    function getCol(colChildren: VNode[], length: number, style?: any) {
      const layoutCol = length || 1
      let p = {
        span: Math.floor(24 / layoutCol),
        style,
      } as any
      if (isVue2) {
        p = {
          props: {
            span: p.span,
          },
          style: p.style,
        }
      }
      return h(Col, p, { default: () => colChildren })
    }

    const resize = () => {
      if (data.layoutColArr && data.layoutSizeArr) {
        let cur = 0
        data.layoutSizeArr.forEach((size: number, index: number) => {
          if (innerWidth.value >= size) {
            cur = index
          }
        })
        data.layoutCol = data.layoutColArr[cur]
      }
    }
    onMounted(() => {
      innerWidth.value = window.innerWidth
      resize()
      window.addEventListener('resize', (ev: any) => {
        innerWidth.value = window.innerWidth
        resize()
      })
    })
    const getForm = () => {
      return form.value
    }
    expose({
      form,
      getForm,
    })
    return () => {
      resize()
      // eslint-disable-next-line vue/no-mutating-props
      props.componentTree.componentId = props.componentTree.componentId || data.index++
      data.treeLength = 0
      return (
        <div {...attrs} class={prefixCls}>
          {renderComponent(props.componentTree, props.componentTree.level, 0)}
          {slots.default?.()}
        </div>
      )
      // return h(
      //   'div',
      //   { ...attrs },
      //   {
      //     default: () => [
      //       renderComponent(props.componentTree, props.componentTree.level, 0),
      //     ],
      //   },
      // )
    }
  },
})
