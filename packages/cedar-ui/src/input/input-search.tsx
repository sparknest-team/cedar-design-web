import { computed, defineComponent, PropType, ref, toRefs, watch, StyleValue } from 'vue'
import { createNamespace } from '../_utils/global-config'
import IconHover from '../_components/icon-hover.vue'
import IconSearch from '../icon/icon-search'
import IconLoading from '../icon/icon-loading'
import Button, { ButtonProps } from '../button'
import AutoComplete from '../auto-complete'
import InputGroup from './input-group.vue'
import type { Size } from '../_utils/constant'
import { useSize } from '../_hooks/use-size'
import { SelectOptionData } from '../select'
import Select from '../select'
import { searchHistoryLocal } from '../search/search-history'

export default defineComponent({
  name: 'CInputSearch',
  props: {
    /**
     * @zh 绑定值
     * @en Value
     */
    modelValue: String,
    defaultValue: String,
    /**
     * @zh 是否为后置按钮模式
     * @en Whether it is the rear button mode
     */
    searchButton: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否为加载中状态
     * @en Whether it is loading state
     */
    loading: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
      type: Boolean,
    },
    variant: {
      type: String as PropType<'outline' | 'default'>,
    },
    /**
     * @zh 输入框大小
     * @en Input size
     * @values 'xs','sm','md','lg','xl'
     * @defaultValue 'md'
     */
    size: {
      type: String as PropType<Size>,
    },
    /**
     * @zh 搜索按钮的文字，使用后会替换原本的图标
     * @en The text of the search button will replace the original icon after use
     * @version 2.16.0
     */
    buttonText: {
      type: String,
    },
    /**
     * @zh 搜索按钮的属性
     * @en Button props
     */
    buttonProps: {
      type: Object as PropType<ButtonProps>,
    },
    /**
     * @zh 最近搜索记录
     * @en Recent search records
     */
    recentSearches: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    /**
     * @zh 搜索字段可选项
     * @en Search fields options
     */
    fields: {
      type: Array as PropType<SelectOptionData[]>,
      default: () => [],
    },
    /**
     * @zh 默认搜索字段
     * @en Default search field
     */
    defaultField: {
      type: String,
    },
    /**
     * @zh 搜索字段
     * @en Search field
     */
    modelField: {
      type: String,
    },
    /**
     * @zh 搜索对象模型
     * @en Search object model
     */
    model: {
      type: Object as PropType<Record<string, any>>,
    },
    /**
     * @zh 搜索历史记录最大数量
     * @en Search history record maximum number
     */
    maxSearchHistoryCount: {
      type: Number,
      default: 5,
    },
  },
  emits: {
    /**
     * @zh 单击搜索按钮时触发
     * @en Triggered when the search button is clicked
     * @param {Object} data
     * @param {string} data.modelField
     * @param {string} data.modelValue
     * @param {Record<string, any>} data.model
     * @param {MouseEvent} ev
     */
    search: (
      data: {
        modelField?: string
        modelValue?: string
        model: Record<string, any>
        recentSearches: string[]
      },
      ev: MouseEvent,
    ) => true,
    'update:modelValue': (value: string) => true,
    'update:modelField': (value: string) => true,
  },
  setup(props, { emit, slots, attrs }) {
    const { classes, n } = createNamespace('input-search')

    const { size, disabled, variant } = toRefs(props)
    const _size = computed(() => size.value ?? 'md')
    const mergedDisabled = computed(() => Boolean(disabled.value ?? false))
    const mergedVariant = computed(() => variant.value ?? 'default')
    const { mergedSize } = useSize(_size)
    const { push } = searchHistoryLocal(props.maxSearchHistoryCount as number)

    const inputRef = ref()
    // 搜索组件是一定要选择一个字段的。后续fields如果有变化对初始值无影响，需要自行处理。
    const _field = ref(props.defaultField || props.fields[0]?.value)
    const computedField = computed(() => {
      return props.modelField ?? _field.value
    })
    // 值相关
    const _value = ref(props.defaultValue)
    const computedValue = computed(() => {
      return props.modelValue ?? _value.value
    })

    const handleClick = (e: MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()
      if (inputRef.value?.inputRef) {
        const list = push(computedValue.value, props.recentSearches)
        emit(
          'search',
          {
            modelField: computedField.value as string,
            modelValue: computedValue.value as string,
            model: props.model as any,
            recentSearches: list,
          },
          e,
        )
      }
    }

    const renderSuffix = () => {
      return (
        <>
          {props.loading ? (
            <IconLoading />
          ) : (
            <IconHover
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              onMousedown={(e: MouseEvent) => {
                inputRef.value?.blur()
                handleClick(e)
              }}
            >
              <IconSearch />
            </IconHover>
          )}
          {slots.suffix?.()}
        </>
      )
    }

    const renderButton = () => {
      let _slots = {}
      if (props.buttonText || slots['button-default'] || slots['button-icon']) {
        _slots = {
          default: slots['button-default'] ?? (props.buttonText ? () => props.buttonText : undefined),
          icon: slots['button-icon'],
        }
      } else {
        _slots = {
          icon: () => <IconSearch />,
        }
      }

      return (
        <Button
          v-slots={_slots}
          status="primary"
          class={classes(n('btn'))}
          disabled={props.disabled}
          size={mergedSize.value}
          loading={props.loading}
          {...props.buttonProps}
          onClick={handleClick}
        />
      )
    }
    const clearModel = () => {
      const value = (props.model as any)?.[computedField.value as string]
      if (value !== computedValue.value && props.fields.length > 0) {
        props.fields?.forEach((item: SelectOptionData) => {
          ;(props.model as any)[item.value as string] = undefined
        })
        _value.value = ''
        emit('update:modelValue', '' as unknown as string)
      }
    }
    const updateModel = (value: string) => {
      if (computedField.value) {
        if (props.model && computedField.value) {
          clearModel()
          _value.value = value
          ;(props.model as any)[computedField.value as string] = value
        }
      }
    }
    const { class: className, style, ...restAttrs } = attrs

    const render = () => (
      <div class={[classes(n()), className]} style={style as StyleValue}>
        <InputGroup size={mergedSize.value} disabled={mergedDisabled.value} variant={mergedVariant.value}>
          {props.fields.length > 0 && (
            <Select
              modelValue={computedField.value}
              ref={inputRef}
              v-slots={{
                prefix: slots.prefix,
                suffix: props.searchButton ? slots.suffix : renderSuffix,
              }}
              {...restAttrs}
              options={props.fields}
              onChange={(value: string, e: Event) => {
                inputRef.value?.focus()
                _field.value = value
                clearModel()
                emit('update:modelField', value as string)
              }}
            />
          )}
          <AutoComplete
            modelValue={computedValue.value}
            ref={inputRef}
            v-slots={{
              prefix: slots.prefix,
              suffix: props.searchButton ? slots.suffix : renderSuffix,
            }}
            {...restAttrs}
            size={mergedSize.value}
            disabled={mergedDisabled.value}
            variant={mergedVariant.value}
            options={props.recentSearches}
            onUpdate:modelValue={(value: string) => {
              _value.value = value
              updateModel(value)
              emit('update:modelValue', value as string)
            }}
            onSelect={(value: string, e: Event) => {
              updateModel(value)
              emit('update:modelValue', value as string)
              const list = push(value, props.recentSearches)
              emit(
                'search',
                {
                  modelField: computedField.value as string,
                  modelValue: value as string,
                  model: props.model as any,
                  recentSearches: list,
                },
                e as MouseEvent,
              )
            }}
          />
          {props.searchButton && renderButton()}
        </InputGroup>
      </div>
    )

    return {
      inputRef,
      render,
    }
  },
  methods: {
    focus() {
      ;(this.inputRef as HTMLInputElement)?.focus()
    },
    blur() {
      ;(this.inputRef as HTMLInputElement)?.blur()
    },
  },
  render() {
    return this.render()
  },
})
