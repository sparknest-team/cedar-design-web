<template>
  <c-space wrap>
    <c-tag v-for="(color, index) of colors" :key="index" :color="color" closable>{{ color }}</c-tag>
  </c-space>
  <h3>Custom Color:</h3>
  <c-space wrap>
    <c-tag v-for="(color, index) of custom" :key="index" :color="color" closable>{{ color }}</c-tag>
  </c-space>
</template>

<script lang="ts" setup>
const colors = [
  'red',
  'orangered',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'brand',
  'purple',
  'pinkpurple',
  'magenta',
  'gray',
]
const custom = [
  '#f53f3f',
  '#7816ff',
  '#00b42a',
  '#00BEBE',
  '#ff7d00',
  '#eb0aa4',
  '#7bc616',
  '#86909c',
  '#b71de8',
  '#0fc6c2',
  '#ffb400',
  '#168cff',
  '#ff5722',
]
</script>
