<script setup lang="ts">
import { useDemoLocale } from "../../__demos__/locale";
const demoCopy = useDemoLocale("countdownFormatComparison");
</script>

<template>
  <div class="demo-comparison">
    <section
      class="demo-comparison-case demo-comparison-case--1"
      data-comparison-scene="format"
    >
      <h4>{{ demoCopy.format }}</h4>
      <c-countdown
        :time="4 * 24 * 60 * 60 * 1000"
        :format="demoCopy.dayFormat"
      />
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--2"
      data-comparison-scene="millisecond"
    >
      <h4>{{ demoCopy.millisecond }}</h4>
      <c-countdown :time="2 * 60 * 60 * 1000" format="HH:mm:ss.SSS" />
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--3"
      data-comparison-scene="custom"
    >
      <h4>{{ demoCopy.custom }}</h4>
      <c-countdown :time="108000000">
        <template #default="{ hours, minutes, seconds }">
          <span class="countdown-block">{{ hours }}</span>
          <span class="countdown-colon">:</span>
          <span class="countdown-block">{{ minutes }}</span>
          <span class="countdown-colon">:</span>
          <span class="countdown-block">{{ seconds }}</span>
        </template>
      </c-countdown>
    </section>
  </div>
</template>

<style scoped lang="less">
.demo-comparison {
  display: grid;
  gap: 24px;
  min-width: 0;
  max-width: 100%;
}
.demo-comparison-case {
  min-width: 0;
  max-width: 100%;
}
.demo-comparison-case > h4 {
  margin: 0 0 12px;
  font-size: 14px;
}

.demo-comparison-case--3 {
  .countdown-block {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    color: var(--c-color-white);
    background: var(--c-color-primary-6);
    border-radius: 8px;
  }

  .countdown-colon {
    margin: 0 6px;
    font-weight: 500;
  }
}
</style>
