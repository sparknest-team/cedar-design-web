import { computed, defineComponent, inject, PropType } from 'vue'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import IconHover from '../_components/icon-hover.vue'
import Checkbox from '../checkbox'
import IconDragDotVertical from '../icon/icon-drag-dot-vertical'
import IconInfoCircle from '../icon/icon-info-circle'
import Tooltip from '../tooltip'
import Popover from '../popover'
import IconMore from '../icon/icon-more'
import IconClose from '../icon/icon-close'
import type { TransferTargetAction } from './types'
import type { TransferItem, TransferValue } from './types'
import { transferInjectionKey } from './context'

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
    const transferCtx = inject(transferInjectionKey, undefined)

    const handleClick = () => {
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
      if (props.data.required) return
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
      <div class={cls.value} onClick={handleClick}>
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
            <Tooltip content={props.data.tip}>
              <span class={`${prefixCls}-tip`}>
                <IconInfoCircle />
              </span>
            </Tooltip>
          )}
        </div>
        {props.clearable && !props.disabled && props.operationMode === 'remove' && (
          <IconHover class={`${prefixCls}-remove-btn`} onClick={handleRemove}>
            <IconClose />
          </IconHover>
        )}
        {props.clearable && !props.disabled && props.operationMode === 'menu' && (
          <Popover trigger="click" placement="bottom-start" v-slots={{ content: operationMenu }}>
            <IconHover class={`${prefixCls}-operation-btn`}>
              <IconMore />
            </IconHover>
          </Popover>
        )}
      </div>
    )
  },
})
