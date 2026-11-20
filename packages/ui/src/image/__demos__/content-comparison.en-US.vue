<template>
  <div class="demo-comparison">
    <section
      class="demo-comparison-case demo-comparison-case--1"
      data-comparison-scene="caption"
    >
      <h4>caption</h4>
      <c-space :size="24" wrap>
        <c-image
          width="200"
          src="/cat.jpg"
          title="一只猫"
          description="页脚在图片内侧"
        />
        <c-image
          width="200"
          src="/cat2.jpg"
          title="一只猫"
          description="页脚在图片外侧"
          footer-position="outer"
        />
      </c-space>
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--2"
      data-comparison-scene="extra"
    >
      <h4>extra</h4>
      <c-space :size="24" wrap>
        <c-image
          width="200"
          src="/cat.jpg"
          title="一只猫"
          description="内侧额外内容"
        >
          <template #extra>
            <span class="extra">Extra</span>
          </template>
        </c-image>
        <c-image
          width="200"
          src="/cat.jpg"
          title="一只猫"
          description="外侧额外内容"
          footer-position="outer"
        >
          <template #extra>
            <span class="extra extra--outer">Extra</span>
          </template>
        </c-image>
      </c-space>
    </section>
  </div>
</template>

<style scoped lang="less">
.demo-comparison {
  display: grid;
  gap: 24px;
  min-width: 0;
  max-width: 100%;
}
.demo-comparison-case {
  min-width: 0;
  max-width: 100%;
}
.demo-comparison-case > h4 {
  margin: 0 0 12px;
  font-size: 14px;
}

.demo-comparison-case--2 {
  .extra {
    padding: 2px 8px;
    color: #fff;
    font-size: 12px;
    background: rgb(0 0 0 / 45%);
    border-radius: 10px;
  }

  .extra--outer {
    color: currentColor;
    background: var(--c-color-fill-2);
  }
}
</style>
