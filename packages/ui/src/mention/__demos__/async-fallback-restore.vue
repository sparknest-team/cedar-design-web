<script setup lang="ts">
const inlineCopy = {
  edit: "切换到编辑态",
  read: "切换到阅读态",
  loadingNames: "正在加载姓名…",
  namesLoaded: "姓名已加载"
};

import { onBeforeUnmount, ref } from "vue";

const content = ref("请联系 @[shuai.meng]、@[xiaoming]、@[lisi]");
const saved = ref(content.value);
const names = ref<Record<string, string>>({
  "shuai.meng": "孟帅",
  xiaoming: "小明",
  lisi: "李四",
});
const generation = ref(0);
const readPretty = ref(false);
const loading = ref(false);
let timer: ReturnType<typeof setTimeout> | undefined;

// fallback 只同步读取业务数据，未找到时返回 undefined。
const fallbackOption = (value: string | number | boolean) => {
  const label = names.value[String(value)];
  return label === undefined ? undefined : { value, label };
};

function saveAndReload() {
  // 用内存模拟数据库保存；实际业务应保存 content.value，再按 ID 请求姓名。
  saved.value = content.value;
  if (timer) clearTimeout(timer);
  names.value = {};
  content.value = saved.value;
  generation.value++; // 重新挂载组件，模拟打开已保存的数据。
  loading.value = true;
  timer = setTimeout(() => {
    names.value = { "shuai.meng": "孟帅", xiaoming: "小明", lisi: "李四" };
    loading.value = false;
  }, 1500);
}

onBeforeUnmount(() => {
  if (timer) clearTimeout(timer);
});
</script>

<template>
  <c-space
    direction="column"
    style="width: 100%"
    :size="12"
    data-demo="mention-async-fallback-restore"
  >
    <p>模拟保存后重新初始化：请求期间先显示 ID，姓名返回后自动更新。</p>
    <c-mention
      :key="generation"
      v-model="content"
      atomic
      type="textarea"
      :options="[]"
      :fallback-option="fallbackOption"
      :read-pretty="readPretty"
      aria-label="重新初始化的人员提及"
    />
    <c-space wrap>
      <c-button @click="saveAndReload">模拟保存并重新加载</c-button>
      <c-button @click="readPretty = !readPretty">{{
        readPretty ? inlineCopy.edit : inlineCopy.read
      }}</c-button>
    </c-space>
    <div role="status">
      {{ loading ? inlineCopy.loadingNames : inlineCopy.namesLoaded }}
    </div>
    <div>
      模拟保存值<code data-saved-value>{{ saved }}</code>
    </div>
  </c-space>
</template>
