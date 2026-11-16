<script setup lang="ts">
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("dividerLineAppearanceComparisonInline");

import { useDemoLocale } from "../../__demos__/locale";
const demoCopy = useDemoLocale("dividerLineAppearanceComparison");
import { proxyRefs as demoProxyRefs } from "vue";

const scene1 = demoProxyRefs(
  (() => {
    const presets = ["xs", "sm", "md", "lg", "xl"];
    return { presets };
  })(),
);
</script>

<template>
  <div class="demo-comparison">
    <section
      class="demo-comparison-case demo-comparison-case--1"
      data-comparison-scene="size-inset"
    >
      <h4>{{ demoCopy.sizeInset }}</h4>
      <div>
        <div v-for="size in scene1.presets" :key="size">
          <code>inset="{{ size }}" spacing="{{ size }}"</code>
          <c-divider :inset="size" :spacing="size" />
        </div>
        <p>{{ inlineCopy.numberInset24Spacing16 }}</p>
        <c-divider :inset="24" :spacing="16" />
        <p>{{ inlineCopy.cssLengthInset2rem }}</p>
        <c-divider inset="2rem" />
        <p>{{ inlineCopy.asymmetricInset832Spacing }}</p>
        <c-divider :inset="[8, 32]" :spacing="[12, 24]" />
        <p>{{ inlineCopy.verticalInset824Spacing }}</p>
        <div class="vertical-preview">
          <span>Before</span>
          <c-divider
            orientation="vertical"
            :inset="[8, 24]"
            :spacing="[12, 20]"
          />
          <span>After</span>
        </div>
      </div>
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--2"
      data-comparison-scene="line-type"
    >
      <h4>{{ demoCopy.lineType }}</h4>
      <div>
        <p>{{ inlineCopy.solid }}</p>
        <c-divider />
        <p>{{ inlineCopy.dashed }}</p>
        <c-divider type="dashed" />
        <p>{{ inlineCopy.dotted }}</p>
        <c-divider type="dotted" />
        <p>{{ inlineCopy.double3px }}</p>
        <c-divider type="double" :thickness="3" />
      </div>
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--3"
      data-comparison-scene="opacity-color"
    >
      <h4>{{ demoCopy.opacityColor }}</h4>
      <div>
        <p>{{ inlineCopy.themeColor }}</p>
        <c-divider color="var(--c-sys-color-action-primary)" />
        <p>{{ inlineCopy.thickness3px }}</p>
        <c-divider :thickness="3" />
        <p>{{ inlineCopy.halfOpacity05 }}</p>
        <c-divider :thickness="3" :opacity="0.5" />
        <p>{{ inlineCopy.zeroOpacityPreservesSpacing }}</p>
        <c-divider :opacity="0" />
        <p>{{ inlineCopy.hairlineOverridesThickness }}</p>
        <c-divider hairline :thickness="4" />
      </div>
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

.demo-comparison-case--1 {
  .vertical-preview {
    display: flex;
    align-items: center;
    height: 96px;
  }
}
</style>
