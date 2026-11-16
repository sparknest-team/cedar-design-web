<script setup lang="ts">
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("formSubmitInputsInline");

import {
  onBeforeUnmount,
  onDeactivated,
  reactive,
  ref,
  shallowRef,
  useId,
} from "vue";
const id = useId();
const model = reactive({ name: "allowed" });
const pending = shallowRef<
  { value: unknown; resolve: (result: boolean | string) => void }[]
>([]);
const submissions = ref(0);
const snapshot = ref("-");
function request(value: unknown) {
  return new Promise<boolean | string>((resolve) => {
    pending.value = [...pending.value, { value, resolve }];
  });
}
const rules = [
  {
    validator: async (value: unknown, callback: (message?: string) => void) => {
      const result = await request(value);
      if (result !== true) callback(String(result));
    },
  },
];
function complete() {
  const [task, ...rest] = pending.value;
  if (!task) return;
  pending.value = rest;
  task.resolve(task.value === "allowed" ? true : inlineCopy.value.enterAllowed);
}
function submitted(data: {
  values: Record<string, unknown>;
  errors?: unknown;
}) {
  submissions.value++;
  snapshot.value = JSON.stringify({ values: data.values, valid: !data.errors });
}
function cleanup() {
  const tasks = pending.value;
  pending.value = [];
  tasks.forEach((task) => task.resolve(false));
}
onBeforeUnmount(cleanup);
onDeactivated(cleanup);
</script>
<template>
  <section>
    <p>{{ inlineCopy.editWhileWaitingThenResolve }}</p>
    <c-form :model="model" edit-mode="direct" @submit="submitted">
      <c-form-item
        field="name"
        label="Name"
        :label-attrs="{ for: id }"
        :rules="rules"
        :validate-trigger="[]"
        feedback
      >
        <c-input :id="id" v-model="model.name" edit-mode="direct" />
      </c-form-item>
      <c-space>
        <c-button html-type="submit">{{ inlineCopy.submit }}</c-button>
        <c-button
          html-type="button"
          :disabled="!pending.length"
          @click="complete"
          >{{ inlineCopy.resolveOldest }}</c-button
        >
      </c-space>
    </c-form>
    <p role="status">
      Submissions: {{ submissions }}; pending: {{ pending.length }}
    </p>
    <pre class="submitted-values">{{ snapshot }}</pre>
  </section>
</template>
