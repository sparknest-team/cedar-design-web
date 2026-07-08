<template>
  <c-button @click="init">加载表单值</c-button>
  <c-button @click="setValue">setValue</c-button>
  <c-filter-form
    ref="filterForm"
    v-model:model="filter"
    :components="components"
    :field-config="fieldConfig"
    :rules="rules"
    :store="store"
    remember-user-key="rememberUserKey1"
    show-remember-selections
    @change="search"
  >
    <template #suffix>
      <c-space>
        <c-button @click="reset">reset</c-button>
        <c-button @click="get">get</c-button>
      </c-space>
    </template>
  </c-filter-form>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
const store = {
  select1: [] as any[],
  select2: [
    {
      label: 'text1',
      value: 1,
    },
    {
      label: 'text2',
      value: 2,
    },
    {
      label: 'text3',
      value: 3,
    },
  ],
}
const fetch = ref<any>()

onMounted(() => {
  // eslint-disable-next-line
  // @ts-ignore
  // TODO: 脱敏迁移 - 暂时注释 @nio-pow/mfe-vue3
  // import('@nio-pow/mfe-vue3').then(({ Fetch }) => {
    fetch.value = Fetch.genFetch('powerpro-api-dev.xxxx.com', {
      needAuth: true,
      openLoginInterceptor: false,
      commonParams: {
        appId: '100360',
        appVer: '1.0.1',
      },
    })
    console.log('fetch.value', fetch.value)
  })
})
setTimeout(() => {
  store.select2 = [
    {
      label: 'text1',
      value: 1,
    },
    {
      label: 'text2',
      value: 2,
    },
  ]
}, 1000)
const rules = {
  rating: [{ required: true, message: '必输项' }],
}
const filterForm = ref()

class Filter {
  a = 1
  child = {}
}

const filter = ref<any>(new Filter())
const fieldConfig = {
  // select2: {
  //   required: true,
  // },
  // select3: {
  //   removeIfNotInOptions: false,
  // },
}
const components = [
  {
    name: 'cascader',
    props: {
      prop: 'child.cascader',
      label: 'cascader',
      required: true,
      clearable: true,
      options: [
        {
          value: 'beijing',
          label: 'Beijing',
          children: [
            {
              value: 'chaoyang',
              label: 'ChaoYang',
              children: [
                {
                  value: 'datunli',
                  label: 'Datunli',
                },
              ],
            },
            {
              value: 'haidian1',
              label: 'Haidian',
            },
            {
              value: 'dongcheng',
              label: 'Dongcheng',
            },
            {
              value: 'xicheng',
              label: 'Xicheng',
              children: [
                {
                  value: 'jinrongjie',
                  label: 'Jinrongjie',
                },
                {
                  value: 'tianqiao',
                  label: 'Tianqiao',
                },
              ],
            },
          ],
        },
        {
          value: 'shanghai',
          label: 'Shanghai',
          children: [
            {
              value: 'huangpu',
              label: 'Huangpu',
            },
          ],
        },
      ],
    },
  },
  {
    name: 'select',
    props: {
      prop: 'select2',
      label: 'select2',
      clearable: true,
      onChange: (v) => {
        console.log('test', v)
      },
    },
  },
  {
    name: 'select',
    props: {
      prop: 'select3',
      label: 'select3',
      clearable: true,
      options: [
        { label: 'text1', value: 11 },
        { label: 'text2', value: 2 },
      ],
    },
  },
  {
    name: 'select',
    props: {
      prop: 'select4',
      label: 'select4',
      clearable: true,
      multiple: true,
      placeholder: '全部',
      options: [
        { label: 'text1', value: 11 },
        { label: 'text2', value: 2 },
      ],
    },
  },
  {
    name: 'input',
    props: {
      prop: 'rating',
      label: '评分',
      clearable: true,
      autoEmitChange: false,
    },
  },
  {
    name: 'people-select',
    props: {
      prop: 'people',
      label: 'people-select',
      clearable: true,
    },
  },
  {
    name: 'select',
    props: {
      prop: 'select_t1',
      label: 'select_t1',
      clearable: true,
    },
  },
  {
    name: 'range-picker',
    props: {
      prop: 'startTimeArr',
      clearable: true,
      label: '执行时间',
      align: 'right',
      showTime: true,
    },
  },
]

function search() {
  console.log('search')
  console.log(filter.value)
}

function save() {
  filterForm.value.saveStorageData()
}

function init() {
  filterForm.value.loadStorageData()
}

function setValue() {
  filter.value.select3 = 11
}

function get() {
  console.log(filter.value)
}

function reset() {
  filter.value = {
    child: {},
  }
}
</script>
<style lang="scss" scoped></style>
