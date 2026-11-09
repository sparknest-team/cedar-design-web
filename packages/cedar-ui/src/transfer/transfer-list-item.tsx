import { computed, defineComponent, inject, PropType } from 'vue'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import IconHover from '../_components/IconHover.vue'
import Checkbox from '../checkbox'
import { IconDragDotVertical } from '@cedar-design/icons-vue/icon-drag-dot-vertical'
import { IconInfoCircle } from '@cedar-design/icons-vue/icon-info-circle'
import Tooltip from '../tooltip'
import Popover from '../popover'
import { IconMore } from '@cedar-design/icons-vue/icon-more'
import { IconClose } from '@cedar-design/icons-vue/icon-close'
import type { TransferTargetAction } from './types'
import type { TransferItem, TransferValue } from './types'
import { transferInjectionKey } from './context'
import { useI18n } from '../locale'

const { name } = createNamespace('transfer-list-item')

export default defineComponent({
  name,
  props: {
    type: {
      type: String as PropType<'source' | 'target'>,
    },
    data: {
      type: Object as PropType<TransferItem>,
      required: true,
    },
    clearable: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    draggable: {
      type: Boolean,
    },
    simple: Boolean,
    operationMode: {
      type: String as PropType<'remove' | 'menu'>,
      default: 'remove',
    },
  },
  setup(props) {
    const prefixCls = getPrefixCls('transfer-list-item')
    const { t } = useI18n()
    const transferCtx = inject(transferInjectionKey, undefined)

    const handleClick = (_ev?: Event) => {
      if (props.simple && !props.disabled) {
        transferCtx?.moveTo([props.data.value], props.type === 'target' ? 'source' : 'target')
      }
    }

    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-disabled`]: props.disabled,
        [`${prefixCls}-draggable`]: props.draggable,
        [`${prefixCls}-fixed`]: props.data.fixed,
      },
    ])

    const handleRemove = () => {
      if (props.disabled || props.data.required) return
      transferCtx?.moveTo([props.data.value], 'source')
    }

    const isActionDisabled = (action: TransferTargetAction) =>
      typeof action.disabled === 'function' ? action.disabled(props.data) : action.disabled

    const operationMenu = () => (
      <div class={`${prefixCls}-operation-menu`}>
        <button type="button" onClick={() => transferCtx?.onRename(props.data)}>
          重命名
        </button>
        <button
          type="button"
          disabled={props.data.fixed === 'left'}
          onClick={() => transferCtx?.onFreeze(props.data.value, 'left')}
        >
          冻结到左侧
        </button>
        <button
          type="button"
          disabled={props.data.fixed === 'right'}
          onClick={() => transferCtx?.onFreeze(props.data.value, 'right')}
        >
          冻结到右侧
        </button>
        <button type="button" disabled={!props.data.fixed} onClick={() => transferCtx?.onFreeze(props.data.value)}>
          取消冻结
        </button>
        {transferCtx?.targetActions.map((action) => (
          <button
            key={action.key}
            type="button"
            class={action.danger ? `${prefixCls}-operation-danger` : undefined}
            disabled={isActionDisabled(action)}
            onClick={() => transferCtx?.onTargetAction(action, props.data)}
          >
            {action.label}
          </button>
        ))}
        <button
          type="button"
          class={`${prefixCls}-operation-danger`}
          disabled={props.data.required}
          onClick={handleRemove}
        >
          删除
        </button>
      </div>
    )

    return () => (
      <div
        class={cls.value}
        role={props.simple ? 'button' : undefined}
        tabindex={props.simple ? (props.disabled ? -1 : 0) : undefined}
        aria-disabled={props.simple ? props.disabled : undefined}
        onClick={handleClick}
        onKeydown={(event: KeyboardEvent) => {
          if (event.target === event.currentTarget && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault()
            handleClick(event as unknown as MouseEvent)
          }
        }}
      >
        {props.draggable && <IconDragDotVertical class={`${prefixCls}-drag-handle`} />}
        <div class={`${prefixCls}-details`}>
          {props.clearable || props.simple ? (
            <span class={`${prefixCls}-content`}>
              {transferCtx?.slots.item?.({
                label: props.data.label,
                value: props.data.value,
                item: props.data,
              }) ?? props.data.label}
            </span>
          ) : (
            <Checkbox
              class={[`${prefixCls}-content`, `${prefixCls}-checkbox`]}
              modelValue={transferCtx?.selected}
              value={props.data.value}
              onChange={(value: unknown) => transferCtx?.onSelect(value as TransferValue[])}
              uninjectGroupContext
              disabled={props.disabled}
            >
              {transferCtx?.slots.item?.({
                label: props.data.label,
                value: props.data.value,
                item: props.data,
              }) ?? props.data.label}
            </Checkbox>
          )}
          {props.data.tip && (
            <Tooltip
              v-slots={{
                content: () => (typeof props.data.tip === 'function' ? props.data.tip() : props.data.tip),
              }}
            >
              <span class={`${prefixCls}-tip`}>
                <IconInfoCircle />
              </span>
            </Tooltip>
          )}
        </div>
        {props.clearable && !props.disabled && props.operationMode === 'remove' && (
          <button type="button" class={`${prefixCls}-remove-btn`} aria-label={`移回候选：${props.data.label}`} disabled={props.data.required} onClick={(event: MouseEvent) => { event.stopPropagation(); handleRemove() }}>
            <IconClose />
          </button>
        )}
        {props.clearable && !props.disabled && props.operationMode === 'menu' && (
          <Popover trigger="click" placement="bottom-start" v-slots={{ content: operationMenu }}>
            <button type="button" class={`${prefixCls}-operation-btn`} aria-label={t('transfer.actions')}>
              <IconHover><IconMore /></IconHover>
            </button>
          </Popover>
        )}
      </div>
    )
  },
})
