<template>
  <div
    :style="{
      padding: '24px',
      backgroundColor: 'var(--c-color-neutral-1)',
    }"
  >
    <c-space direction="column">
      <c-card hoverable title="Card Title" :style="{ width: '360px' }">
        <template #cover>
          <c-image
            :preview="false"
            width="100%"
            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
          />
        </template>
        <c-typography-text :ellipsis="{ rows: 2, showTooltip: true }">
          Card content content content Card content content content
        </c-typography-text>
      </c-card>
      <c-card hoverable title="Card Title" :style="{ width: '360px' }">
        <template #cover>
          <c-image
            :preview="false"
            width="100%"
            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
          />
        </template>
        <c-typography-text :ellipsis="{ rows: 2, showTooltip: true }">
          Card content content content Card content content content
        </c-typography-text>
      </c-card>
      <c-card hoverable direction="row" title="Card Title" :style="{ width: '360px' }">
        <template #cover>
          <c-image
            :preview="false"
            width="150px"
            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
          />
        </template>
        <c-typography-text :ellipsis="{ rows: 2, showTooltip: true }">
          Card content content content Card content content content
        </c-typography-text>
      </c-card>
      <c-card hoverable direction="row-reverse" title="Card Title" :style="{ width: '360px' }">
        <template #cover>
          <c-image
            :preview="false"
            width="150px"
            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
          />
        </template>
        <c-typography-text :ellipsis="{ rows: 2, showTooltip: true }">
          Card content content content Card content content content
        </c-typography-text>
      </c-card>
    </c-space>
  </div>
</template>

<script lang="ts" setup></script>
