<template>
  <c-comment
    align="right"
    author="Balzac"
    avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
    content="A design is a plan or specification for the construction of an object
          or system or for the implementation of an activity or process, or the
          result of that plan or specification in the form of a prototype,
          product or process."
    datetime="1 hour"
  >
    <template #actions>
      <span class="action"> <c-icon-message /> Reply </span>
    </template>
    <c-comment
      align="right"
      avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
    >
      <template #actions>
        <c-button key="0" type="secondary"> Cancel</c-button>
        <c-button key="1" type="primary"> Reply</c-button>
      </template>
      <template #content>
        <c-input placeholder="Here is your content." />
      </template>
    </c-comment>
  </c-comment>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.action {
  display: inline-block;
  padding: 0 4px;
  color: var(--color-text-1);
  line-height: 24px;
  background: transparent;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.1s ease;
}

.action:hover {
  background: var(--color-fill-3);
}
</style>
