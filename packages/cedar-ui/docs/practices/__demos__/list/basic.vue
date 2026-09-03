<template>
  <div class="p-24 c-bg-1">
    <FilterForm
      ref="filterForm"
      v-model="filter"
      :fields="filterFields"
      :field-map="fieldMap"
      :options-map="optionsMap"
      class="px-24 pt-24 pb-8 mb-16"
      @change="search"
    >
      <template #actions>
        <Space>
          <Button @click="reset">重置</Button>
        </Space>
      </template>
    </FilterForm>
    <Card size="lg">
      <div class="c-flex c-justify-between mb-16">
        <Button status="primary" @click="createStation">
          <Plus />
          新建
        </Button>
        <Search
          ref="searchFormRef"
          v-model:model="searchForm"
          :fields="fields"
          :selectStyle="{ minWidth: '120px' }"
          defaultField="station_id"
          placeholder="请输入"
          searchHistoryKey="__eco_energy-station-list_search__"
          @change="handleSearchChange"
          @search="search"
        >
        </Search>
      </div>
      <Table
        :columns="columns"
        :data="stationList.resultList"
        :pagination="pagination"
        pagination-sticky
        @page-change="onPageChange"
        @page-size-change="onPageSizeChange"
      ></Table>
    </Card>
    <Dialog v-model:open="visible" :body-style="{ height: '400px' }" @cancel="handleCancel" @confirm="handleConfirm">
      <template #title>title2</template>
      <template #footer>
        <div class="c-flex c-justify-between c-items-center">
          <div>自定义内容</div>
          <Space>
            <Button @click="handleCancel">取消</Button>
            <Button status="primary" @click="handleConfirm">确定</Button>
          </Space>
        </div>
      </template>
      <Form layout="vertical">
        <Grid :colGap="16" :cols="2" :rowGap="0">
          <GridItem>
            <FormItem field="name" label="Postname" required>
              <Input placeholder="请输入" type="text" />
            </FormItem>
          </GridItem>
          <GridItem>
            <FormItem field="name" label="Postname" required>
              <Input placeholder="请输入" type="text" />
            </FormItem>
          </GridItem>
          <GridItem>
            <FormItem field="name" label="Postname" required>
              <Input placeholder="请输入" type="text" />
            </FormItem>
          </GridItem>
          <GridItem>
            <FormItem field="name" label="Postname" required>
              <Input placeholder="请输入" type="text" />
            </FormItem>
          </GridItem>
          <GridItem>
            <FormItem field="name" label="Postname" required>
              <Input placeholder="请输入" type="text" />
            </FormItem>
          </GridItem>
          <GridItem :span="2">
            <FormItem field="name" label="Postname" required>
              <Input placeholder="请输入" type="text" />
            </FormItem>
          </GridItem>
          <GridItem>
            <FormItem field="name" label="Postname" required>
              <Input placeholder="请输入" type="text" />
            </FormItem>
          </GridItem>
          <GridItem>
            <FormItem field="name" label="Postname" required>
              <Input placeholder="请输入" type="text" />
            </FormItem>
          </GridItem>
        </Grid>
      </Form>
    </Dialog>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, onMounted, defineComponent, h, provide } from 'vue'
import { useRouter } from 'vue-router'
import {
  Card,
  Table,
  Message,
  FilterForm,
  Button,
  Plus,
  Space,
  Dialog,
  Search,
  Form,
  Grid,
  GridItem,
  Input,
  FormItem,
  Select,
  type FilterFormField,
  type FilterFormFieldMap,
} from '@cedarjs/ui'
import type { SearchField, SearchResult } from '@cedarjs/ui'
import { ListFilter, StationList, StationListItem } from './list.model'

const visible = ref(false)

const handleClick = () => {
  visible.value = true
}
const handleConfirm = () => {
  visible.value = false
}
const handleCancel = () => {
  visible.value = false
}
const router = useRouter()

const loading = ref(false)
const filter = ref(
  new ListFilter({
    pageNo: 1,
    pageSize: 10,
  }),
)
const searchForm = ref<any>({})
const searchFormRef = ref<any>(null)

const stationList = ref<any>(new StationList())

const pagination = reactive({
  total: stationList.value.totalResults,
  current: 1,
  pageSize: 10,
  showTotal: true,
  showPageSize: true,
  pageSizeOptions: [10, 20, 30, 40, 50],
})

const optionsMap = ref<Record<string, unknown>>({})

const fieldMap: FilterFormFieldMap = {
  select: {
    component: Select,
    optionsFromMap: true,
  },
}
const columns = ref([
  {
    title: '场站名称',
    dataIndex: 'stationName',
    ellipsis: true,
    tooltip: true,
    render: (data: { record: StationListItem }) => {
      return data.record.stationName ?? '-'
    },
  },
  {
    title: '场站ID',
    dataIndex: 'outStationId',
    ellipsis: true,
    tooltip: true,
    render: (data: { record: StationListItem }) => {
      return data.record.outStationId ?? '-'
    },
  },
  {
    title: '城市公司',
    dataIndex: 'regionName',
    render: (data: { record: StationListItem }) => {
      return data.record.regionName ?? '-'
    },
  },
  {
    title: '场地方',
    dataIndex: 'siteName',
    ellipsis: true,
    tooltip: true,
    render: (data: { record: StationListItem }) => {
      return data.record.siteName ?? '-'
    },
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: 100,
    render: (data: { record: StationListItem }) => {
      return h(
        defineComponent({
          template: `
            <div class="operate-column">
            <div class='btn' @click="toDetail">详情</div>
            <div class='btn' @click="toDelete">删除</div>
            </div>`,
          components: {
            Button,
          },
          methods: {
            toDetail() {},
            toDelete() {},
          },
        }),
      )
    },
  },
])

const filterFields: FilterFormField[] = [
  {
    type: 'select',
    field: 'regionNameArray',
    label: '城市公司',
    props: {
      placeholder: '全部',
      multiple: true,
      clearable: true,
    },
  },
]
const fields: SearchField[] = [
  { label: '场站ID', value: 'station_id', placeholder: '请输入场站ID' },
  { label: '场站名称', value: 'station_name', placeholder: '请输入场站名称' },
  { label: '户号', value: 'grid_account_id', placeholder: '请输入户号' },
  { label: 'EMS设备ID', value: 'ems_id', placeholder: '请输入EMS设备ID' },
  { label: 'EMS设备名称', value: 'ems_name', placeholder: '请输入EMS设备名称' },
]

const search = async () => {
  stationList.value = {
    resultList: [
      { stationName: '1' },
      { stationName: '1' },
      { stationName: '1' },
      { stationName: '1' },
      { stationName: '2' },
    ],
    totalResults: 100,
  }
  pagination.total = stationList.value.totalResults
}

const reset = () => {
  filter.value = new ListFilter({
    pageNo: 1,
    pageSize: 10,
  })
  searchForm.value = {}
  search()
}

const onPageChange = (page: number) => {
  pagination.current = page
  filter.value.pageNo = page
  search()
}

const onPageSizeChange = (size: number) => {
  pagination.pageSize = size
  pagination.current = 1
  filter.value.pageSize = size
  filter.value.pageNo = 1
  search()
}

const createStation = () => {
  visible.value = true
}

const handleSearchChange = (data: any) => {
  const { modelField, modelValue } = data
  filter.value.conditionType = modelField
  filter.value.fuzzyQuery = modelValue
}

onMounted(() => {
  search()
})
</script>

<style lang="scss"></style>
