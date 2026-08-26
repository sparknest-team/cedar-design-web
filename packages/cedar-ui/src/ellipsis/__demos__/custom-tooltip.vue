<template>
  <div class="demo-container">
    <h4>默认 Tooltip</h4>
    <c-ellipsis style="width: 200px">
      这是一段很长的文本内容，当文本超出容器宽度时会自动省略并显示省略号。
    </c-ellipsis>

    <h4>自定义 Tooltip 内容</h4>
    <c-ellipsis style="width: 200px">
      这是一段很长的文本内容，当文本超出容器宽度时会自动省略并显示省略号。
      <template #tooltip-content>
        <div class="custom-tooltip">
          <strong>完整内容：</strong>
          <br />
          这是一段很长的文本内容，当文本超出容器宽度时会自动省略并显示省略号。
        </div>
      </template>
    </c-ellipsis>

    <h4>禁用 Tooltip</h4>
    <c-ellipsis style="width: 200px" :tooltip="false">
      这是一段很长的文本内容，当文本超出容器宽度时会自动省略并显示省略号。
    </c-ellipsis>

    <h4>自定义 Tooltip 配置</h4>
    <c-ellipsis 
      style="width: 200px" 
      :tooltip="{
        content: '这是自定义的 tooltip 提示内容',
        placement: 'bottom',
        'background-color': '#722ED1'
      }"
    >
      这是一段很长的文本内容，当文本超出容器宽度时会自动省略并显示省略号。
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

.custom-tooltip {
  padding: 8px;
  line-height: 1.5;
}
</style>
