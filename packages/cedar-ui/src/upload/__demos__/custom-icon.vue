<template>
  <div>
    <div style="margin-bottom: 20px">
      <c-space>
        <span>Type: </span>
        <c-radio-group v-model="type">
          <c-radio value="text">text</c-radio>
          <c-radio value="picture">picture</c-radio>
          <c-radio value="picture-card">picture-card</c-radio>
        </c-radio-group>
      </c-space>
    </div>
    <c-upload
      action="/"
      :list-type="type"
      :default-file-list="[
        {
          uid: '-1',
          name: 'ice.png',
          url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
        },
        {
          uid: '-3',
          name: 'light.png',
          url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
        },
      ]"
      :custom-icon="getCustomIcon()" />
  </div>
</template>
<script lang="ts">
import { defineComponent, h, ref } from 'vue'
export default defineComponent({
  setup() {
    const type = ref('text')
    const getCustomIcon = () => {
      return {
        retryIcon: () => h(IconUpload),
        cancelIcon: () => h(IconClose),
        fileIcon: () => h(IconFileAudio),
        removeIcon: () => h(IconClose),
        errorIcon: () => h(IconFaceFrownFill),
        fileName: (file) => {
          return `文件名： ${file.name}`
        },
      }
    }

    return {
      type,
      getCustomIcon,
    }
  },
})
</script>
