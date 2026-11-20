<script setup lang="ts">
import type { SectionVariant } from "../../section/props";
import { computed, reactive, ref } from "vue";
const copy = {
  text: {
    event: "事件类型",
    level: "事件级别",
    tags: "标签",
    remote: "远程处置SOP",
    section: "现场处置",
    onsite: "现场处置SOP",
    safety: "安全须知",
    points: "处置要点",
    skill: "技能等级",
    certificates: "作业证",
    review: "审核",
    abnormal: "多元异常"
  },
  variants: {
    "heading-line": "标题线",
    plain: "仅标题",
    outline: "描边分区"
  },
  lowVoltage: "低压电工证",
  entryPermit: "进仓许可",
  workAtHeight: "登高证",
  highVoltage: "高压电工证",
  levelThree: "三级"
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
      <c-form-item label="分组风格">
        <c-radio-group
          v-model="variant"
          :options="variantOptions"
          aria-label="分组风格"
        />
      </c-form-item>
      <c-form-item label="展示选项">
        <c-space wrap>
          <c-checkbox v-model="showMarker">显示标题标记</c-checkbox>
        </c-space>
      </c-form-item>
    </c-form>
    <p>切换风格会保留已填内容。描边分区使用外框表示分组范围。</p>

    <c-form
      :model="model"
      layout="horizontal"
      label-col-flex="7rem"
      edit-mode="direct"
    >
      <c-form-item field="event" label="事件类型" required>
        <c-select
          v-model="model.event"
          :options="[{ value: 'abnormal', label: copy.text.abnormal }]"
        />
      </c-form-item>
      <c-form-item field="level" label="事件级别" required>
        <c-select
          v-model="model.level"
          :options="[{ value: '3', label: copy.levelThree }]"
        />
      </c-form-item>
      <c-form-item field="tags" label="标签">
        <c-select
          v-model="model.tags"
          multiple
          :options="[{ value: 'review', label: copy.text.review }]"
        />
      </c-form-item>
      <c-form-item field="remote" label="远程处置SOP">
        <c-select
          v-model="model.remote"
          multiple
          :options="[{ value: 'review', label: copy.text.review }]"
        />
      </c-form-item>

      <c-section
        title="现场处置"
        :variant="variant"
        :show-marker="showMarker"
      >
        <c-form-item field="onsite" label="现场处置SOP">
          <c-select
            v-model="model.onsite"
            multiple
            :options="[{ value: 'review', label: copy.text.review }]"
          />
        </c-form-item>
        <c-form-item field="safety" label="安全须知">
          <c-textarea
            v-model="model.safety"
            :max-length="200"
            show-word-limit
          />
        </c-form-item>
        <c-form-item field="points" label="处置要点">
          <c-textarea
            v-model="model.points"
            :max-length="200"
            show-word-limit
          />
        </c-form-item>
      </c-section>
      <c-divider v-if="variant !== 'outline'" />

      <c-form-item field="skill" label="技能等级">
        <c-select
          v-model="model.skill"
          :options="[{ value: 'L3', label: 'L3' }]"
        />
      </c-form-item>
      <c-form-item field="certificates" label="作业证">
        <c-select
          v-model="model.certificates"
          multiple
          :options="certificateOptions"
        />
      </c-form-item>
    </c-form>
  </div>
</template>
