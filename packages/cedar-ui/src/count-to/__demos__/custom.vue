<template>
  <c-count-to :to="123456">
    <template #default="{ value }">
      {{ value.toLocaleString() }}
    </template>
  </c-count-to>
</template>
