<script setup>
import { ref } from 'vue'

const accepted = ref(['a'])
const proposed = ref([])
const readonly = ref(false)
const options = [{ label: '设备 A', value: 'a' }, { label: '设备 B', value: 'b' }]
</script>

<template>
  <c-space direction="vertical">
    <div>
      <p>非受控：default-value 只用于初始值</p>
      <c-checkbox-group :default-value="['a']" :options="options" />
    </div>
    <div>
      <p>受控：父级接受更新 {{ accepted }}</p>
      <c-checkbox-group v-model="accepted" :options="options" :readonly="readonly" />
      <c-button size="sm" @click="readonly = !readonly">{{ readonly ? '解除只读' : '设为只读' }}</c-button>
    </div>
    <div>
      <p>父级拒绝更新：仅记录提议 {{ proposed }}</p>
      <c-checkbox-group :model-value="[]" :options="options" @update:model-value="proposed = $event" />
    </div>
  </c-space>
</template>
