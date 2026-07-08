<template>
  <c-space direction="column">
    <c-switch v-model="isLoading"></c-switch>
    <c-card v-loading="isLoading" :body-padding="false" :style="{ width: '360px' }" hoverable title="Loading Card">
      <div class="p-16">
        <CardHeader title="Card Title">
          <template #extra>
            <Link>More</Link>
          </template>
        </CardHeader>
        通过设置 v-loading 属性，可以让 Card 组件在加载数据时显示加载中状态。
      </div>
    </c-card>
  </c-space>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const isLoading = ref(false)
</script>
