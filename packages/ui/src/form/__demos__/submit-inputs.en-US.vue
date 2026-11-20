<script setup lang="ts">
const inlineCopy = {
  enterAllowed: "Enter allowed"
};

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
  task.resolve(task.value === "allowed" ? true : inlineCopy.enterAllowed);
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
    <p>Edit while waiting, then resolve: submit again to validate the new input.</p>
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
        <c-button html-type="submit">Submit</c-button>
        <c-button
          html-type="button"
          :disabled="!pending.length"
          @click="complete"
          >Resolve oldest</c-button
        >
      </c-space>
    </c-form>
    <p role="status">
      Submissions: {{ submissions }}; pending: {{ pending.length }}
    </p>
    <pre class="submitted-values">{{ snapshot }}</pre>
  </section>
</template>
