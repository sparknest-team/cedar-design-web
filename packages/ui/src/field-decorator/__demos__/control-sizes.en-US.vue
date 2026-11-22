<script setup lang="ts">

import { ref } from "vue";
const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
const variants = ["outline", "filled", "standard"] as const;
const size = ref<(typeof sizes)[number]>("md");
const variant = ref<(typeof variants)[number]>("outline");
const options = [
  { value: "beijing", label: "Beijing" },
  { value: "shanghai", label: "Shanghai" },
];
const cascaderOptions = [{ value: "china", label: "China", children: options }];

const inputValue = ref("Beijing");
const selectValue = ref("beijing");
const cascaderValue = ref("beijing");
const selectMultiple = ref(["beijing", "shanghai"]);
const cascaderMultiple = ref(["beijing", "shanghai"]);
const selectOverflow = ref(["long", "beijing", "shanghai"]);
const cascaderOverflow = ref(["long", "beijing", "shanghai"]);
const selectedOptions = [
  ...options,
  {
    value: "long",
    label:
      "A very long selected option label for overflow comparison — full text preview keeps the selected value unchanged.",
  },
];
const selectedCascaderOptions = [
  { value: "china", label: "China", children: selectedOptions },
];
function resetSelections() {
  inputValue.value = "Beijing";
  selectValue.value = "beijing";
  cascaderValue.value = "beijing";
  selectMultiple.value = ["beijing", "shanghai"];
  cascaderMultiple.value = ["beijing", "shanghai"];
  selectOverflow.value = ["long", "beijing", "shanghai"];
  cascaderOverflow.value = ["long", "beijing", "shanghai"];
}
</script>
<template>
  <section
    aria-label="Form control size comparison"
    class="control-size-comparison"
  >
    <c-space wrap :size="12">
      <c-radio-group v-model="size" aria-label="Comparison size">
        <c-radio v-for="item in sizes" :key="item" :value="item">{{
          item
        }}</c-radio>
      </c-radio-group>
      <c-radio-group v-model="variant" aria-label="Comparison variant">
        <c-radio v-for="item in variants" :key="item" :value="item">{{
          item
        }}</c-radio>
      </c-radio-group>
    </c-space>
    <div class="control-size-comparison__grid">
      <div data-control="Input">
        <p>Input</p>
        <c-input :size="size" :variant="variant" placeholder="Input" />
      </div>
      <div data-control="Button">
        <p>Button</p>
        <c-button :size="size" variant="outline">Button</c-button>
      </div>
      <div data-control="Select">
        <p>Select</p>
        <c-form-item layout="vertical" hide-label>
          <c-select
            :size="size"
            :variant="variant"
            :options="options"
            placeholder="Select"
          />
        </c-form-item>
      </div>
      <div data-control="Date">
        <p>Date</p>
        <c-date :size="size" :variant="variant" placeholder="Date" />
      </div>
      <div data-control="Time">
        <p>Time</p>
        <c-time :size="size" :variant="variant" placeholder="Time" />
      </div>
      <div data-control="InputNumber">
        <p>InputNumber</p>
        <c-input-number :size="size" :variant="variant" placeholder="Number" />
      </div>
      <div data-control="AutoComplete">
        <p>AutoComplete</p>
        <c-auto-complete
          :size="size"
          :variant="variant"
          :options="options"
          placeholder="AutoComplete"
        />
      </div>
      <div data-control="Cascader">
        <p>Cascader</p>
        <c-cascader
          :size="size"
          :variant="variant"
          :options="cascaderOptions"
          placeholder="Cascader"
        />
      </div>
      <div data-control="DateRange">
        <p>DateRange</p>
        <c-date-range
          :size="size"
          :variant="variant"
          :placeholder="['Start', 'End']"
        />
      </div>
      <div data-control="TimeRange">
        <p>TimeRange</p>
        <c-time-range
          :size="size"
          :variant="variant"
          :placeholder="['Start', 'End']"
        />
      </div>
    </div>

    <section
      aria-label="Selected control size comparison"
      class="control-size-comparison__states"
    >
      <c-space wrap align="center" :size="12">
        <span>Selected / Clearable / Multiple — 有值、可清空与多选不换行</span>
        <span>Hover or focus truncated text; tap on touch screens</span>
        <c-button size="sm" variant="outline" @click="resetSelections">Reset</c-button>
      </c-space>
      <div class="control-size-comparison__grid">
        <div data-control="InputValue">
          <p>Input · clearable</p>
          <c-input
            v-model="inputValue"
            :size="size"
            :variant="variant"
            clearable
            placeholder="Input value"
          />
        </div>
        <div data-control="ButtonReference">
          <p>Button · reference</p>
          <c-button :size="size" variant="outline">Button</c-button>
        </div>
        <div data-control="SelectValue">
          <p>Select · clearable</p>
          <c-form-item layout="vertical" hide-label>
            <c-select
              v-model="selectValue"
              :size="size"
              :variant="variant"
              :options="selectedOptions"
              clearable
              placeholder="Select value"
            />
          </c-form-item>
        </div>
        <div data-control="CascaderValue">
          <p>Cascader · clearable</p>
          <c-cascader
            v-model="cascaderValue"
            :size="size"
            :variant="variant"
            :options="selectedCascaderOptions"
            clearable
            placeholder="Cascader value"
          />
        </div>
        <div data-control="SelectMultiple">
          <p>Select · multiple / nowrap</p>
          <c-form-item layout="vertical" hide-label>
            <c-select
              v-model="selectMultiple"
              :size="size"
              :variant="variant"
              :options="selectedOptions"
              multiple
              tag-nowrap
              clearable
              placeholder="Select multiple"
            />
          </c-form-item>
        </div>
        <div data-control="CascaderMultiple">
          <p>Cascader · multiple / nowrap</p>
          <c-cascader
            v-model="cascaderMultiple"
            :size="size"
            :variant="variant"
            :options="selectedCascaderOptions"
            multiple
            tag-nowrap
            clearable
            placeholder="Cascader multiple"
          />
        </div>
        <div data-control="SelectOverflow">
          <p>Select · long values / nowrap</p>
          <c-form-item layout="vertical" hide-label>
            <c-select
              v-model="selectOverflow"
              edit-mode="direct"
              :size="size"
              :variant="variant"
              :options="selectedOptions"
              multiple
              tag-nowrap
              clearable
              placeholder="Select long values"
            />
          </c-form-item>
        </div>
        <div data-control="CascaderOverflow">
          <p>Cascader · long values / nowrap</p>
          <c-cascader
            v-model="cascaderOverflow"
            edit-mode="direct"
            :size="size"
            :variant="variant"
            :options="selectedCascaderOptions"
            multiple
            tag-nowrap
            clearable
            placeholder="Cascader long values"
          />
        </div>
      </div>
    </section>
  </section>
</template>
<style scoped>
.control-size-comparison,
.control-size-comparison__states {
  display: grid;
  gap: 24px;
}
.control-size-comparison__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  align-items: start;
  gap: 24px 16px;
}
.control-size-comparison__grid > div {
  min-width: 0;
}
.control-size-comparison__grid p {
  margin: 0 0 12px;
  font-size: 14px;
  line-height: 20px;
}
.control-size-comparison__grid :deep(.c-input-number),
.control-size-comparison__grid :deep(.c-auto-complete) {
  width: 100%;
}
</style>
