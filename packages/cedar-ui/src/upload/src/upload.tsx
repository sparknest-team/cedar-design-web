import { defineComponent, useAttrs, useSlots, computed, reactive, ref, onMounted, PropType } from 'vue'
import { Upload, type UploadInstance } from '@arco-design/web-vue'
import { useExpose } from '../../_utils/use-expose'
import { IconUpload } from '../../icon'
import { validAttr } from './utils'
import { useI18n } from '../../locale'
import { h } from 'vue'
import { Spin } from '../../spin'
import { createNamespace } from '_utils/global-config'

type ShowUploadButton =
  | boolean
  | {
      showOnExceedLimit: boolean
    }


const { name } = createNamespace('upload')

export default defineComponent({
  name,
  emits: ['exceed-limit'],
  props: {
    // 上传的提示文案，目前仅开启 draggable 后生效
    tip: String,

    // 显示 n/m 格式的的上传文件数量的限制
    showLimit: Boolean,
    limit: Number,
    multiple: Boolean,
    progressMode: {
      type: String as PropType<'loading' | 'progress'>,
      default: 'loading',
    },
  },

  setup(props, { emit }) {
    const attrs = useAttrs()
    const slots = useSlots()
    const { t } = useI18n()
    // 是否开启了拖拽模式
    const isDraggable = computed(() => validAttr(attrs.draggable))

    // 定制 show-upload-button 参数
    const showUploadButton = computed((): ShowUploadButton => {
      if (validAttr(attrs.showUploadButton)) {
        return attrs.showUploadButton as ShowUploadButton
      }
      return { showOnExceedLimit: false }
    })

    // 定制拖拽模式下的上传按钮样式
    const draggableWrapper = () => {
      return (
        <div class="cedar-upload-drag-wrapper">
          <div class="cedar-upload-drag-content">
            <IconUpload size={14} style="margin-right: 6px;" />
            {t('upload.drag')}
            <span class="cedar-upload-drag-link">{t('upload.click')}</span>
          </div>

          {slots.tip || props.tip ? <div class="cedar-upload-drag-hint">{slots.tip?.() || props.tip}</div> : null}
        </div>
      )
    }
    const handleExceedLimit = (fileItem: any[], fileList: any[], ...args: any[]) => {
      if (props.limit === 1) {
        fileItem[0].file = fileList[0]
        fileItem[0].name = fileList[0].name
        fileItem[0].percent = 0
        fileItem[0].status = 'init'
        fileItem[0].url = undefined
      }
      emit('exceed-limit', fileItem, fileList, ...args)
    }
    const innerMultiple = props.multiple && props.limit !== 1
    const ins = ref<UploadInstance>()
    onMounted(() => useExpose(ins.value))
    return () => (
      <Upload
        ref={ins}
        {...attrs}
        class={props.progressMode === 'loading' ? 'cedar-upload-progress-loading' : ''}
        tip={props.tip}
        showUploadButton={showUploadButton.value}
        onExceedLimit={handleExceedLimit}
        multiple={innerMultiple}
        limit={props.limit}
        auto-upload={false}
        showCancelButton={
          (props.progressMode === 'loading'
            ? (attrs.showCancelButton ?? false)
            : (attrs.showCancelButton ?? true)) as boolean
        }
      >
        {{
          ...slots,
          'upload-button': isDraggable.value ? draggableWrapper() : slots['upload-button']?.(),
        }}
      </Upload>
    )
  },
})
