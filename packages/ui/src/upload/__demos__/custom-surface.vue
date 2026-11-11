<script setup>
import { ref } from 'vue'
const files = ref([])
const message = ref('')
const preview = (file, event) => { event.preventDefault(); message.value = file.name }
</script>
<template><div><c-upload v-model="files" list-type="picture-card" multiple @preview="preview"><template #trigger><span>选择图片</span></template><template #remove-button="{ remove }"><c-button variant="text" @click="remove">删除</c-button></template></c-upload><p>自定义预览：{{ message }}</p></div></template>

