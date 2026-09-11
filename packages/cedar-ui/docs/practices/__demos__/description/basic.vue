<template>
  <div class="p-24">
    <c-card v-c-loading="loading" :aria-busy="loading || undefined" subtitle="ST2022010106536">
      <template #title>
        <c-space :size="8" align="center">
          <span>销售项目名称</span>
          <c-tag color="#F0FCFC" style="color: #08bebe">立项中</c-tag>
        </c-space>
      </template>
      <template #title-action>
        <c-button :disabled="loading">操作</c-button>
      </template>
      <c-descriptions :data="data" layout="inline-auto" />
      <c-descriptions :data="data2" layout="inline-auto" />
    </c-card>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const loading = ref(true)
let timer: ReturnType<typeof setTimeout> | undefined
onMounted(() => { timer = setTimeout(() => (loading.value = false), 5000) })
onBeforeUnmount(() => clearTimeout(timer))

const data = ref([
  {
    label: '客户名称：',
    value: '北京蔚来汽车销售服务有限公司',
  },
  {
    label: '项目负责人：',
    value: '张三（san.zhang）',
  },
  {
    label: '区域公司：',
    value: '上海公司',
  },
])

const data2 = ref([
  {
    label: '项目负责人：',
    value: '张三（san.zhang）',
  },
  {
    label: '区域公司：',
    value: '上海公司',
  },
])
</script>
