import { computed, defineComponent, nextTick, ref, watch } from 'vue'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import Input from '../input'
import { isExist, isFunction, isString } from '../_utils/is'
import { Backspace, ArrowLeft, ArrowRight } from '../_utils/keycode'
import { verificationCodeProps } from './props'

const { name } = createNamespace('verification-code')
type InputInstance = InstanceType<typeof Input>

export default defineComponent({
  name,
  props: verificationCodeProps,
  emits: {
    'update:modelValue': (value: string) => true,
    /**
     * @zh 值发生改变时触发
     * @en Triggered when the value changes
     * @param { string } value
     */
    change: (value: string) => true,
    /**
     * @zh 填充完成时触发
     * @en Triggered when the filling is complete
     * @param { string } value
     */
    finish: (value: string) => true,
    /**
     * @zh 输入时触发
     * @en Triggered on input
     * @param { string } inputValue
     * @param { number } index
     * @param {Event} ev
     */
    input: (inputValue: string, index: number, ev: Event) => true,
  },
  setup(props, { emit }) {
    const prefixCls = getPrefixCls('verification-code')
    const prefixInputCls = getPrefixCls('input')
    const inputRefList = ref<InputInstance[]>([])

    const mergedValue = computed(() => props.modelValue ?? props.defaultValue)
    const type = computed(() => (props.masked ? 'password' : 'text'))
    const inputCls = computed(() => [
      prefixInputCls,
      {
        [`${prefixInputCls}--size-${props.size}`]: props.size,
      },
    ])

    const filledValue = computed(() => {
      const newVal = String(mergedValue.value).split('')
      return new Array(props.length).fill('').map((_, index) => {
        return isExist(newVal[index]) ? String(newVal[index]) : ''
      }) as string[]
    })

    const innerValue = ref(filledValue.value)

    watch(mergedValue, () => {
      innerValue.value = filledValue.value
    })

    const updateValue = () => {
      const value = innerValue.value.join('').trim()
      emit('update:modelValue', value)
      emit('change', value)
      if (value.length === props.length) {
        emit('finish', value)
      }
      focusFirstEmptyInput()
    }

    const handleFocus = (index: number, select = false) => {
      inputRefList.value[index]?.focus()

      if (select) {
        nextTick(() => {
          inputRefList.value[index]?.inputRef?.select()
        })
      }
    }
    const focusFirstEmptyInput = (index?: number) => {
      if (isExist(index) && innerValue.value[index as number]) {
        return
      }
      for (let i = 0; i < innerValue.value.length; i++) {
        if (!innerValue.value[i]) {
          handleFocus(i)
          break
        }
      }
    }

    const handlePaste = (e: ClipboardEvent, index: number) => {
      e.preventDefault()
      const { clipboardData } = e
      const text = clipboardData?.getData('text')
      if (!text) return

      text.split('').forEach((char, i) => {
        if (index + i >= props.length) return

        if (isFunction(props.formatter)) {
          const result = props.formatter(char, index + i, innerValue.value.join(''))
          if (result === false) {
            index -= 1
            return
          }
          if (isString(result)) {
            char = result.charAt(0)
          }
        }

        innerValue.value[index + i] = char
      })
      updateValue()
    }

    const handleKeydown = (index: number, e: KeyboardEvent) => {
      const keyCode = e.code || e.key

      if (keyCode === Backspace.code && !innerValue.value[index]) {
        e.preventDefault()
        innerValue.value[Math.max(index - 1, 0)] = ''
        updateValue()
      } else if (keyCode === ArrowLeft.code && index > 0) {
        e.preventDefault()
        handleFocus(index - 1)
      } else if (keyCode === ArrowRight.code && innerValue.value[index] && index < props.length - 1) {
        e.preventDefault()
        handleFocus(index + 1)
      }
    }

    const handleInput = (index: number, value: string, event: Event) => {
      let char = (value || '').trim().charAt(value.length - 1)
      emit('input', char, index, event)

      if (isFunction(props.formatter)) {
        const result = props.formatter(char, index, innerValue.value.join(''))
        if (result === false) return
        if (isString(result)) {
          char = result.charAt(0)
        }
      }

      innerValue.value[index] = char
      updateValue()
    }

    return () => {
      return (
        <div class={prefixCls} role="group" aria-label={props.ariaLabel}>
          {innerValue.value.map((c, i) => (
            <>
              <Input
                key={i}
                ref={(el: any) => (inputRefList.value[i] = el)}
                type={type.value}
                class={inputCls.value}
                modelValue={c}
                size={props.size}
                error={props.error}
                disabled={props.disabled}
                readonly={props.readonly}
                clearable={false}
                inputAttrs={{
                  'aria-label': props.ariaLabel ? `${props.ariaLabel} ${i + 1}/${props.length}` : undefined,
                  autocomplete: i === 0 ? 'one-time-code' : 'off',
                }}
                onFocus={() => {
                  focusFirstEmptyInput(i)

                  if (innerValue.value[i]) {
                    handleFocus(i, true)
                  }
                }}
                onInput={(v, e) => handleInput(i, v, e)}
                // @ts-ignore
                onKeydown={(e) => handleKeydown(i, e)}
                onPaste={(e: ClipboardEvent) => handlePaste(e, i)}
              />
              {props.separator?.(i, c)}
            </>
          ))}
        </div>
      )
    }
  },
})
