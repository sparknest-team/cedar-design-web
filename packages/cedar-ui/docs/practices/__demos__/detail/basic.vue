<template>
  <Affix :offsetTop="genTabOffsetTop()">
    <div class="px-16 py-12 c-bg-0">
      <Breadcrumb :routes="routes">
        <template #item-render="{ route }">
          <span v-if="!route.path">
            {{ route.label }}
          </span>
          <a v-else @click="link(route.path)">
            {{ route.label }}
          </a>
        </template>
      </Breadcrumb>
    </div>
  </Affix>
  <div class="m-24 c-bg-0">
    <Tabs :body-padding="false" default-active="3">
      <TabsNavs>
        <TabNav key="1" title="基础信息" />
        <TabNav key="2" title="关联线索" />
        <TabNav key="3" title="商务信息" />
      </TabsNavs>
      <TabsItems>
        <TabItem key="1">基础信息</TabItem>
        <TabItem key="2">关联线索</TabItem>
        <TabItem key="3">
          <Space :size="24" class="p-24" direction="column" fill>
            <!--card-->
            <div>
              <div class="mb-16">
                <div class="c-text-subtitle-2-semibold">贷款信息</div>
              </div>
              <Descriptions :column="4" :data="descData" layout="vertical"></Descriptions>
            </div>
            <!--card-->
            <div>
              <div class="mb-16">
                <div class="c-text-subtitle-2-semibold">贷款信息</div>
              </div>
              <Descriptions :column="4" :data="descData" layout="vertical"></Descriptions>
            </div>
          </Space>
        </TabItem>
      </TabsItems>
    </Tabs>
  </div>
</template>

<script lang="ts" setup>
import { Space, Tabs, TabNav, TabItem, TabsNavs, TabsItems, Affix, Breadcrumb, Descriptions } from '@cedarjs/ui'
import { ref } from 'vue'

const descData = ref([
  {
    label: '贷款顺序',
    value: '先款后货',
  },
  {
    label: '贷款顺序备注',
    value: '文案文案文案',
  },
  {
    label: '贷款顺序备注',
    value: '文案文案文案',
  },
  {
    label: '贷款顺序备注',
    value: '文案文案文案',
  },
  {
    label: '贷款顺序备注',
    value: '文案文案文案',
  },
  {
    label: '贷款顺序备注',
    value: '文案文案文案',
  },
])
const routes = ref([
  {
    path: '/list',
    label: '一级面包屑',
  },
  {
    path: '/list2',
    label: '二级面包屑',
  },
  {
    label: '三级面包屑',
  },
])
const link = (path: string) => {}
const genTabOffsetTop = () => {
  // const { systemInfo = {} } = Props.getRootProps()
  // return systemInfo.safeAreaTop || undefined
  return 0
}
</script>

<style scoped></style>
