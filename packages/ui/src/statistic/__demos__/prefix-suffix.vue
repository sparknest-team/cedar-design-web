<template>
  <c-space size="xl" wrap>
    <c-statistic title="Account Balance" :value="125670" prefix="$" show-group-separator />
    <c-statistic title="Growth Rate" :value="12.8" :precision="1" suffix="%" :value-style="{ color: 'var(--c-color-success)' }">
      <template #prefix>
        <IconArrowRise />
      </template>
    </c-statistic>
    <c-statistic title="Bounce Rate" :value="3.2" :precision="1" suffix="%" :value-style="{ color: 'var(--c-color-danger)' }">
      <template #prefix>
        <IconArrowFall />
      </template>
    </c-statistic>
  </c-space>
</template>

<script lang="ts" setup>
import { IconArrowFall, IconArrowRise } from '@cedar-design/icons-vue'
</script>
