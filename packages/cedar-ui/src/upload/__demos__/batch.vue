<template>
  <c-button @click="visible = true">批量上传</c-button>

  <c-dialog
    v-model:show="visible"
    title="批量上传"
    width="440px"
    unmount-on-close
    :close-on-click-overlay="false"
    @before-close="handleSubmit"
  >
    <c-upload ref="uploadRef" multiple :custom-request="upload" draggable :auto-upload="false"> </c-upload>
  </c-dialog>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import type { RequestOption, UploadInstance } from '@cedar/ui'

export default defineComponent({
  setup() {
    const visible = ref(false)
    const uploadRef = ref<UploadInstance>()
    const token = localStorage.getItem('token')
    let fetchBackend: any
    onMounted(() => {
      // TODO: 脱敏迁移 - 暂时注释 @maplejs/mfe-vue3
      // import('@maplejs/mfe-vue3').then(({ Fetch }) => {
        fetchBackend = Fetch.genFetch('xxxxx.com', {
          headers: {
            Authorization: 'Bearer ' + token,
          },
          commonParams: {
            appId: '100360',
            appVer: '1.0.1',
          },
        })
      })
    })
    const upload = (option: RequestOption) => {
      const params = new FormData()
      params.append('biz_aap_id', '100360')
      params.append('type', 'CN_CDN')
      params.append('rename', option.fileItem.name || '')
      params.append('file', option.fileItem.file || '')
      const url = Math.random() > 0.5 ? '/pe/powerpro/bff/node/file/v1/public/upload' : 'fail'
      fetchBackend
        .post(url, {
          params,
        })
        .then((res) => {
          const { data } = res
          option.onSuccess(data.url)
        })
        .catch((err) => {
          option.onError(err)
        })
    }
    // 触发上传事件
    const handleSubmit = async () => {
      uploadRef.value?.submit()
      return false
    }

    return { uploadRef, visible, handleSubmit, upload }
  },
})
</script>
