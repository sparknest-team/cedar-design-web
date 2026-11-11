<template>
  <c-card top-divider bottom-divider>
    <template #cover><div style="padding: 16px">Custom cover</div></template>
    <template #title="{ slotClass }"><strong :class="slotClass">Custom title</strong></template>
    <template #title-action><c-button size="sm">More</c-button></template>
    <template #subtitle="{ slotClass }"><span :class="slotClass">Custom subtitle</span></template>
    <template #description="{ slotClass }"><p :class="slotClass">Custom description</p></template>
    Default content
    <template #footer><c-button status="primary">Confirm</c-button></template>
  </c-card>
</template>
