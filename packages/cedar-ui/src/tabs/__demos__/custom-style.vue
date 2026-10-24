<template>
  <c-tabs
    default-value="overview"
    item-class="custom-tab-content"
    :item-style="{ padding: '16px' }"
    item-wrapper-class="custom-tab-panel"
    :item-wrapper-style="{ border: '1px solid currentColor', borderRadius: '8px' }"
    tab-class="custom-tab-label"
    :tab-style="{ borderRadius: '8px' }"
  >
    <c-tabs-navs :style="{ paddingInline: 0 }">
      <c-tab-nav name="overview" title="概览" />
      <c-tab-nav name="details" title="详情" />
    </c-tabs-navs>
    <c-tabs-items>
      <c-tab-item name="overview">统一设置导航、内容和内容外层样式。</c-tab-item>
      <c-tab-item name="details">自定义类名保留内置选中状态，样式支持响应式更新。</c-tab-item>
    </c-tabs-items>
  </c-tabs>
</template>
