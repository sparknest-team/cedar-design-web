<template>
  <c-row :gutter="[40, 20]">
    <c-col :span="12">
      <c-alert :show-icon="false">This is an info alert.</c-alert>
    </c-col>
    <c-col :span="12">
      <c-alert type="success" :show-icon="false">This is an success alert.</c-alert>
    </c-col>
    <c-col :span="12">
      <c-alert type="warning" :show-icon="false">
        <template #title> Warning </template>
        This is an warning alert.
      </c-alert>
    </c-col>
    <c-col :span="12">
      <c-alert type="danger" :show-icon="false">
        <template #title> Error </template>
        This is a danger alert.
      </c-alert>
    </c-col>
  </c-row>
</template>

<script lang="ts" setup>
</script>
