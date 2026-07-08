<template>
  <div class="demo-container">
    <h4>基础用法</h4>
    <c-ellipsis style="width: 200px">
      这是一段很长的文本内容，当文本超出容器宽度时会自动省略并显示省略号。
    </c-ellipsis>

    <h4>固定宽度容器</h4>
    <div style="width: 150px; border: 1px solid #d9d9d9; padding: 8px;">
      <c-ellipsis>
        这是一段很长的文本内容，当文本超出容器宽度时会自动省略并显示省略号。
      </c-ellipsis>
    </div>

    <h4>响应式宽度</h4>
    <div style="max-width: 300px; border: 1px solid #d9d9d9; padding: 8px;">
      <c-ellipsis>
        这是一段很长的文本内容，当文本超出容器宽度时会自动省略并显示省略号。在不同的屏幕尺寸下，省略效果会自动适应。
      </c-ellipsis>
    </div>
  </div>
</template>

<script lang="ts" setup>
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
