<template>
  <c-space size="xl" wrap>
    <c-statistic title="Active Users">
      <c-count-to :from="0" :to="125670" :duration="2000" />
    </c-statistic>
    <c-statistic title="Conversion Rate" suffix="%">
      <c-count-to :from="0" :to="36.8" :duration="2000" :precision="1" />
    </c-statistic>
  </c-space>
</template>
