<template>
  <c-space direction="column" size="16px">
    <c-progress :steps="5" :percent="40" />
    <c-progress :steps="10" :percent="75" status="warning" size="lg" />
    <c-progress :steps="5" :percent="100" />
  </c-space>
</template>
