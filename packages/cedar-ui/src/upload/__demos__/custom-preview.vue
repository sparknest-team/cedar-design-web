<template>
  <c-space direction="column" :size="40" fill>
    <div>
      <div style="margin-bottom: 10px">上传文件</div>
      <c-upload :default-file-list="fileList" show-file-list action="/" :show-link="false">
        <template #file-name="{ fileItem }">
          <c-link
            v-if="fileItem.status === 'done' || fileItem.file.type.includes('image')"
            @click="handlePreview(fileItem)"
          >
            {{ fileItem.name }}
          </c-link>
          <div v-else>{{ fileItem.name }}</div>
        </template>
      </c-upload>
    </div>
  </c-space>
  <c-image-preview v-model:visible="previewVisible" :src="previewUrl" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const previewVisible = ref(false)
    const previewUrl = ref<string | undefined>('')

    const fileList = [
      {
        uid: '-2',
        name: '20200717-103937.png',
        url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
      },
      {
        uid: '-1',
        name: 'hahhahahahaha.png',
        url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp',
      },
    ]

    const handlePreview = (file: FileItem) => {
      previewVisible.value = true
      previewUrl.value = file.url
    }

    return {
      handlePreview,
      previewVisible,
      previewUrl,
      fileList,
    }
  },
})
</script>
