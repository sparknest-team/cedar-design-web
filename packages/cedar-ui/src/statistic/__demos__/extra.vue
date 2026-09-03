<template>
  <c-space size="xl" wrap>
    <c-statistic title="Revenue" :value="9280" prefix="$" show-group-separator extra="Compared to yesterday +12.8%" />
    <c-statistic title="New Users" :value="1280" show-group-separator>
      <template #extra>
        <span style="color: var(--c-color-success)">较上周 +8.4%</span>
      </template>
    </c-statistic>
  </c-space>
</template>
