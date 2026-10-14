<template>
  <div style="display: grid; gap: 16px">
    <c-progress :steps="5" :percent="40" />
    <c-progress :steps="10" :percent="75" status="warning" size="lg" />
    <c-progress :steps="5" :percent="100" />
  </div>
</template>
