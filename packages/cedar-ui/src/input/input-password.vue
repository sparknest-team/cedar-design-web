<template>
  <div :class="classes(n())">
    <Input ref="inputRef" :type="mergedVisible ? 'password' : 'text'" :disabled="disabled" v-bind="$attrs">
      <template v-if="$slots.prefix" #prefix>
        <slot name="prefix" />
      </template>
      <template v-if="invisibleButton || $slots.suffix" #suffix>
        <icon-hover
          v-if="invisibleButton"
          :disabled="disabled"
          @click="handleInvisible"
          @mousedown.prevent
          @mouseup.prevent
        >
          <icon-eye v-if="!mergedVisible" />
          <icon-eye-invisible v-else />
        </icon-hover>
        <slot name="suffix" />
      </template>
    </Input>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'
import IconHover from '../_components/icon-hover.vue'
import IconEye from '../icon/icon-eye'
import IconEyeInvisible from '../icon/icon-eye-invisible'
import useMergeState from '../_hooks/use-merge-state'
import Input from './input'
import { createNamespace } from '../_utils/global-config'
export default defineComponent({
  name: 'CInputPassword',
  components: {
    IconEye,
    IconEyeInvisible,
    IconHover,
    Input,
  },
  props: {
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否可见，受控属性
     * @en Whether is visible
     * @vModel
     */
    visibility: {
      type: Boolean,
      default: undefined,
    },
    /**
     * @zh 默认是否可见，非受控
     * @en Default visibility
     */
    defaultVisibility: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 是否显示可见按钮
     * @en Whether to show visible buttons
     */
    invisibleButton: {
      type: Boolean,
      default: true,
    },
  },
  emits: [
    /**
     * @zh visibility 改变时触发
     * @en Callback when visibility changes
     * @param {boolean} visible
     */
    'visibility-change',
    'update:visibility',
  ],
  setup(props, { emit }) {
    const { classes, n } = createNamespace('input-password')

    const { visibility, defaultVisibility } = toRefs(props)
    const inputRef = ref()

    const handleInvisible = () => {
      setVisible(!mergedVisible.value)
    }

    const [mergedVisible, setLocalVisible] = useMergeState(
      defaultVisibility.value,
      reactive({
        value: visibility,
      }),
    )

    const setVisible = (newVisible: boolean) => {
      if (newVisible !== mergedVisible.value) {
        emit('visibility-change', newVisible)
        emit('update:visibility', newVisible)
        setLocalVisible(newVisible)
      }
    }

    return {
      inputRef,
      mergedVisible,
      classes,
      n,
      handleInvisible,
    }
  },
  methods: {
    focus() {
      ;(this.inputRef as HTMLInputElement)?.focus()
    },
    blur() {
      ;(this.inputRef as HTMLInputElement)?.blur()
    },
  },
})
</script>
