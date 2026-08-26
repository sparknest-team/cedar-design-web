<template>
  <span :class="prefixCls">
    <Select
      :model-value="pageSize"
      :options="options"
      :size="size"
      :disabled="disabled"
      v-bind="selectProps"
      @change="handleChange"
    />
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { useI18n } from '../locale'
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import type { ComponentSize } from '../_utils/constant'
import Select from '../select'

export default defineComponent({
  name: createNamespace('pagination-options').name,
  components: {
    Select,
  },
  props: {
    sizeOptions: {
      type: Array as PropType<(string | number)[]>,
      required: true,
    },
    pageSize: Number,
    disabled: Boolean,
    size: {
      type: String as PropType<ComponentSize>,
    },
    onChange: {
      type: Function as PropType<(value: number) => void>,
    },
    selectProps: {
      type: Object,
    },
  },
  emits: ['change'],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls('pagination-options')
    const { t } = useI18n()
    const options = computed(() =>
      props.sizeOptions.map((value) => ({
        value,
        label: `${value} ${t('pagination.countPerPage')}`,
      })),
    )

    const handleChange = (
      value: string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[],
    ) => {
      emit('change', value)
    }

    return {
      prefixCls,
      options,
      handleChange,
    }
  },
})
</script>
