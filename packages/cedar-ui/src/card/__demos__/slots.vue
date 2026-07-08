<template>
  <div
    :style="{
      padding: '24px',
      backgroundColor: 'var(--c-color-neutral-1)',
    }"
  >
    <c-card>
      <template #action>
        <span class="icon-hover"> <c-icon-thumb-up /> </span>
        <span class="icon-hover"> <c-icon-share-internal /> </span>
        <span class="icon-hover"> <c-icon-more /> </span>
      </template>
      <template #cover>
        <c-page-header style="padding: 12px 24px" title="列表页标题132" subtitle="subtitle描述信息">
          <template #extra> xs </template>
        </c-page-header>
        <img
          :style="{ height: '200px', width: '100%', objectFit: 'fill' }"
          alt="dessert"
          src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
        />
      </template>
      <c-avatar>A</c-avatar>
    </c-card>
  </div>
</template>

<script></script>
<style scoped>
.icon-hover {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transition: all 0.1s;
}
.icon-hover:hover {
  background-color: rgb(var(--gray-2));
}
</style>
