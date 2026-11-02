<script setup>
import { ref } from "vue";

const value = ref("09:30");
const immediate = ref(false);
const confirmations = ref(0);
const hideDisabled = ref(false);
const readonly = ref(false);
const disabledHours = () => [0, 1, 2, 3, 4, 5, 6, 7];
</script>

<template>
  <c-space direction="column" size="12px" style="width: 100%">
    <c-checkbox v-model="immediate"> 跳过确认，选择即提交</c-checkbox>
    <c-checkbox v-model="hideDisabled"> 隐藏禁用小时（00–07）</c-checkbox>
    <c-checkbox v-model="readonly"> 只读（包括确认）</c-checkbox>
    <c-button variant="outline" @click="value = '13:45'"
      >外部更新为 13:45，覆盖未提交草稿</c-button
    >
    <c-time-picker
      v-model="value"
      @confirm="confirmations++"
      format="HH:mm"
      :disable-confirm="immediate"
      :hide-disabled-options="hideDisabled"
      :readonly="readonly"
      :disabled-hours="disabledHours"
    >
      <template #extra
        ><p>附加说明使用 extra 插槽；选择草稿后点击确认提交。</p></template
      >
    </c-time-picker>
    <span>有效确认次数: {{ confirmations }}</span>
    <span>已提交值: {{ value }}</span>
    <p>默认选择只修改草稿，点击确认后上方的已提交值才会更新。</p>
  </c-space>
</template>
