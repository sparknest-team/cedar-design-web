<script setup lang="ts">
import { useDemoLocale } from "../../__demos__/locale";
const demoCopy = useDemoLocale("emptyContentComparison");
import { ref } from "vue";
import { proxyRefs as demoProxyRefs } from "vue";

const scene1 = demoProxyRefs(
  (() => {
    const attempts = ref(0);
    return { attempts };
  })(),
);
</script>

<template>
  <div class="demo-comparison">
    <section
      class="demo-comparison-case demo-comparison-case--1"
      data-comparison-scene="extra"
    >
      <h4>{{ demoCopy.extra }}</h4>
      <c-empty
        :description="
          scene1.attempts
            ? 'No data. Local refresh completed.'
            : 'No data, please reload'
        "
      >
        <template #extra>
          <c-button status="primary" @click="scene1.attempts++"
            >Reload</c-button
          >
          <p aria-live="polite">
            Local refresh attempts: {{ scene1.attempts }}
          </p>
        </template>
      </c-empty>
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--2"
      data-comparison-scene="user-define"
    >
      <h4>{{ demoCopy.userDefine }}</h4>
      <c-space direction="column">
        <c-empty>
          <template #image>
            <c-icon-exclamation-circle-fill />
          </template>
          No data, please reload!!
        </c-empty>
        <c-empty
          image-url="/cat.jpg"
          alt="空状态图片"
          description="自定义图片和文案"
        />
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
</style>
