<script setup>
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("formFieldIdentityInline");

import { reactive, ref, useId } from "vue";
const id = useId();
const form = ref();
const model = reactive({ a: "A initial", b: "B initial" });
const field = ref("a");
const submissions = ref(0);
const result = ref("-");
function reset() {
  if (field.value) form.value?.resetFields(field.value);
}
function submitted(data) {
  submissions.value++;
  result.value = data.errors ? "invalid" : "valid";
}
</script>
<template>
  <section>
    <p>{{ inlineCopy.theSameItemRetainsA }}</p>
    <c-space wrap>
      <c-button :disabled="field === 'a'" @click="field = 'a'">{{
        inlineCopy.bindA
      }}</c-button>
      <c-button :disabled="field === 'b'" @click="field = 'b'">{{
        inlineCopy.bindB
      }}</c-button>
      <c-button :disabled="!field" @click="field = ''">{{
        inlineCopy.unbind
      }}</c-button>
    </c-space>
    <c-form ref="form" :model="model" edit-mode="direct" @submit="submitted">
      <c-form-item
        :field="field"
        :label="field ? 'Field ' + field.toUpperCase() : 'Unbound'"
        :label-attrs="{ for: id }"
        required
        feedback
        :validate-trigger="[]"
      >
        <c-input
          v-if="field"
          :id="id"
          v-model="model[field]"
          edit-mode="direct"
        />
        <span v-else>{{ inlineCopy.noBoundField }}</span>
      </c-form-item>
      <c-space>
        <c-button html-type="button" :disabled="!field" @click="reset">{{
          inlineCopy.resetCurrent
        }}</c-button>
        <c-button html-type="submit" :disabled="!field">{{
          inlineCopy.validateAndSubmit
        }}</c-button>
      </c-space>
    </c-form>
    <p role="status">
      Field: {{ field || "-" }}; submissions: {{ submissions }}; result:
      {{ result }}
    </p>
    <pre class="field-model">{{ JSON.stringify(model) }}</pre>
  </section>
</template>
