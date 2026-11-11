<template>
  <c-space>
    <c-select :style="{ width: '200px' }" v-model="province">
      <c-option v-for="value of Object.keys(data)" :key="value">{{ value }}</c-option>
    </c-select>
    <c-select :style="{ width: '200px' }" :options="data[province] || []" v-model="city" />
  </c-space>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
export default defineComponent({
  setup() {
    const province = ref('Sichuan')
    const city = ref('Chengdu')
    const data = {
      Beijing: ['Haidian', 'Chaoyang', 'Changping'],
      Sichuan: ['Chengdu', 'Mianyang', 'Aba'],
      Guangdong: ['Guangzhou', 'Shenzhen', 'Shantou'],
    }

    watch(province, () => {
      city.value = ''
    })

    return {
      province,
      city,
      data,
    }
  },
})
</script>
