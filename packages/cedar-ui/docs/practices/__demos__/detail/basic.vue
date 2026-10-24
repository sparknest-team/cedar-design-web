<template>
  <c-affix :offset-top="genTabOffsetTop()">
    <div class="px-16 py-12 c-bg-0">
      <c-breadcrumb :routes="routes">
        <template #item-render="{ route }">
          <span v-if="!route.path">
            {{ route.label }}
          </span>
          <a v-else @click="link(route.path)">
            {{ route.label }}
          </a>
        </template>
      </c-breadcrumb>
    </div>
  </c-affix>
  <div class="m-24 c-bg-0">
    <c-tabs :body-padding="false" default-value="3">
      <c-tabs-navs>
        <c-tab-nav name="1" title="基础信息" />
        <c-tab-nav name="2" title="关联线索" />
        <c-tab-nav name="3" title="商务信息" />
      </c-tabs-navs>
      <c-tabs-items>
        <c-tab-item name="1">基础信息</c-tab-item>
        <c-tab-item name="2">关联线索</c-tab-item>
        <c-tab-item name="3">
          <c-space :size="24" class="p-24" direction="column" fill>
            <!--card-->
            <div>
              <div class="mb-16">
                <div class="c-text-subtitle-2-semibold">贷款信息</div>
              </div>
              <c-descriptions :column="4" :data="descData" layout="vertical"></c-descriptions>
            </div>
            <!--card-->
            <div>
              <div class="mb-16">
                <div class="c-text-subtitle-2-semibold">贷款信息</div>
              </div>
              <c-descriptions :column="4" :data="descData" layout="vertical"></c-descriptions>
            </div>
          </c-space>
        </c-tab-item>
      </c-tabs-items>
    </c-tabs>
  </div>
</template>

<script lang="ts" setup>
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
