<template>
  <c-space direction="vertical" size="lg">
    <c-tabs>
      <c-tabs-navs>
        <c-tab-nav key="1">
          <template #icon> <c-icon-calendar /> </template>
          <template #title>Tab 1</template>
        </c-tab-nav>
        <c-tab-nav key="2">
          <template #icon> <c-icon-clock-circle /> </template>
          <template #title>Tab 2</template>
        </c-tab-nav>
        <c-tab-nav key="3">
          <template #icon> <c-icon-user /> </template>
          <template #title>Tab 3</template>
        </c-tab-nav>
      </c-tabs-navs>
      <c-tabs-items>
        <c-tab-item key="1"> Content of Tab Panel 1</c-tab-item>
        <c-tab-item key="2"> Content of Tab Panel 2</c-tab-item>
        <c-tab-item key="3"> Content of Tab Panel 3</c-tab-item>
      </c-tabs-items>
    </c-tabs>

    <c-tabs>
      <c-tabs-navs>
        <c-tab-nav key="1" item-vertical>
          <template #icon> <c-icon-calendar /> </template>
          <template #title>日历</template>
        </c-tab-nav>
        <c-tab-nav key="2" item-vertical>
          <template #icon> <c-icon-clock-circle /> </template>
          <template #title>时钟</template>
        </c-tab-nav>
        <c-tab-nav key="3" item-vertical>
          <template #icon> <c-icon-user /> </template>
          <template #title>用户</template>
        </c-tab-nav>
      </c-tabs-navs>
      <c-tabs-items>
        <c-tab-item key="1"> Content of Tab Panel 1</c-tab-item>
        <c-tab-item key="2"> Content of Tab Panel 2</c-tab-item>
        <c-tab-item key="3"> Content of Tab Panel 3</c-tab-item>
      </c-tabs-items>
    </c-tabs>
  </c-space>
</template>

<script lang="ts" setup>
</script>
