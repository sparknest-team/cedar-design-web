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
    <p>Enter a keyword or choose a recent search, then submit the form.</p>
    <c-space wrap>
      <c-button html-type="button" @click="waiting = !waiting">Toggle waiting</c-button>
      <c-button
        html-type="button"
        @click="loadingMode = loadingMode === 'default' ? 'line' : 'default'"
        >Toggle loading layout</c-button
      >
    </c-space>
    <form :id="formId" ref="form" @submit.prevent="submit">
      <c-search
        v-model="query"
        label="Keywords"
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
      <p :id="helpId">Edits update immediately; native required validation belongs to this form.</p>
      <c-button html-type="submit" :disabled="waiting">Capture native form</c-button>
    </form>
    <p>Reading preview</p>
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
