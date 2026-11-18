<script setup lang="ts">
import type { SectionVariant } from "../../section/props";
import { useDemoLocale } from "../../__demos__/locale";
import { computed, reactive, ref } from "vue";
const copy = useDemoLocale("section");

const variant = ref<SectionVariant>("line");
const showMarker = ref(true);
const showEndDivider = ref(true);
const variantOptions = computed(() =>
  (["line", "plain", "card"] as const).map((value) => ({
    value,
    label: copy.value.variants[value],
  })),
);

const model = reactive({
  event: "abnormal",
  level: "3",
  tags: [],
  remote: ["review"],
  onsite: ["review"],
  safety: "1",
  points: "1",
  skill: "L3",
  certificates: ["electric", "entry", "height", "high"],
});
const certificateOptions = computed(() => [
  { value: "electric", label: copy.value.lowVoltage },
  { value: "entry", label: copy.value.entryPermit },
  { value: "height", label: copy.value.workAtHeight },
  { value: "high", label: copy.value.highVoltage },
]);
</script>

<template>
  <div data-form-section-demo="variants">
    <c-form layout="vertical">
      <c-form-item :label="copy.variantLabel">
        <c-radio-group
          v-model="variant"
          :options="variantOptions"
          :aria-label="copy.variantLabel"
        />
      </c-form-item>
      <c-form-item :label="copy.optionsLabel">
        <c-space wrap>
          <c-checkbox v-model="showMarker">{{ copy.markerLabel }}</c-checkbox>
          <c-checkbox v-model="showEndDivider" :disabled="variant === 'card'">{{
            copy.endLabel
          }}</c-checkbox>
        </c-space>
      </c-form-item>
    </c-form>
    <p>{{ copy.styleHint }}</p>

    <c-form
      :model="model"
      layout="horizontal"
      label-col-flex="7rem"
      edit-mode="direct"
    >
      <c-form-item field="event" :label="copy.text.event" required>
        <c-select
          v-model="model.event"
          :options="[{ value: 'abnormal', label: copy.text.abnormal }]"
        />
      </c-form-item>
      <c-form-item field="level" :label="copy.text.level" required>
        <c-select
          v-model="model.level"
          :options="[{ value: '3', label: copy.levelThree }]"
        />
      </c-form-item>
      <c-form-item field="tags" :label="copy.text.tags">
        <c-select
          v-model="model.tags"
          multiple
          :options="[{ value: 'review', label: copy.text.review }]"
        />
      </c-form-item>
      <c-form-item field="remote" :label="copy.text.remote">
        <c-select
          v-model="model.remote"
          multiple
          :options="[{ value: 'review', label: copy.text.review }]"
        />
      </c-form-item>

      <c-section
        :title="copy.text.section"
        :variant="variant"
        :show-marker="showMarker"
        :show-end-divider="showEndDivider"
      >
        <c-form-item field="onsite" :label="copy.text.onsite">
          <c-select
            v-model="model.onsite"
            multiple
            :options="[{ value: 'review', label: copy.text.review }]"
          />
        </c-form-item>
        <c-form-item field="safety" :label="copy.text.safety">
          <c-textarea
            v-model="model.safety"
            :max-length="200"
            show-word-limit
          />
        </c-form-item>
        <c-form-item field="points" :label="copy.text.points">
          <c-textarea
            v-model="model.points"
            :max-length="200"
            show-word-limit
          />
        </c-form-item>
      </c-section>

      <c-form-item field="skill" :label="copy.text.skill">
        <c-select
          v-model="model.skill"
          :options="[{ value: 'L3', label: 'L3' }]"
        />
      </c-form-item>
      <c-form-item field="certificates" :label="copy.text.certificates">
        <c-select
          v-model="model.certificates"
          multiple
          :options="certificateOptions"
        />
      </c-form-item>
    </c-form>
  </div>
</template>
