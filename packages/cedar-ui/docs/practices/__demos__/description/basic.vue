<template>
  <div class="p-24">
    <Card :loading="loading" subtitle="ST2022010106536">
      <template #title>
        <Space :size="8" align="center">
          <span>销售项目名称</span>
          <Tag color="#F0FCFC" style="color: #08bebe">立项中</Tag>
        </Space>
      </template>
      <template #title-action>
        <Button>操作</Button>
      </template>
      <Descriptions :data="data" layout="inline-auto" />
      <Descriptions :data="data2" layout="inline-auto" />
    </Card>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Descriptions, Card, Tag, Button, Space } from '@cedarjs/ui'

const loading = ref(true)
setTimeout(() => (loading.value = false), 5000)

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

<style lang="scss" scoped></style>
