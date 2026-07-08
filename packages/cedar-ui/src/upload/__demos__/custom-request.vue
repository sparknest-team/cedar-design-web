<template>
  <c-upload :custom-request="upload" auto-upload multiple />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
export default defineComponent({
  setup() {
    const token = localStorage.getItem('token')
    let fetchBackend: any
    onMounted(() => {
      // TODO: 脱敏迁移 - 暂时注释 @nio-pow/mfe-vue3
      // import('@nio-pow/mfe-vue3').then(({ Fetch }) => {
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

    return {
      upload,
    }
  },
})
</script>
