<template>
  <c-list :gridProps="{ gutter: 0, span: 6 }" :bordered="false">
    <c-list-item>
      <c-list>
        <template #header>Platform</template>
        <c-list-item>iOS</c-list-item>
        <c-list-item>Android</c-list-item>
        <c-list-item>Web</c-list-item>
      </c-list>
    </c-list-item>
    <c-list-item>
      <c-list>
        <template #header>Framework</template>
        <c-list-item>Angular</c-list-item>
        <c-list-item>Vue</c-list-item>
        <c-list-item>React</c-list-item>
      </c-list>
    </c-list-item>
    <c-list-item>
      <c-list>
        <template #header>Language</template>
        <c-list-item>C++</c-list-item>
        <c-list-item>JavaScript</c-list-item>
        <c-list-item>Python</c-list-item>
      </c-list>
    </c-list-item>
    <c-list-item>
      <c-list>
        <template #header>Component</template>
        <c-list-item>Button</c-list-item>
        <c-list-item>Breadcrumb</c-list-item>
        <c-list-item>Transfer</c-list-item>
      </c-list>
    </c-list-item>
  </c-list>
</template>

<script lang="ts" setup>
</script>
