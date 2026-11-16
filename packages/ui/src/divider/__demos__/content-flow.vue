<script setup lang="ts">
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("dividerContentFlowInline");
</script>
<template>
  <section class="divider-flow-demo">
    <h4>{{ inlineCopy.minimumExplicitWidth }}</h4>
    <div class="flow-sample">
      <c-divider
        data-min-line
        :thickness="1"
        :spacing="0"
        :description="inlineCopy.contentStaysInNormalFlow"
      />
      <p>{{ inlineCopy.followingContent }}</p>
    </div>
    <h4>{{ inlineCopy.multilineContent }}</h4>
    <div class="flow-sample">
      <c-divider
        data-multiline
        :thickness="4"
        :spacing="0"
        :description="inlineCopy.aWrappingSectionTitleReserves"
      />
      <p>{{ inlineCopy.followingContent }}</p>
    </div>
    <h4>{{ inlineCopy.customContent }}</h4>
    <div class="flow-sample">
      <c-divider data-custom-content :spacing="0"
        ><span class="flow-content"
          >{{ inlineCopy.firstLine }}<br />{{ inlineCopy.secondLine }}</span
        ></c-divider
      >
      <p>{{ inlineCopy.followingContent }}</p>
    </div>
    <p>{{ inlineCopy.hairlineTakesPriorityAndHalves }}</p>
  </section>
</template>
<style scoped>
.flow-sample {
  max-width: 280px;
}
.flow-sample p {
  margin: 0;
}
.flow-content {
  padding: 12px 0;
}
</style>
