<template>
  <c-drag-container v-model="list" :drag-options="dragOptions" @change="handleListChange">
    <div v-for="item in list" :key="item" class="drag-item">
      Item_ {{ item }} <c-link @click="removeHandler(item)">remove</c-link>
    </div>
  </c-drag-container>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const dragOptions = ref({
  animation: 150,
  draggable: '.drag-item',
  ghostClass: 'blue-class',
})
function removeHandler(item: number) {
  list.value = list.value.filter((i) => i !== item)
}
const list = ref([1, 2, 3])

const handleListChange = (newList) => {
  console.log(newList)
}
</script>
<style scope lang="scss">
.drag-item {
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.blue-class {
  background-color: #c8ebfb;
}
</style>
