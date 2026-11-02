<script setup lang="ts">


</script>

<template>
<div class="demo-comparison">
  <section class="demo-comparison-case demo-comparison-case--1" data-comparison-scene="group">
    <h4><span lang="zh-CN">头像组</span><span lang="en-US">group</span></h4>
    <c-space direction="column" :size="24">
        <c-space direction="column" :size="8">
          <span class="label">默认叠层</span>
          <c-avatar-group>
            <c-avatar image-url="/cat.jpg" alt="用户一" bordered />
            <c-avatar image-url="/cat2.jpg" alt="用户二" bordered />
            <c-avatar image-url="/cat.jpg" alt="用户三" bordered />
            <c-avatar bordered>+2</c-avatar>
          </c-avatar-group>
        </c-space>
    
        <c-space direction="column" :size="8">
          <span class="label">max-count + max-style</span>
          <c-avatar-group
            :max-count="3"
            :size="48"
            :max-style="{
      backgroundColor: '#1d2129',
      color: '#fff'
    }"
          >
            <c-avatar image-url="/cat.jpg" alt="用户一" />
            <c-avatar image-url="/cat2.jpg" alt="用户二" />
            <c-avatar color="#00bebe">A</c-avatar>
            <c-avatar color="#f59e0b">B</c-avatar>
            <c-avatar color="#ef4444">C</c-avatar>
          </c-avatar-group>
        </c-space>
    
        <c-space direction="column" :size="8">
          <span class="label">z-index-ascend</span>
          <c-avatar-group z-index-ascend>
            <c-avatar image-url="/cat.jpg" alt="用户一" />
            <c-avatar image-url="/cat2.jpg" alt="用户二" />
            <c-avatar color="#7b61ff">CD</c-avatar>
          </c-avatar-group>
        </c-space>
    
        <c-space direction="column" :size="8">
          <span class="label">shape="square" · offset="-16"</span>
          <c-avatar-group shape="square" :offset="-16" :size="40">
            <c-avatar image-url="/cat.jpg" alt="用户一" />
            <c-avatar image-url="/cat2.jpg" alt="用户二" />
            <c-avatar color="#00bebe">A</c-avatar>
            <c-avatar color="#7b61ff">B</c-avatar>
          </c-avatar-group>
        </c-space>
      </c-space>
  </section>

  <section class="demo-comparison-case demo-comparison-case--2" data-comparison-scene="group-vertical">
    <h4><span lang="zh-CN">纵向头像组</span><span lang="en-US">group vertical</span></h4>
    <c-space align="flex-end" :size="32" wrap>
        <c-space direction="column" :size="8">
          <span class="label">offset = -12</span>
          <c-avatar-group vertical :offset="-12">
            <c-avatar image-url="/cat.jpg" alt="用户一" bordered />
            <c-avatar image-url="/cat2.jpg" alt="用户二" bordered />
            <c-avatar image-url="/cat.jpg" alt="用户三" bordered />
            <c-avatar bordered>+2</c-avatar>
          </c-avatar-group>
        </c-space>
        <c-space direction="column" :size="8">
          <span class="label">offset = -20</span>
          <c-avatar-group vertical :offset="-20" :size="48">
            <c-avatar image-url="/cat.jpg" alt="用户一" bordered />
            <c-avatar image-url="/cat2.jpg" alt="用户二" bordered />
            <c-avatar color="#00bebe">A</c-avatar>
          </c-avatar-group>
        </c-space>
      </c-space>
  </section>
</div>
</template>

<style scoped lang="less">
.demo-comparison { display: grid; gap: 24px; min-width: 0; max-width: 100%; }
.demo-comparison-case { min-width: 0; max-width: 100%; }
.demo-comparison-case > h4 { margin: 0 0 12px; font-size: 14px; }
html:not([lang='en-US']) .demo-comparison-case > h4 > [lang='en-US'],
html[lang='en-US'] .demo-comparison-case > h4 > [lang='zh-CN'] { display: none; }
.demo-comparison-case--1 {

.label {
  color: var(--c-color-text-3);
  font-size: var(--c-font-size-sm);
}

}
.demo-comparison-case--2 {

.label {
  color: var(--c-color-text-3);
  font-size: var(--c-font-size-sm);
}

}
</style>
