<template>
  <c-space direction="column" style="width: 100%">
    <c-input v-model="name" hint placeholder="姓名" clearable />
    <c-input v-model="email" hint variant="standard" placeholder="邮箱" />
    <c-input v-model="phone" hint placeholder="带前缀的电话" clearable><template #prefix>+86</template></c-input>
  </c-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const phone = ref('')
</script>
