<template>
  <c-row :gutter="[40, 20]">
    <c-col :span="12">
      <c-alert>This is an info alert.</c-alert>
    </c-col>
    <c-col :span="12">
      <c-alert type="success">This is a success alert.</c-alert>
    </c-col>
    <c-col :span="12">
      <c-alert type="warning">This is a warning alert.</c-alert>
    </c-col>
    <c-col :span="12">
      <c-alert type="danger">This is a danger alert.</c-alert>
    </c-col>
    <c-col :span="12">
      <c-alert type="default">This is a default alert (no built-in icon).</c-alert>
    </c-col>
  </c-row>
</template>

<script lang="ts" setup>
</script>
