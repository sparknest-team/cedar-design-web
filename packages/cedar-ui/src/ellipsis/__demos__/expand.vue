<template>
  <div class="demo-container">
    <h4>点击展开收起（单行）</h4>
    <c-ellipsis 
      style="width: 200px" 
      :expand-trigger="'click'"
      v-model:expand="expanded1"
    >
      这是一段很长的文本内容，当文本超出容器宽度时会自动省略并显示省略号。点击可以展开查看完整内容。
    </c-ellipsis>

    <h4>点击展开收起（多行）</h4>
    <c-ellipsis 
      style="width: 200px" 
      :line-clamp="2"
      :expand-trigger="'click'"
      v-model:expand="expanded2"
    >
      这是一段很长的文本内容，当文本超出容器宽度时会自动省略并显示省略号。这是第二行内容，用于演示多行省略的效果。点击可以展开查看完整内容。
    </c-ellipsis>

    <h4>展开状态：{{ expanded1 ? '已展开' : '已收起' }} / {{ expanded2 ? '已展开' : '已收起' }}</h4>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const expanded1 = ref(false)
const expanded2 = ref(false)
</script>

<style scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

h4 {
  margin: 0 0 8px 0;
  font-size: 14px;
  color: #666;
}
</style>
