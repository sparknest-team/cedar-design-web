<template>
  <div>
    <c-space direction="column" :size="48">
      <div class="overflow-hidden demo-box bg-primary">
        overflow-hidden 很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本
      </div>
      <div class="overflow-auto demo-box bg-primary">
        overflow-auto 很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本
      </div>
      <div class="overflow-scroll demo-box bg-primary">
        overflow-scroll 很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本
      </div>
      <div class="overflow-visible demo-box bg-primary">
        overflow-visible 很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本
      </div>
      <div class="text-ellipsis demo-box shadow-medium px-4 bg-primary mt-48">
        text-ellipsis 很长很长很长很长很长很长很长很长很长很长很长的文本
      </div>
      <div class="text-ellipsis-2 demo-box shadow-medium px-4 bg-primary">
        text-ellipsis-2 很长很长很长很长很长很长很长很长很长很长很长的文本
      </div>
    </c-space>
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
.demo-box {
  width: 150px;
  max-height: 50px;
}
</style>
