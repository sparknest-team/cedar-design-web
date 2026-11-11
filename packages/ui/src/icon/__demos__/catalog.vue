<script setup lang="ts">
import { computed, ref } from "vue";
import { iconNames } from "@cedar-design/icons-vue";
import * as CedarIcons from "@cedar-design/icons-vue";
import { Message } from "../../message";

const keyword = ref("");
const filteredIcons = computed(() =>
  keyword.value
    ? iconNames.filter((name) =>
        name.includes(keyword.value.trim().toLowerCase()),
      )
    : iconNames,
);

const groupRules = [
  [
    "方向",
    /(^|-)(arrow|caret|chevron|left|right|up|down|expand|shrink|swap|rotate|fullscreen|backward|forward)(-|$)/,
  ],
  [
    "状态与反馈",
    /(^|-)(alert|check|close|error|exclamation|info|question|success|warning|empty|stop)(-|$)/,
  ],
  [
    "编辑",
    /(^|-)(align|attachment|bold|brush|copy|delete|edit|eraser|filter|font|formula|italic|link|list|paste|quote|redo|scissor|sort|underline|undo|zoom)(-|$)/,
  ],
  ["文件", /(^|-)(archive|book|bookmark|drive|file|folder|save|storage)(-|$)/],
  [
    "媒体",
    /(^|-)(camera|image|live|music|mute|pause|play|record|skip|sound|video|voice)(-|$)/,
  ],
  [
    "通信与用户",
    /(^|-)(email|message|notification|phone|send|share|subscribe|user|robot)(-|$)/,
  ],
  [
    "品牌",
    /(alipay|bytedance|codepen|facebook|github|gitlab|google|lark|qq|tiktok|twitter|wechat|weibo|xigua)/,
  ],
  ["天气", /(^|-)weather-|(^|-)sun(-|$)|(^|-)moon(-|$)/],
  ["商业", /(^|-)(barcode|cart|gift|shopping|tag)(-|$)/],
] as const;

const iconGroups = computed(() => {
  const groups = new Map<string, string[]>();
  for (const name of filteredIcons.value) {
    const label = groupRules.find(([, rule]) => rule.test(name))?.[0] ?? "通用";
    if (!groups.has(label)) groups.set(label, []);
    groups.get(label)?.push(name);
  }
  return [...groupRules.map(([label]) => label), "通用"].flatMap((label) => {
    const names = groups.get(label);
    return names?.length ? [[label, names.sort()] as const] : [];
  });
});

function pascalCase(name: string) {
  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function resolveIcon(name: string) {
  return CedarIcons[`Icon${pascalCase(name)}` as keyof typeof CedarIcons];
}

async function copyIcon(name: string) {
  const markup = `<c-icon-${name} />`;
  try {
    await navigator.clipboard.writeText(markup);
    Message.success(`已复制 ${markup}`);
  } catch {
    Message.error("复制失败，请检查浏览器剪贴板权限");
  }
}
</script>

<template>
  <c-input v-model="keyword" clearable placeholder="搜索图标名称">
    <template #prefix><c-icon-search /></template>
  </c-input>
  <section v-for="[group, names] in iconGroups" :key="group" class="icon-group">
    <h3>
      {{ group }} <small>{{ names.length }}</small>
    </h3>
    <div class="icon-catalog">
      <c-button
        v-for="name in names"
        :key="name"
        class="icon-card"
        variant="outline"
        @click="copyIcon(name)"
      >
        <span class="icon-card-content">
          <component :is="resolveIcon(name)" :size="40" />
          <span class="icon-name">{{ name }}</span>
        </span>
      </c-button>
    </div>
  </section>
</template>

<style scoped>
.icon-catalog {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 168px), 1fr));
  gap: 16px;
  margin-top: 12px;
}

.icon-group {
  margin-top: 24px;
}
.icon-group h3 {
  margin: 0;
  font-size: 16px;
}
.icon-group small {
  margin-left: 6px;
  color: var(--color-text-3);
  font-weight: normal;
}

.icon-card {
  min-height: 132px;
  height: auto;
  justify-content: center;
  font: inherit;
  line-height: 1.5;
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 20px 14px;
  color: var(--color-text-1);
  background: var(--color-bg-2);
  border: 1px solid var(--color-border-2);
  border-radius: 8px;
  cursor: pointer;
}

.icon-card:hover {
  color: rgb(var(--c-primary-6));
  border-color: rgb(var(--c-primary-6));
}
.icon-card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.icon-name {
  width: 100%;
  text-align: center;
  font-size: 13px;
  overflow-wrap: anywhere;
  white-space: normal;
}
</style>
