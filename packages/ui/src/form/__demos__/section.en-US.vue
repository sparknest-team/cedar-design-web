<script setup lang="ts">
import type { SectionVariant } from "../../section/props";
import { computed, reactive, ref } from "vue";
const copy = {
  text: {
    event: "Event type",
    level: "Event level",
    tags: "Tags",
    remote: "Remote SOP",
    section: "Onsite handling",
    onsite: "Onsite SOP",
    safety: "Safety notice",
    points: "Key points",
    skill: "Skill level",
    certificates: "Certificates",
    review: "Review",
    abnormal: "Multiple anomalies"
  },
  variants: {
    "heading-line": "Heading line",
    plain: "Title only",
    outline: "Outlined section"
  },
  lowVoltage: "Low voltage",
  entryPermit: "Entry permit",
  workAtHeight: "Work at height",
  highVoltage: "High voltage",
  levelThree: "Level 3"
};

const variant = ref<SectionVariant>("heading-line");
const showMarker = ref(true);
const variantOptions = computed(() =>
  (["heading-line", "plain", "outline"] as const).map((value) => ({
    value,
    label: copy.variants[value],
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
  { value: "electric", label: copy.lowVoltage },
  { value: "entry", label: copy.entryPermit },
  { value: "height", label: copy.workAtHeight },
  { value: "high", label: copy.highVoltage },
]);
</script>

<template>
  <div data-form-section-demo="variants">
    <c-form layout="vertical">
      <c-form-item label="Section style">
        <c-radio-group
          v-model="variant"
          :options="variantOptions"
          aria-label="Section style"
        />
      </c-form-item>
      <c-form-item label="Display options">
        <c-space wrap>
          <c-checkbox v-model="showMarker">Title marker</c-checkbox>
        </c-space>
      </c-form-item>
    </c-form>
    <p>Switching styles preserves your entries. An outlined section uses its border to mark the section boundary.</p>

    <c-form
      :model="model"
      layout="horizontal"
      label-col-flex="7rem"
      edit-mode="direct"
    >
      <c-form-item field="event" label="Event type" required>
        <c-select
          v-model="model.event"
          :options="[{ value: 'abnormal', label: copy.text.abnormal }]"
        />
      </c-form-item>
      <c-form-item field="level" label="Event level" required>
        <c-select
          v-model="model.level"
          :options="[{ value: '3', label: copy.levelThree }]"
        />
      </c-form-item>
      <c-form-item field="tags" label="Tags">
        <c-select
          v-model="model.tags"
          multiple
          :options="[{ value: 'review', label: copy.text.review }]"
        />
      </c-form-item>
      <c-form-item field="remote" label="Remote SOP">
        <c-select
          v-model="model.remote"
          multiple
          :options="[{ value: 'review', label: copy.text.review }]"
        />
      </c-form-item>

      <c-section
        title="Onsite handling"
        :variant="variant"
        :show-marker="showMarker"
      >
        <c-form-item field="onsite" label="Onsite SOP">
          <c-select
            v-model="model.onsite"
            multiple
            :options="[{ value: 'review', label: copy.text.review }]"
          />
        </c-form-item>
        <c-form-item field="safety" label="Safety notice">
          <c-textarea
            v-model="model.safety"
            :max-length="200"
            show-word-limit
          />
        </c-form-item>
        <c-form-item field="points" label="Key points">
          <c-textarea
            v-model="model.points"
            :max-length="200"
            show-word-limit
          />
        </c-form-item>
      </c-section>
      <c-divider v-if="variant !== 'outline'" />

      <c-form-item field="skill" label="Skill level">
        <c-select
          v-model="model.skill"
          :options="[{ value: 'L3', label: 'L3' }]"
        />
      </c-form-item>
      <c-form-item field="certificates" label="Certificates">
        <c-select
          v-model="model.certificates"
          multiple
          :options="certificateOptions"
        />
      </c-form-item>
    </c-form>
  </div>
</template>
