<template>
  <c-transfer :data="data" :default-value="value">
    <template #source-title="{ countTotal, countSelected, checked, indeterminate, onSelectAllChange }">
      <div :style="styleHeader">
        Source Title {{ countSelected }}-{{ countTotal }}
        <c-checkbox :model-value="checked" :indeterminate="indeterminate" @change="onSelectAllChange" />
      </div>
    </template>

    <template #target-title="{ countTotal, countSelected, onClear }">
      <div :style="styleHeader">
        Target Title {{ countSelected }}-{{ countTotal }}
        <c-icon-delete @click="onClear" />
      </div>
    </template>
  </c-transfer>
</template>

<script lang="ts" setup>
const data = Array(8)
  .fill(undefined)
  .map((_, index) => ({
    value: `option${index + 1}`,
    label: `Option ${index + 1}`,
  }))
const value = ['option1', 'option3', 'option5']

const styleHeader = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: '8px',
}
</script>
