<template>
  <c-radio-group v-model="size">
    <c-radio value="xs">xs</c-radio>
    <c-radio value="sm">sm</c-radio>
    <c-radio value="md">md</c-radio>
    <c-radio value="lg">lg</c-radio>
    <c-radio value="xl">xl</c-radio>
  </c-radio-group>
  <br />
  <br />
  通过 divider 组件实现分割，并且通过 size-x 和 size-y 调整分割线尺寸。
  <br />
  <br />
  <c-space :size="size" wrap>
    <template #split>
      <c-divider orientation="vertical" size-x="md" size-y="0" />
    </template>
    <c-button status="primary">Item1</c-button>
    <c-button status="primary">Item2</c-button>
    <c-button status="primary">Item3</c-button>
    <c-button status="primary">Item4</c-button>
    <c-button status="primary">Item5</c-button>
    <c-button status="primary">Item6</c-button>
    <c-button status="primary">Item7</c-button>
    <c-button status="primary">Item8</c-button>
    <c-button status="primary">Item9</c-button>
    <c-button status="primary">Item10</c-button>
  </c-space>
  <br />
  通过自定义分割内容实现分割。
  <br />
  <br />
  <c-space :size="size" wrap>
    <template #split> <div>/</div> </template>
    <c-button status="primary">Item1</c-button>
    <c-button status="primary">Item2</c-button>
    <c-button status="primary">Item3</c-button>
    <c-button status="primary">Item4</c-button>
    <c-button status="primary">Item5</c-button>
    <c-button status="primary">Item6</c-button>
    <c-button status="primary">Item7</c-button>
    <c-button status="primary">Item8</c-button>
    <c-button status="primary">Item9</c-button>
    <c-button status="primary">Item10</c-button>
  </c-space>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const size = ref('md')
</script>
