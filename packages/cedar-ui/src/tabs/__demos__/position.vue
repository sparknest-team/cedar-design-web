<template>
  <c-space direction="column" size="lg">
    <c-radio-group v-model="indicatorPosition" type="button">
      <c-radio value="normal">Normal (bottom/right)</c-radio>
      <c-radio value="reverse">Reverse (top/left)</c-radio>
    </c-radio-group>
    <c-radio-group v-model="vertical" type="button">
      <c-radio value="horizontal">Horizontal</c-radio>
      <c-radio value="vertical">Vertical</c-radio>
    </c-radio-group>
    <c-radio-group v-model="componentOrder" type="button">
      <c-radio value="nav-first">TabsNavs → TabsItems</c-radio>
      <c-radio value="items-first">TabsItems → TabsNavs</c-radio>
    </c-radio-group>
    <c-tabs :indicator-position="indicatorPosition" :orientation="vertical">
      <template v-if="componentOrder === 'items-first'">
        <c-tabs-items>
          <c-tab-item name="1">Content of Tab Panel 1</c-tab-item>
          <c-tab-item name="2">Content of Tab Panel 2</c-tab-item>
          <c-tab-item name="3">Content of Tab Panel 3</c-tab-item>
        </c-tabs-items>
        <c-tabs-navs>
          <c-tab-nav name="1" title="Tab 1" />
          <c-tab-nav name="2" title="Tab 2" />
          <c-tab-nav name="3" title="Tab 3" />
        </c-tabs-navs>
      </template>
      <template v-else>
        <c-tabs-navs>
          <c-tab-nav name="1" title="Tab 1" />
          <c-tab-nav name="2" title="Tab 2" />
          <c-tab-nav name="3" title="Tab 3" />
        </c-tabs-navs>
        <c-tabs-items>
          <c-tab-item name="1">Content of Tab Panel 1</c-tab-item>
          <c-tab-item name="2">Content of Tab Panel 2</c-tab-item>
          <c-tab-item name="3">Content of Tab Panel 3</c-tab-item>
        </c-tabs-items>
      </template>
    </c-tabs>
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const indicatorPosition = ref('normal')
const vertical = ref('horizontal')
const componentOrder = ref('nav-first')
</script>
