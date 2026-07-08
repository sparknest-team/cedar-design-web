<template>
  <c-row :gutter="[40, 20]">
    <c-col :span="12">
      <c-alert>This is an info alert.</c-alert>
    </c-col>
    <c-col :span="12">
      <c-alert type="success">This is an success alert.</c-alert>
    </c-col>
    <c-col :span="12">
      <c-alert type="warning">This is an warning alert.</c-alert>
    </c-col>
    <c-col :span="12">
      <c-alert type="danger">This is a danger alert.</c-alert>
    </c-col>
    <c-col :span="12">
      <c-alert type="default">
        <template #icon>
          <c-icon-exclamation-circle-fill />
        </template>
        This is a default alert.
      </c-alert>
    </c-col>
  </c-row>
</template>

<script lang="ts" setup>
</script>
