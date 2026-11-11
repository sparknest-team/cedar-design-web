<script setup lang="ts">
import { ref } from "vue";
import { TypographyText } from "../index";

const active = ref(true);
const mounted = ref(true);
const copies = ref(0);
</script>

<template>
  <div>
    <c-button html-type="button" @click="active = !active"
      >切换 KeepAlive</c-button
    >
    <c-button html-type="button" @click="mounted = !mounted"
      >卸载／挂载</c-button
    >
    <p>复制通知：{{ copies }}。连续复制后等待 3 秒，或复制后停用再激活。</p>
    <KeepAlive v-if="mounted">
      <TypographyText
        v-if="active"
        copyable
        :ellipsis="{ rows: 1, expandable: true }"
        @copy="copies++"
      >
        Typography
        测量调度与复制反馈生命周期示例：重复复制只保留最新反馈，停用和卸载取消待处理工作。
      </TypographyText>
    </KeepAlive>
  </div>
</template>
