<template>
  自定义的颜色，inline-position为end
  <br />
  <br />
  <c-space wrap>
    <c-badge
      v-for="color in customColors"
      :key="color"
      :color="color"
      :description="color"
      :style="{ marginRight: '24px' }"
      mode="inline"
      inline-position="end"
    />
  </c-space>
  <br />
  通过 status 设置徽标的状态
  <br />
  <br />
  <c-space wrap>
    <c-badge status="default" description="Default" mode="inline" />
    <c-badge status="success" description="Success" mode="inline" />
    <c-badge status="warning" description="Warning" mode="inline" />
    <c-badge status="danger" description="Danger" mode="inline" />
  </c-space>
  <br />
  <c-space wrap>
    <c-badge status="default" description="Default" content="1" />
    <c-badge status="success" description="Success" content="1" />
    <c-badge status="warning" description="Warning" content="1" />
    <c-badge status="danger" description="Danger" content="1" />
  </c-space>
  <br />
  <c-space wrap>
    <c-badge status="default" content="Default" />
    <c-badge status="success" content="Success" />
    <c-badge status="warning" content="Warning" />
    <c-badge status="danger" content="Danger" />
    <c-badge status="primary" content="Primary" />
    <c-badge status="info" content="Info" />
  </c-space>
  <br />
  自定义背景色和内容颜色
  <br />
  <br />
  <c-space wrap>
    <c-badge description="red #7BC616" content="1" color="red" text-color="#7BC616" />
    <c-badge description="green red" content="1" color="green" text-color="red" />
    <c-badge description="yellow red" content="1" color="yellow" text-color="red" />
  </c-space>
</template>

<script lang="ts" setup>
const customColors = [
  '#F53F3F',
  '#7816FF',
  '#00B42A',
  '#00BEBE',
  '#FF7D00',
  '#EB0AA4',
  '#7BC616',
  '#86909C',
  '#B71DE8',
  '#0FC6C2',
  '#FFB400',
  '#168CFF',
  '#FF5722',
]
</script>
