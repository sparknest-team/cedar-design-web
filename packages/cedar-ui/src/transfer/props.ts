import { createNamespace } from '../_utils/global-config'
import { computed, defineComponent, PropType, provide, reactive, ref, toRef } from 'vue'
import { getPrefixCls } from '../_utils/global-config'
import TransferView from './transfer-view.vue'
import type { DataInfo, TransferFilter, TransferItem, TransferTargetItem, TransferValue } from './types'
import { transferInjectionKey } from './context'
import { useFormItem } from '../_hooks/use-form-item'
import Dialog from '../dialog'
import Input from '../input'
import type { TransferFixed, TransferTargetAction } from './types'

export const transferProps = {
    /**
     * @zh 穿梭框的数据
     * @en Data of the transfer
     */
    data: {
      type: Array as PropType<TransferItem[]>,
      default: () => [],
    },
    /**
     * @zh 目标选择框中的值
     * @en Value in the target selection box
     * @v-model
     */
    modelValue: {
      type: Array as PropType<TransferTargetItem[]>,
      default: undefined,
    },
    /**
     * @zh 目标选择框中默认的值（非受控状态）
     * @en The default value in the target selection box (uncontrolled state)
     */
    defaultValue: {
      type: Array as PropType<TransferTargetItem[]>,
      default: () => [],
    },
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /** 是否启用虚拟滚动，适用于大数据。 */
    virtualScroll: Boolean,
    /** 是否允许拖拽调整右侧已选项顺序。 */
    targetDraggable: Boolean,
    /** 右侧操作方式：删除图标或完整操作菜单。 */
    targetOperation: {
      type: String as PropType<'remove' | 'menu'>,
      default: 'remove',
    },
    clearText: String,
    targetActions: {
      type: Array as PropType<TransferTargetAction[]>,
      default: () => [],
    },
    /**
     * @zh 是否显示搜索框
     * @en Whether to show the search input
     */
    showSearch: {
      type: Boolean,
      default: false,
    },
    /** 是否开启源列表搜索。 */
    sourceFilterable: Boolean,
    /** 是否开启目标列表搜索。 */
    targetFilterable: Boolean,
    /** 搜索过滤函数。 */
    filter: {
      type: Function as PropType<TransferFilter>,
      default: (value: string, item: TransferItem) => item.label.toLowerCase().includes(value.toLowerCase()),
    },
    sourceFilterPlaceholder: String,
    targetFilterPlaceholder: String,
    /** 是否在源列表中保留已经选中的选项。 */
    showSelected: {
      type: Boolean,
      default: true,
    },
    sourceTitle: String,
    targetTitle: String,
    /**
     * @zh 是否展示全选勾选框
     * @en Whether show select all checkbox on the header
     * @version 2.39.0
     */
    showSelectAll: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 源选择框和目标选择框的标题
     * @en The title of the source and target selection boxes
     */
    title: {
      type: Array as PropType<string[]>,
      default: () => ['全选', '已选'],
    },
    /**
     * @zh 源选择框的搜索框配置
     * @en Search box configuration for source selection box
     * @version 2.51.1
     */
    sourceSearchProps: {
      type: Object,
    },
    /**
     * @zh 目标选择框的搜索框配置
     * @en Search box configuration for target selection box
     * @version 2.51.1
     */
    targetSearchProps: {
      type: Object,
    },
  } 
