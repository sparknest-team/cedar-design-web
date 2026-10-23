import {
  defineComponent,
  VNode,
  toRefs,
  computed,
  ref,
  onBeforeUnmount,
  onActivated,
  onDeactivated,
  VNodeTypes,
  watch,
  reactive,
  onMounted,
  onUpdated,
} from 'vue'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import { isObject } from '../_utils/is'
import type { EllipsisConfig, EllipsisInternalConfig } from './types'
import EditContent from './EditContent.vue'
import Operations from './Operations.vue'
import ResizeObserver from '../_components/resize-observer'
import { omit } from '../_utils/omit'
import useMergeState from '../_hooks/use-merge-state'
import measure from './utils/measure'
import { clipboard } from '../_utils/clipboard'
import getInnerText from './utils/getInnerText'
import { caf, raf } from '../_utils/raf'
import Tooltip from '../tooltip'
import Popover from '../popover'
import { typographyBaseInternalProps } from './props'
import type { TypographyBaseProps } from './props'

interface BaseInternalProps extends TypographyBaseProps {
  component?: keyof HTMLElementTagNameMap
}

function getComponentTags(props: BaseInternalProps): (keyof HTMLElementTagNameMap)[] {
  const { bold, mark, underline, delete: propDelete, code } = props
  const componentTags: (keyof HTMLElementTagNameMap)[] = []

  if (bold) {
    componentTags.push('b')
  }
  if (underline) {
    componentTags.push('u')
  }
  if (propDelete) {
    componentTags.push('del')
  }
  if (code) {
    componentTags.push('code')
  }
  if (mark) {
    componentTags.push('mark')
  }

  return componentTags
}

function Wrap(props: BaseInternalProps, children: VNodeTypes) {
  const { mark } = props
  const componentTags = getComponentTags(props)
  const markStyle = isObject(mark) && mark.color ? { backgroundColor: mark.color } : {}

  return componentTags.reduce((content, Tag) => {
    const attrs = Tag === 'mark' ? { style: markStyle } : {}
    return <Tag {...attrs}>{content}</Tag>
  }, children)
}

function normalizeEllipsisConfig(config: EllipsisConfig): EllipsisInternalConfig {
  const showTooltip = !!config.showTooltip
  const TooltipComponent = isObject(config.showTooltip) && config.showTooltip.type === 'popover' ? Popover : Tooltip
  const tooltipProps = (isObject(config.showTooltip) && config.showTooltip.props) || {}

  return {
    rows: 1,
    suffix: '',
    ellipsisStr: '...',
    expandable: false,
    css: false,
    ...omit(config, ['showTooltip']),
    showTooltip,
    TooltipComponent,
    tooltipProps,
  }
}

/**
 * @display-name Common
 * @no-brackets
 */

const { name } = createNamespace('typography-base')

