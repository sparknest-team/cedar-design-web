<template>
  <h3>堆叠状态</h3>
  <p>通过 stacked 属性设置按钮为堆叠状态，图标和文字会垂直排列。</p>
  <c-space wrap>
    <c-button stacked status="primary">
      <template #icon>
        <c-icon-plus />
      </template>
      添加
    </c-button>
    <c-button stacked status="primary">
      <template #icon>
        <c-icon-edit />
      </template>
      编辑
    </c-button>
    <c-button stacked status="danger">
      <template #icon>
        <c-icon-delete />
      </template>
      删除
    </c-button>
  </c-space>
</template>

<script setup lang="ts">
import {
  IconPlus,
  IconEdit,
  IconDelete,
} from '@cedarjs/icons-vue'
</script>
