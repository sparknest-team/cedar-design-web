<script setup>

import { ref, useId } from "vue";

const uid = useId();
const formId = "native-search-form-" + uid;
const inputId = "native-search-query-" + uid;
const helpId = "native-search-help-" + uid;
const form = ref();
const query = ref("report");
const waiting = ref(false);
const loadingMode = ref("default");
const searchEvents = ref(0);
const submitted = ref([]);
function submit() {
  if (waiting.value || !form.value) return;
  submitted.value = [
    ...new form.value.ownerDocument.defaultView.FormData(form.value).entries(),
  ];
}
</script>
<template>
  <section>
    <p>输入关键词或选择历史记录后提交表单。</p>
    <c-space wrap>
      <c-button html-type="button" @click="waiting = !waiting">切换等待</c-button>
      <c-button
        html-type="button"
        @click="loadingMode = loadingMode === 'default' ? 'line' : 'default'"
        >切换加载布局</c-button
      >
    </c-space>
    <form :id="formId" ref="form" @submit.prevent="submit">
      <c-search
        v-model="query"
        label="关键词"
        :recent-searches="['report', 'invoice']"
        :loading="waiting"
        :loading-mode="loadingMode"
        :input-attrs="{
          id: inputId,
          name: 'keyword',
          form: formId,
          required: true,
          'aria-describedby': helpId,
        }"
        @search="searchEvents++"
      />
      <p :id="helpId">输入即时更新；HTML 必填校验关联此表单。</p>
      <c-button html-type="submit" :disabled="waiting">记录原生表单</c-button>
    </form>
    <p>阅读预览</p>
    <c-search
      :model-value="query"
      read-pretty
      :loading="waiting"
      :loading-mode="loadingMode"
    />
    <pre class="native-search-results" role="status">{{
      JSON.stringify({ submitted, searchEvents, query, waiting, loadingMode })
    }}</pre>
  </section>
</template>