export default defineComponent({
  name,
  inheritAttrs: false,
  props: typographyBaseInternalProps,

  emits: {
    /**
     * @zh 开始编辑
     * @en Edit start
     */
    "edit-start": () => true,
    /**
     * @zh 编辑内容变化
     * @en Edit content change
     * @param {string} text
     */
    change: (text: string) => true,
    'update:editText': (text: string) => true,
    /**
     * @zh 编辑结束
     * @en Edit end
     */
    "edit-end": () => true,
    'update:editing': (editing: boolean) => true,
    /**
     * @zh 复制
     * @en Copy
     * @param {string} text
     */
    copy: (text: string) => true,
    /**
     * @zh 省略变化事件
     * @en Ellipsis change
     * @param {boolean} isEllipsis
     */
    ellipsis: (isEllipsis: boolean) => true,
    /**
     * @zh 展开收起事件
     * @en Expand collapse event
     * @param {boolean} expanded
     */
    expand: (expanded: boolean) => true,
  },
  /**
   * @zh 自定义复制按钮的 tooltip 内容
   * @en Customize the tooltip content of the copy button
   * @slot copy-tooltip
   * @binding {boolean} copied
   */
  /**
   * @zh 自定义复制按钮图标
   * @en Custom copy button icon
   * @slot copy-icon
   * @binding {boolean} copied
   */
  /**
   * @zh 自定义展开和折叠按钮
   * @en Custom expand button
   * @slot expand-node
   * @binding {boolean} expanded
   */
  setup(props, { slots, emit, attrs }) {
    const {
      editing: propEditing,
      defaultEditing,
      ellipsis,
      copyable,
      editable,
      copyText,
      editText,
      copyDelay,
      component,
    } = toRefs(props)

    const prefixCls = getPrefixCls('typography')
    const classNames = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-${props.status}`]: props.status,
        [`${prefixCls}-disabled`]: props.disabled,
      },
    ])

    const wrapperRef = ref()
    const fullText = ref('')
    let active = true
    let disposed = false
    const lifecycleEpoch = ref(0)
    const available = () => active && !disposed

    // for edit
    const [editing, setEditing] = useMergeState(
      defaultEditing.value,
      reactive({
        value: propEditing,
      }),
    )
    const mergeEditing = computed(() => editable.value && editing.value)

    function onEditStart() {
      if (!available() || props.disabled) return
      emit('update:editing', true)
      emit('edit-start')
      setEditing(true)
    }

    function onEditChange(text: string) {
      if (!available() || props.disabled) return
      emit('update:editText', text)
      emit('change', text)
    }

    function onEditEnd() {
      if (!available() || !editing.value) return
      emit('update:editing', false)
      emit('edit-end')
      setEditing(false)
    }

    // for copy
    const isCopied = ref(false)
    let copyTimer: ReturnType<typeof setTimeout> | null = null
    let copyGeneration = 0

    function cancelCopy() {
      copyGeneration++
      if (copyTimer !== null) clearTimeout(copyTimer)
      copyTimer = null
      isCopied.value = false
    }

    function onCopyClick() {
      if (!available() || props.disabled || !copyable.value) return
      cancelCopy()
      const generation = copyGeneration
      const current = () => available() && !props.disabled && copyable.value && generation === copyGeneration
      const text = copyText.value ?? fullText.value

      clipboard(text || '')
      if (!current()) return

      isCopied.value = true

      emit('copy', text)
      if (!current()) return

      copyTimer = setTimeout(() => {
        if (!current()) return
        copyGeneration++
        copyTimer = null
        isCopied.value = false
      }, copyDelay.value)
    }

    watch([copyable, copyDelay, () => props.disabled], cancelCopy, { flush: 'sync' })

    // for ellipsis
    const isEllipsis = ref(false)
    const expanded = ref(false)
    const ellipsisText = ref('')
    const ellipsisConfig = computed<EllipsisInternalConfig>(() =>
      normalizeEllipsisConfig((isObject(ellipsis.value) && ellipsis.value) || {}),
    )
    let rafId: number | null = null
    let measureGeneration = 0

    function cancelMeasurement() {
      measureGeneration++
      if (rafId !== null) caf(rafId)
      rafId = null
    }

    function onExpandClick() {
      if (!available() || props.disabled) return
      const newVal = !expanded.value
      expanded.value = newVal
      emit('expand', newVal)
    }

    function renderOperations(forceRenderExpand = false) {
      if (ellipsisConfig.value.css) {
        return (
          <Operations
            editable={editable.value}
            copyable={copyable.value}
            expandable={ellipsisConfig.value.expandable}
            isCopied={isCopied.value}
            isEllipsis={showCSSTooltip.value}
            expanded={expanded.value}
            forceRenderExpand={forceRenderExpand || expanded.value}
            editTooltipProps={props.editTooltipProps}
            copyTooltipProps={props.copyTooltipProps}
            onEdit={onEditStart}
            onCopy={onCopyClick}
            onExpand={onExpandClick}
            v-slots={{
              'copy-tooltip': slots['copy-tooltip'],
              'copy-icon': slots['copy-icon'],
              'expand-node': slots['expand-node'],
            }}
          />
        )
      }

      return (
        <Operations
          editable={editable.value}
          copyable={copyable.value}
          expandable={ellipsisConfig.value.expandable}
          isCopied={isCopied.value}
          isEllipsis={isEllipsis.value}
          expanded={expanded.value}
          forceRenderExpand={forceRenderExpand}
          editTooltipProps={props.editTooltipProps}
          copyTooltipProps={props.copyTooltipProps}
          onEdit={onEditStart}
          onCopy={onCopyClick}
          onExpand={onExpandClick}
          v-slots={{
            'copy-tooltip': slots['copy-tooltip'],
            'copy-icon': slots['copy-icon'],
            'expand-node': slots['expand-node'],
          }}
        />
      )
    }

    function calEllipsis(generation: number) {
      const element = wrapperRef.value
      const current = () => available() && generation === measureGeneration && element === wrapperRef.value && !!ellipsis.value && !expanded.value && !mergeEditing.value
      if (!element || !current()) return

      const { ellipsis: measuredEllipsis, text } = measure(
        element,
        ellipsisConfig.value,
        renderOperations(!!ellipsisConfig.value.expandable),
        fullText.value,
      )
      if (!current()) return

      if (isEllipsis.value !== measuredEllipsis) {
        isEllipsis.value = measuredEllipsis
        if (!ellipsisConfig.value.css) {
          emit('ellipsis', measuredEllipsis)
        }
      }
      if (!current()) return

      if (ellipsisText.value !== text) {
        ellipsisText.value = text || ''
      }
    }

    function resizeOnNextFrame() {
      cancelMeasurement()
      const needCalEllipsis = available() && ellipsis.value && !expanded.value && !mergeEditing.value && !ellipsisConfig.value.css
      if (!needCalEllipsis) return

      const generation = measureGeneration
      rafId = raf(() => {
        if (!available() || generation !== measureGeneration) return
        rafId = null
        // Consume before measuring: a replay or reentrant operation cannot reuse this frame.
        measureGeneration++
        calEllipsis(measureGeneration)
      })
    }

    onBeforeUnmount(() => {
      disposed = true
      active = false
      lifecycleEpoch.value++
      cancelCopy()
      cancelMeasurement()
    })
    onDeactivated(() => {
      active = false
      lifecycleEpoch.value++
      cancelCopy()
      cancelMeasurement()
    })
    onActivated(() => {
      if (active || disposed) return
      active = true
      lifecycleEpoch.value++
      if (ellipsisConfig.value.css) calTooltip()
      else resizeOnNextFrame()
    })

    watch(
      () => [ellipsisConfig.value, expanded.value, mergeEditing.value],
      () => {
        resizeOnNextFrame()
      }, { flush: 'sync' },
    )

    watch(ellipsis, (newVal) => {
      if (newVal) {
        resizeOnNextFrame()
      } else {
        cancelMeasurement()
        isEllipsis.value = false
      }
    }, { flush: 'sync' })

    let children: VNode[] = []

    const updateFullText = () => {
      if (ellipsis.value || copyable.value || editable.value) {
        const _fullText = getInnerText(children)

        if (_fullText !== fullText.value) {
          fullText.value = _fullText
          resizeOnNextFrame()
        }
      }
    }

    onMounted(updateFullText)
    onUpdated(updateFullText)

    const contentRef = ref<HTMLElement>()
    const showCSSTooltip = ref(false)

    const calTooltip = () => {
      if (available() && !expanded.value && !mergeEditing.value && ellipsisConfig.value.css && wrapperRef.value && contentRef.value) {
        const generation = measureGeneration
        const wrapper = wrapperRef.value, content = contentRef.value
        const _show = content.offsetHeight > wrapper.offsetHeight
        if (!available() || generation !== measureGeneration || wrapper !== wrapperRef.value || content !== contentRef.value) return
        if (_show !== showCSSTooltip.value) {
          showCSSTooltip.value = _show
          emit('ellipsis', _show)
        }
      }
    }

    function createResizeHandler(css = false) {
      const epoch = lifecycleEpoch.value
      return () => {
        if (!available() || epoch !== lifecycleEpoch.value) return
        if (css) calTooltip()
        else resizeOnNextFrame()
      }
    }

    const ellipsisStyle = computed(() => {
      if (expanded.value) {
        return {}
      }

      return {
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
        display: '-webkit-box',
        '-webkit-line-clamp': ellipsisConfig.value.rows,
        '-webkit-box-orient': 'vertical',
      }
    })

    return () => {
      children = slots.default?.() || []

      // 编辑中
      if (mergeEditing.value) {
        const _editText = editText.value ?? fullText.value

        return (
          <EditContent
            text={_editText}
            onChange={(text: string) => {
              if (text !== _editText) {
                onEditChange(text)
              }
            }}
            onEnd={onEditEnd}
          />
        )
      }

      const { suffix, ellipsisStr, showTooltip, tooltipProps, TooltipComponent } = ellipsisConfig.value
      const showEllipsis = isEllipsis.value && !expanded.value

      const titleAttrs = showEllipsis && !showTooltip ? { title: fullText.value } : {}
      const Component = component.value as keyof HTMLElementTagNameMap

      if (ellipsisConfig.value.css) {
        const Content = Wrap(props as BaseInternalProps, children)
        const Outer = (
          <Component class={classNames.value} ref={wrapperRef} style={ellipsisStyle.value} {...titleAttrs} {...attrs}>
            <span ref={contentRef}>{Content}</span>
          </Component>
        )

        if (showCSSTooltip.value) {
          return (
            <TooltipComponent
              {...tooltipProps}
              onResize={createResizeHandler(true)}
              v-slots={{
                content: () => fullText.value,
              }}
            >
              {Outer}
            </TooltipComponent>
          )
        }

        return (
          <ResizeObserver
            onResize={createResizeHandler(true)}
          >
            {Outer}
          </ResizeObserver>
        )
      }

      const Content = Wrap(props as BaseInternalProps, showEllipsis ? ellipsisText.value : children)

      return (
        <ResizeObserver onResize={createResizeHandler()}>
          <Component class={classNames.value} ref={wrapperRef} {...titleAttrs} {...attrs}>
            {showEllipsis && showTooltip ? (
              <TooltipComponent
                {...tooltipProps}
                v-slots={{
                  content: () => fullText.value,
                }}
              >
                <span>{Content}</span>
              </TooltipComponent>
            ) : (
              Content
            )}
            {showEllipsis ? ellipsisStr : null}
            {suffix}
            {renderOperations()}
          </Component>
        </ResizeObserver>
      )
    }
  },
})
