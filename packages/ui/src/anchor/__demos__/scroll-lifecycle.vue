<script setup lang="ts">
import { ref } from "vue";
import Anchor, { AnchorLink } from "../index";

const active = ref(true);
const mounted = ref(true);
const container = ref<HTMLElement>();
const changes = ref(0);
</script>

<template>
  <div>
    <c-button html-type="button" @click="active = !active"
      >切换 KeepAlive</c-button
    >
    <c-button html-type="button" @click="mounted = !mounted"
      >卸载／挂载</c-button
    >
    <p>
      切换链接后立即停用或卸载；激活后再次点击，检查旧滚动不会恢复。change
      通知：{{ changes }}
    </p>
    <KeepAlive v-if="mounted">
      <Anchor
        v-if="active"
        :scroll-container="container"
        :change-hash="false"
        @change="changes++"
      >
        <AnchorLink href="#anchor-lifecycle-first" title="第一段" />
        <AnchorLink href="#anchor-lifecycle-second" title="第二段" />
      </Anchor>
    </KeepAlive>
    <div ref="container" style="height: 180px; overflow: auto">
      <section id="anchor-lifecycle-first" style="min-height: 240px">
        第一段内容
      </section>
      <section id="anchor-lifecycle-second" style="min-height: 240px">
        第二段内容
      </section>
    </div>
  </div>
</template>
