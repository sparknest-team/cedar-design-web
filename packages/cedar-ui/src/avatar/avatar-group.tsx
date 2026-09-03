import { defineComponent, reactive, ref, provide, toRefs, computed, inject } from 'vue'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import Avatar from './avatar.vue'
import Popover from '../popover'
import { getAllElements } from '../_utils/vue-utils'
import { avatarGroupInjectionKey } from './context'
import { configProviderInjectionKey } from '../config-provider/context'
import { avatarGroupProps } from './props'

const { name } = createNamespace('avatar-group')

const AvatarGroup = defineComponent({
  name,
  props: avatarGroupProps,
  setup(props, { slots }) {
    const { shape, size, autoFixFontSize, zIndexAscend } = toRefs(props)
    const prefixCls = getPrefixCls('avatar-group')
    const configCtx = inject(configProviderInjectionKey, undefined)
    const rtl = computed(() => configCtx?.rtl ?? false)
    const groupStyle = computed(() =>
      props.offset == null
        ? undefined
        : {
            '--c-avatar-group-offset':
              typeof props.offset === 'number' ? `${props.offset}px` : props.offset,
          },
    )

    const total = ref(0)

    provide(
      avatarGroupInjectionKey,
      reactive({
        shape,
        size,
        autoFixFontSize,
        zIndexAscend,
        total,
        rtl,
      }),
    )

    return () => {
      const children = getAllElements(slots.default?.() ?? [])
      const avatarsToRender = props.maxCount > 0 ? children.slice(0, props.maxCount) : children
      const avatarsInPopover = props.maxCount > 0 ? children.slice(props.maxCount) : []

      if (total.value !== children.length) {
        total.value = children.length
      }

      return (
        <div
          class={[
            prefixCls,
            {
              [`${prefixCls}-vertical`]: props.vertical,
              [`${prefixCls}-rtl`]: rtl.value,
            },
          ]}
          style={groupStyle.value}
        >
          {avatarsToRender}
          {avatarsInPopover.length > 0 && (
            <Popover
              v-slots={{
                content: () => <div>{avatarsInPopover}</div>,
              }}
              {...props.maxPopoverProps}
            >
              <Avatar class={`${prefixCls}-max-count-avatar`} style={props.maxStyle}>
                +{avatarsInPopover.length}
              </Avatar>
            </Popover>
          )}
        </div>
      )
    }
  },
})

export default AvatarGroup
