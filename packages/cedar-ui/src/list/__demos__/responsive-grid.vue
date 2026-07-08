<template>
  <c-list :gridProps="{ gutter: [20, 20], sm: 24, md: 12, lg: 8, xl: 6 }" :data="dataSource" :bordered="false">
    <template #item="{ item }">
      <c-list :data="item.data">
        <template #header>{{ item.title }}</template>
        <template #item="{ item: subItem }">
          <c-list-item>{{ subItem }}</c-list-item>
        </template>
      </c-list>
    </template>
  </c-list>
</template>

<script lang="ts" setup>
const dataSource = [
  {
    title: 'Platform',
    data: ['iOS', 'Android', 'Web'],
  },
  {
    title: 'Framework',
    data: ['Angular', 'Vue', 'React'],
  },
  {
    title: 'Language',
    data: ['C++', 'JavaScript', 'Python'],
  },
  {
    title: 'Component',
    data: ['Button', 'Breadcrumb', 'Transfer'],
  },
  {
    title: 'Design',
    data: ['Figma', 'Sketch', 'Adobe XD'],
  },
  {
    title: 'Plugin',
    data: ['Edu Tools', 'BashSupport', 'GitToolBox'],
  },
  {
    title: 'Platform',
    data: ['iOS', 'Android', 'Web'],
  },
  {
    title: 'Framework',
    data: ['Angular', 'Vue', 'React'],
  },
  {
    title: 'Language',
    data: ['C++', 'JavaScript', 'Python'],
  },
]
</script>
