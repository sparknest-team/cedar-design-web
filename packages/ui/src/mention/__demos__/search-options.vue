<script setup lang="ts">
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("mentionSearchOptionsInline");

import { ref } from "vue";
import type { OptionsLoader } from "../../_hooks/use-option-request";

const localValue = ref("");
const remoteValue = ref("");
const autoValue = ref("");
const people = [
  { value: "xiaoming", label: "小明" },
  { value: "xiaohong", label: "小红" },
  { value: "lisi", label: "李四" },
];

// 实际业务可以在这里调用接口，并将 signal 传给 fetch。
const searchPeople: OptionsLoader<(typeof people)[number]> = (
  query,
  { signal },
) =>
  new Promise((resolve) => {
    const finish = () => {
      signal.removeEventListener("abort", cancel);
      const keyword = query.toLowerCase();
      resolve(
        people.filter(
          (person) =>
            person.value.includes(keyword) || person.label.includes(query),
        ),
      );
    };
    // 模拟不同网络耗时，方便快速改词时观察 loading 和最新结果。
    const timer = setTimeout(
      finish,
      query.toLowerCase().startsWith("x") ? 1400 : 450,
    );
    const cancel = () => {
      clearTimeout(timer);
      resolve([]);
    };
    if (signal.aborted) cancel();
    else signal.addEventListener("abort", cancel, { once: true });
  });
</script>

<template>
  <c-space
    direction="column"
    style="width: 100%"
    :size="12"
    data-demo="mention-search-options"
  >
    <p>
      本地候选按账号或姓名筛选；异步搜索时可快速从 @xi 改为
      @lisi，观察下拉加载和最新结果。
    </p>
    <p>
      Local options match ID or name. For remote search, quickly change @xi to
      @lisi to see loading and the latest results.
    </p>
    <c-mention
      v-model="localValue"
      atomic
      :options="people"
      :aria-label="inlineCopy.localPeopleSearch"
    />
    <c-mention
      v-model="remoteValue"
      atomic
      :options="searchPeople"
      :min-search-length="2"
      :aria-label="inlineCopy.remotePeopleSearch"
    />
    <p>{{ inlineCopy.automaticallyCommitTheOnlyMatching }}</p>
    <c-mention
      v-model="autoValue"
      atomic
      :options="searchPeople"
      :min-search-length="2"
      :search-delay="250"
      auto-commit-single
      :aria-label="inlineCopy.commitSingleResult"
    />
    <div>
      {{ inlineCopy.localValue }}<code data-local-value>{{ localValue }}</code>
    </div>
    <div>
      {{ inlineCopy.remoteValue
      }}<code data-remote-value>{{ remoteValue }}</code>
    </div>
  </c-space>
</template>
