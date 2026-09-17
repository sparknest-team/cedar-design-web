<template>
  <div :class="classes(n())">
    <Input ref="inputRef" :type="mergedVisible ? 'text' : 'password'" :disabled="disabled" v-bind="$attrs">
      <template v-if="$slots.prefix" #prefix>
        <slot name="prefix" />
      </template>
      <template v-if="visibilityToggle || $slots.suffix" #suffix>
        <icon-hover
          v-if="visibilityToggle"
          :disabled="disabled"
          role="button"
          tabindex="0"
          :aria-label="t(mergedVisible ? 'common.hidePassword' : 'common.showPassword')"
          :aria-pressed="mergedVisible"
          @click="handleInvisible"
          @keydown.enter.prevent="handleInvisible"
          @keydown.space.prevent="handleInvisible"
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
import IconHover from '../_components/IconHover.vue'
import { IconEye } from '@cedarjs/icons-vue/icon-eye'
import { IconEyeInvisible } from '@cedarjs/icons-vue/icon-eye-invisible'
import useMergeState from '../_hooks/use-merge-state'
import Input from './input'
import { createNamespace } from '../_utils/global-config'
import { inputPasswordProps } from './props'
import { useI18n } from '../locale'
export default defineComponent({
  name: createNamespace('input-password').name,
  components: {
    IconEye,
    IconEyeInvisible,
    IconHover,
    Input,
  },
  props: inputPasswordProps,

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
    const { t } = useI18n()

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
      t,
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
