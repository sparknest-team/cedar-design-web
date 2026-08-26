import type { PropType } from 'vue'
import { computed, defineComponent, toRefs } from 'vue'
import { createNamespace } from '../_utils/global-config'
import type { ComponentSize } from '../_utils/constant'
import type { FormControlVariant } from '../_utils/form-control'
import { formControlVariants } from '../_utils/form-control'
import { componentSizes } from '../_utils/constant'

const { name, n, classes } = createNamespace('field-decorator')

/**
 * 表单触发器外壳（与 Maple `FieldDecorator` 同名同职责）。
 * 负责 variant / size / disabled / error / focus、前后缀槽、边框层。
 * 内容由消费者放入 default slot。
 */
export default defineComponent({
  name,
  inheritAttrs: false,
  props: {
    tag: {
      type: String as PropType<'div' | 'span'>,
      default: 'div',
    },
    variant: {
      type: String as PropType<FormControlVariant>,
      default: 'filled',
      validator: (value: unknown): value is FormControlVariant =>
        formControlVariants.includes(value as FormControlVariant),
    },
    size: {
      type: String as PropType<ComponentSize>,
      default: 'md',
      validator: (value: unknown): value is ComponentSize =>
        componentSizes.includes(value as ComponentSize),
    },
    disabled: Boolean,
    error: Boolean,
    focused: Boolean,
    title: String,
    onMousedown: Function as PropType<(event: MouseEvent) => void>,
  },
  setup(props, { slots, attrs }) {
    const { variant, size, disabled, error, focused } = toRefs(props)

    const rootCls = computed(() =>
      classes(
        n(),
        [size.value, n(`--size-${size.value}`)],
        [variant.value, n(`--variant-${variant.value}`)],
        [disabled.value, n('--disabled')],
        [error.value, n('--error')],
        [focused.value, n('--focus')],
        attrs.class as string | undefined,
      ),
    )

    return () => {
      const Tag = props.tag
      const { class: _class, ...restAttrs } = attrs
      return (
        <Tag
          {...restAttrs}
          class={rootCls.value}
          title={props.title}
          onMousedown={props.onMousedown}
        >
          {slots.prefix && <span class={classes(n('prefix'))}>{slots.prefix()}</span>}
          {slots.default?.()}
          {slots.suffix && <span class={classes(n('suffix'))}>{slots.suffix()}</span>}
          <div class={classes(n('border'))} />
          <div class={classes(n('border-state'))} />
        </Tag>
      )
    }
  },
})
