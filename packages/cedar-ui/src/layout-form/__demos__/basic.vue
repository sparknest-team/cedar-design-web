<template>
  <c-layout-form :store="store" :rules="rules" :component-tree="componentTree" :value="filter" no-bottom-space>
    <template #formOperatorGroup>
      <c-button @click="search">搜索</c-button>
    </template>
  </c-layout-form>
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
const filter = ref({
  rating: '',
})
const componentTree = {
  componentName: ComponentEnum.FORM,
  props: {
    maxVisibleRow: 1,
    layoutCol: 6,
    layoutColArr: [2, 3, 6],
    labelPosition: 'top',
    labelWidth: '100px',
  },
  children: [
    {
      componentName: ComponentEnum.SELECT,
      props: {
        prop: 'select2',
        label: 'select2',
        clearable: true,
        options: [{ label: 'text1', value: 1 }],
      },
    },
    {
      componentName: ComponentEnum.INPUT_NUMBER,
      props: {
        prop: 'rating',
        label: '评分',
        clearable: true,
      },
    },
    {
      componentName: ComponentEnum.INPUT,
      props: {
        prop: 'rating',
        label: '评分',
        clearable: true,
      },
    },
    {
      componentName: ComponentEnum.TEXTAREA,
      props: {
        prop: 'rating',
        label: '评分',
        clearable: true,
      },
    },
    {
      componentName: ComponentEnum.SELECT,
      props: {
        prop: 'select1',
        label: 'select1',
        clearable: true,
      },
    },
    {
      componentName: ComponentEnum.SELECT,
      props: {
        prop: 'hasCommentaryText1',
        label: '评论内容',
        clearable: true,
      },
    },
    {
      componentName: ComponentEnum.DATEPICKER_RANGE,
      props: {
        prop: 'startTimeArr',
        startPlaceholder: '起始时间',
        endPlaceholder: '结束时间',
        clearable: true,
        label: '执行时间',
        type: 'datetimerange',
        align: 'right',
      },
    },
  ],
}

function search() {
  console.log(filter)
}
</script>
