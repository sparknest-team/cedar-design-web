import {
  computed,
  defineComponent,
  PropType,
  ref,
  toRefs,
  StyleValue,
} from 'vue'
import { createNamespace } from '../_utils/global-config'
import IconHover from '../_components/icon-hover.vue'
import { IconSearch } from '@cedarjs/icons-vue/icon-search'
import { IconLoading } from '@cedarjs/icons-vue/icon-loading'
import Button, { ButtonProps } from '../button'
import Input from '../input/input'
import InputGroup from '../input/input-group.vue'
import type { ComponentSize } from '../_utils/constant'
import { useSize } from '../_hooks/use-size'
import { SelectOptionData } from '../select'
import Select from '../select'
import type { SearchResult } from './result'
import DropdownMenu, { MenuOption } from '../dropdown-menu'

function searchHistoryLocal(max: number) {
  const maxLength = max

  function search(element: string | undefined, list: string[]) {
    if (!element) return
    const index = list.indexOf(element)
    if (index !== -1) {
      list.splice(index, 1)
      list.unshift(element)
    } else {
      list.unshift(element)
    }
  }

  function push(element: string | undefined, list: string[]) {
    const next = [...list]
    search(element, next)
    if (next.length > maxLength) {
      next.pop()
    }
    return next
  }

  return {
    push,
  }
}

export default defineComponent({
  name: createNamespace('search').name,
  props: {
    modelValue: String,
    defaultValue: String,
    searchButton: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
    },
    variant: {
      type: String as PropType<'filled' | 'outline' | 'standard'>,
    },
    size: {
      type: String as PropType<ComponentSize>,
    },
    buttonText: {
      type: String,
    },
    buttonProps: {
      type: Object as PropType<ButtonProps>,
    },
    recentSearches: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    fields: {
      type: Array as PropType<SelectOptionData[]>,
      default: () => [],
    },
    selectStyle: {
      type: [String, Object, Array] as PropType<StyleValue>,
    },
    defaultField: {
      type: String,
    },
    modelField: {
      type: String,
    },
    model: {
      type: Object as PropType<Record<string, any>>,
    },
    maxSearchHistoryCount: {
      type: Number,
      default: 5,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    search: (data: SearchResult, ev: MouseEvent | KeyboardEvent | Event) =>
      true,
    change: (value: string, ev?: Event) => true,
    'update:modelValue': (value: string) => true,
    'update:modelField': (value: string) => true,
  },
  setup(props, { emit, slots, attrs }) {
    const { classes, n } = createNamespace('search')

    const { size, disabled, variant } = toRefs(props)
    const _size = computed(() => size.value ?? 'md')
    const mergedDisabled = computed(() => Boolean(disabled.value ?? false))
    const mergedVariant = computed(() => variant.value ?? 'filled')
    const { mergedSize } = useSize(_size)
    const { push } = searchHistoryLocal(props.maxSearchHistoryCount as number)

    const inputRef = ref()
    const selectRef = ref()
    const historyVisible = ref(false)
    const _field = ref(props.defaultField || props.fields[0]?.value)
    const computedField = computed(() => {
      return props.modelField ?? _field.value
    })
    const _value = ref(props.defaultValue)
    const computedValue = computed(() => {
      return props.modelValue ?? _value.value
    })
    const computedPlaceholder = computed(() => {
      const selected = props.fields.find(
        (item) => item.value === computedField.value,
      )
      return selected?.placeholder
    })

    const getSearchData = (recentSearches = props.recentSearches) => ({
      modelField: computedField.value as string,
      modelValue: computedValue.value as string,
      model: props.model,
      recentSearches,
    })

    const emitSearch = (e: MouseEvent | KeyboardEvent | Event) => {
      const list = push(computedValue.value, props.recentSearches)
      emit('search', getSearchData(list), e)
    }

    const handleClick = (e: MouseEvent | KeyboardEvent | Event) => {
      e.stopPropagation()
      e.preventDefault()
      emitSearch(e)
      historyVisible.value = false
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
          default:
            slots['button-default'] ??
            (props.buttonText ? () => props.buttonText : undefined),
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
          status='primary'
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
      if (!props.model) return
      if (props.fields.length > 0) {
        props.fields?.forEach((item: SelectOptionData) => {
          const field = item.value as string
          ;(props.model as Record<string, any>)[field] = undefined
        })
      }
    }
    const updateModel = (value: string) => {
      const field = computedField.value as string | undefined
      if (field) {
        if (props.model) {
          clearModel()
          _value.value = value
          ;(props.model as Record<string, any>)[field] = value
        }
      }
    }
    const { class: className, style, ...restAttrs } = attrs
    const { placeholder, ...inputAttrs } = restAttrs

    const handleValueChange = (value: string, ev?: Event) => {
      _value.value = value
      updateModel(value)
      emit('update:modelValue', value as string)
      emit('change', value as string, ev)
    }
    const handleInput = (value: string, ev: Event) => {
      handleValueChange(value, ev)
      historyVisible.value = props.recentSearches.length > 0
    }
    const handleHistoryVisibleChange = (visible: boolean) => {
      historyVisible.value = visible && props.recentSearches.length > 0
    }
    const handleHistorySelect = (value: string, ev: Event) => {
      handleValueChange(value, ev)
      historyVisible.value = false
      inputRef.value?.blur()
      emitSearch(ev)
    }

    const render = () => (
      <div class={[classes(n()), className]} style={style as StyleValue}>
        <InputGroup
          size={mergedSize.value}
          disabled={mergedDisabled.value}
          variant={mergedVariant.value}
        >
          {props.fields.length > 0 && (
            <Select
              modelValue={computedField.value}
              ref={selectRef}
              style={props.selectStyle}
              v-slots={{
                prefix: slots.prefix,
                suffix: props.searchButton ? slots.suffix : renderSuffix,
              }}
              {...restAttrs}
              options={props.fields}
              onChange={(value: any, e?: any) => {
                inputRef.value?.focus()
                _field.value = value
                clearModel()
                _value.value = ''
                emit('update:modelField', value as string)
                emit('update:modelValue', '' as unknown as string)
                emit('change', '' as string, e)
              }}
            />
          )}
          <DropdownMenu
            open={historyVisible.value}
            trigger='focus'
            placement='bottom-start'
            autoFitPopupWidth
            popupContainer={inputRef.value?.$el}
            onUpdate:open={handleHistoryVisibleChange}
            onSelect={(value: any, _option: Record<string, any>, ev: Event) => handleHistorySelect(String(value), ev)}
            v-slots={{
              content: () =>
                props.recentSearches.map((item) => (
                  <MenuOption value={item} label={item} />
                )),
            }}
          >
            <Input
              modelValue={computedValue.value}
              ref={inputRef}
              v-slots={{
                prefix: slots.prefix,
                suffix: props.searchButton ? slots.suffix : renderSuffix,
              }}
              {...inputAttrs}
              placeholder={computedPlaceholder.value ?? placeholder}
              size={mergedSize.value}
              disabled={mergedDisabled.value}
              variant={mergedVariant.value}
              clearable={props.clearable}
              onInput={handleInput}
              onClear={(ev: MouseEvent) => handleValueChange('', ev)}
              onPress-enter={handleClick}
            />
          </DropdownMenu>
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
      (this.inputRef as HTMLInputElement)?.focus()
    },
    blur() {
      (this.inputRef as HTMLInputElement)?.blur()
    },
  },
  render() {
    return this.render()
  },
})
