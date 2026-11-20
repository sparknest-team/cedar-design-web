<template>
  <section class="divider-flow-demo">
    <h4>1px：最小显式线宽</h4>
    <div class="flow-sample">
      <c-divider
        data-min-line
        :thickness="1"
        :spacing="0"
        description="内容仍正常占位"
      />
      <p>后续正文</p>
    </div>
    <h4>4px：多行文字</h4>
    <div class="flow-sample">
      <c-divider
        data-multiline
        :thickness="4"
        :spacing="0"
        description="分区标题支持换行，并为后续内容保留完整空间"
      />
      <p>后续正文</p>
    </div>
    <h4>默认插槽</h4>
    <div class="flow-sample">
      <c-divider data-custom-content :spacing="0"
        ><span class="flow-content"
          >第一行<br />第二行</span
        ></c-divider
      >
      <p>后续正文</p>
    </div>
    <p>thickness ≥ 1；hairline 优先，使用主题线宽的一半。</p>
  </section>
</template>
<style scoped>
.flow-sample {
  max-width: 280px;
}
.flow-sample p {
  margin: 0;
}
.flow-content {
  padding: 12px 0;
}
</style>
