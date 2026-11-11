<script setup>
import { ref } from "vue";

const value = ref(["2026-09-10", "2026-09-15"]);
const lockStart = ref(true);
const lockEnd = ref(false);
const confirms = ref(0);
const selections = ref(0);
</script>

<template>
  <section class="date-range-lock-demo">
    <p>
      本地日期：锁定一个端点，修改另一端并确认。两端都锁定时不允许选择；切换锁定不提交草稿。
    </p>
    <c-checkbox v-model="lockStart"> 锁定起点</c-checkbox>
    <c-checkbox v-model="lockEnd"> 锁定终点</c-checkbox>
    <c-button html-type="button" @click="value = ['2026-09-18', '2026-09-22']"
      >外部改为18~22</c-button
    >
    <c-date-range-picker
      v-model="value"
      :disable-confirm="false"
      :disabled="[lockStart, lockEnd]"
      @select="selections++"
      @confirm="confirms++"
    />
    <p role="status">选择次数：{{ selections }}；确认次数：{{ confirms }}</p>
    <output>{{ value }}</output>
  </section>
</template>
