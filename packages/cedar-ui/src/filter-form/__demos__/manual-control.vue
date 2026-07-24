<template>
  <c-button @click="init">加载表单值</c-button>
  <c-filter-form
    ref="filterForm"
    v-model:model="filter"
    :auto-remember="false"
    :components="components"
    :field-config="fieldConfig"
    :rules="rules"
    :store="store"
    remember-user-key="rememberUserKeyManual"
    show-remember-selections
    @change="handleChange"
  >
    <template #suffix>
      <c-space>
        <c-button type="primary" @click="search">搜索</c-button>
        <c-button @click="reset">reset</c-button>
      </c-space>
    </template>
  </c-filter-form>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const store = {
  select1: [] as any[],
  select2: [] as any[],
}
setTimeout(() => {
  store.select1 = [{ label: 'text1', value: 1 }]
}, 1000)
const rules = {
  rating: [{ required: true, message: '必输项' }],
}
const filterForm = ref()
const filter = ref({ child: {} })
const fieldConfig = {
  select2: {
    required: true,
  },
  select3: {
    removeIfNotInOptions: false,
  },
}
const components = [
  {
    name: 'cascader',
    props: {
      prop: 'cascader',
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
      options: [
        { label: 'text1', value: 1 },
        { label: 'text2', value: 2 },
      ],
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
    name: 'input',
    props: {
      prop: 'rating',
      label: '评分',
      clearable: true,
    },
  },
  {
    name: 'select',
    props: {
      prop: 'select1',
      label: 'select1',
      clearable: true,
    },
  },
  {
    name: 'select',
    props: {
      prop: 'select4',
      label: 'select4',
      clearable: true,
    },
  },
  {
    name: 'date-picker',
    props: {
      prop: 'datetime',
      clearable: true,
      label: '执行时间',
      align: 'right',
    },
  },
  {
    name: 'date-picker',
    props: {
      prop: 'datetime',
      showTime: true,
      clearable: true,
      label: '执行时间',
      align: 'right',
    },
  },
  {
    name: 'date-range-picker',
    props: {
      prop: 'startTimeArr',
      clearable: true,
      label: '执行时间',
      align: 'right',
      placeholder: ['起始时间1', '结束时间2'],
      gridItemProps: {
        span: 2,
      },
    },
    gridItemProps: {
      span: 2,
    },
  },
  {
    name: 'date-range-picker',
    props: {
      prop: 'startTimeArr',
      showTime: true,
      clearable: true,
      label: '执行时间',
      align: 'right',
    },
    gridItemProps: {
      span: 2,
    },
  },
]

function search() {
  filterForm.value.saveStorageData()
}

function reset() {
  filter.value = {}
}

function init() {
  filterForm.value.loadStorageData()
}

function handleChange(model, prop) {
  console.log('handleChange', model, prop)
}
</script>
<style lang="scss" scoped></style>
