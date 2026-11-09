<script setup>
import { reactive, ref } from "vue";
const model = reactive({
  input: "Draft",
  textarea: "Notes",
  number: 1,
  toggle: false,
});
const changes = ref([]);
function record(field, value, event) {
  changes.value.unshift({
    field,
    value,
    source: event?.type || "programmatic",
  });
}
</script>
<template>
  <section>
    <p>
      打开字段、修改并保存，下方显示真实确认事件。Open a field, edit and save to
      inspect its confirmation source.
    </p>
    <c-input
      v-model="model.input"
      edit-mode="click"
      @change="(value, event) => record('input', value, event)"
    />
    <c-textarea
      v-model="model.textarea"
      edit-mode="click"
      @change="(value, event) => record('textarea', value, event)"
    />
    <c-input-number
      v-model="model.number"
      edit-mode="click"
      @change="(value, event) => record('number', value, event)"
    />
    <c-switch
      v-model="model.toggle"
      edit-mode="click"
      @change="(value, event) => record('switch', value, event)"
    />
    <pre role="status">{{ JSON.stringify(changes, null, 2) }}</pre>
  </section>
</template>
