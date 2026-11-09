<template>
  <template v-if="editable">
    <Tooltip :content="t('typography.edit')" v-bind="editTooltipProps">
      <button
        type="button"
        :disabled="disabled"
        :class="`${prefixCls}-operation-edit`"
        :aria-label="t('typography.edit')"
        @click.stop="onEditClick"
      >
        <IconEdit />
      </button>
    </Tooltip>
  </template>
  <template v-if="copyable">
    <Tooltip v-bind="copyTooltipProps">
      <template #content>
        <slot name="copy-tooltip" :copied="isCopied">
          {{ isCopied ? t('typography.copied') : t('typography.copy') }}
        </slot>
      </template>
      <button
        type="button"
        :disabled="disabled"
        :class="{
          [`${prefixCls}-operation-copied`]: isCopied,
          [`${prefixCls}-operation-copy`]: !isCopied,
        }"
        :aria-label="isCopied ? t('typography.copied') : t('typography.copy')"
        @click.stop="onCopyClick"
      >
        <slot name="copy-icon" :copied="isCopied">
          <IconCheckCircleFill v-if="isCopied" />
          <IconCopy v-else />
        </slot>
      </button>
    </Tooltip>
  </template>
  <button
    v-if="showExpand"
    type="button"
    :disabled="disabled"
    :class="`${prefixCls}-operation-expand`"
    :aria-expanded="expanded"
    @click.stop="onExpandClick"
  >
    <slot name="expand-node" :expanded="expanded">
      {{ expanded ? t('typography.collapse') : t('typography.expand') }}
    </slot>
  </button>
</template>
<script>
import { defineComponent, computed } from 'vue'
import Tooltip from '../tooltip'
import { IconCheckCircleFill } from '@cedar-design/icons-vue/icon-check-circle-fill'
import { IconCopy } from '@cedar-design/icons-vue/icon-copy'
import { IconEdit } from '@cedar-design/icons-vue/icon-edit'
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import { useI18n } from '../locale'

export default defineComponent({
  name: createNamespace('typography-operations').name,
  components: {
    Tooltip,
    IconCheckCircleFill,
    IconCopy,
    IconEdit,
  },
  props: {
    editable: Boolean,
    disabled: Boolean,
    copyable: Boolean,
    expandable: Boolean,
    isCopied: Boolean,
    isEllipsis: Boolean,
    expanded: Boolean,
    forceRenderExpand: Boolean,
    editTooltipProps: Object,
    copyTooltipProps: Object,
  },
  emits: {
    /**
     * @zh 点击编辑时触发
     * @en Triggered when editing is clicked
     */
    edit: () => true,
    /**
     * @zh 点击复制时触发
     * @en Triggered when copy is clicked
     */
    copy: () => true,
    /**
     * @zh 点击展开时触发
     * @en Triggered when click to expand
     */
    expand: () => true,
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
   * @en Custom expand and collapse buttons
   * @slot expand-node
   * @binding {boolean} expanded
   */
  setup(props, { emit }) {
    const prefixCls = getPrefixCls('typography')
    const showExpand = computed(() => props.forceRenderExpand || (props.expandable && props.isEllipsis))
    const { t } = useI18n()

    return {
      prefixCls,
      showExpand,
      t,
      onEditClick() {
        emit('edit')
      },
      onCopyClick() {
        emit('copy')
      },
      onExpandClick() {
        emit('expand')
      },
    }
  },
})
</script>
