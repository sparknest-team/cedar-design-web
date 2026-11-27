<template>
  <div :class="classNames">
    <Input
      ref="inputRef"
      :model-value="text"
      :input-attrs="inputAttrs"
      @blur="onBlur"
      @input="onChange"
      @press-enter="onPressEnter"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, ref } from 'vue'
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import Input from '../input'

export default defineComponent({
  name: createNamespace('typography-edit-content').name,
  components: {
    Input,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    inputAttrs: { type: Object, default: () => ({}) },
  },
  emits: ['change', 'end', 'update:text'],
  setup(_, { emit }) {
    const prefixCls = getPrefixCls('typography')
    const classNames = [`${prefixCls}-edit-content`]
    const inputRef = ref<typeof Input>()

    function onChange(value: string | null) {
      emit('update:text', value)
      emit('change', value)
    }

    let ending = false
    function onEnd(reason: 'enter' | 'blur') {
      if (ending) return
      ending = true
      emit('end', reason)
      nextTick(() => {
        ending = false
      })
    }

    onMounted(() => {
      if (!inputRef.value || !inputRef.value.$el) return

      const inputEl = inputRef.value.$el.querySelector('input')
      if (!inputEl) return

      inputEl.focus && inputEl.focus()

      const { length } = inputEl.value
      inputEl.setSelectionRange(length, length)
    })

    return {
      classNames,
      inputRef,
      onBlur: () => onEnd('blur'),
      onChange,
      onPressEnter: () => onEnd('enter'),
    }
  },
})
</script>
