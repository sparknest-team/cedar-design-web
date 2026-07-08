<template>
  <div class="demo-container">
    <h4>单行省略（默认）</h4>
    <c-ellipsis style="width: 200px">
      这是一段很长的文本内容，当文本超出容器宽度时会自动省略并显示省略号。
    </c-ellipsis>

    <h4>两行省略</h4>
    <c-ellipsis style="width: 200px" :line-clamp="2">
      这是一段很长的文本内容，当文本超出容器宽度时会自动省略并显示省略号。这是第二行内容，用于演示多行省略的效果。
    </c-ellipsis>

    <h4>三行省略</h4>
    <c-ellipsis style="width: 200px" :line-clamp="3">
      这是一段很长的文本内容，当文本超出容器宽度时会自动省略并显示省略号。这是第二行内容，用于演示多行省略的效果。这是第三行内容，继续展示多行省略的功能。
    </c-ellipsis>
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
