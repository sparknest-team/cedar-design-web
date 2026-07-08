<template>
  <c-space direction="column" fill size="lg">
    <c-row :gutter="16">
      <c-col :span="8" v-for="color in colors" :key="color.name">
        <div class="color-card border-radius-medium mt-12">
          <div class="color-title" :class="`${color.name}`">{{ color.name }}</div>
          <div class="color-list border-radius-medium overflow-hidden mt-4">
            <div
              class="color-cell flex justify-space-between"
              :class="`bg-${color.name}-${level + 1}`"
              v-for="(hex, level) in color.levels"
              :key="hex"
              :style="{
                height: '48px',
                lineHeight: '48px',
                width: '100%',
                color: level > 5 ? '#fff' : '#000',
                fontWeight: level === 5 ? 'bold' : 'normal',
              }"
            >
              <div class="color-level ml-8">{{ `${color.name}-${level + 1}` }}</div>
              <div class="color-hex mr-8">{{ hex }}</div>
            </div>
          </div>
        </div>
      </c-col>
    </c-row>
  </c-space>
</template>

<script lang="ts" setup>
const colors = [
  {
    name: 'brand',
    levels: [
      '#F2FEFF', // brand-1
      '#D3F7F9', // brand-2
      '#A9EEEC', // brand-3
      '#74E2DF', // brand-4
      '#37D1CC', // brand-5
      '#00BEBE', // brand-6
      '#0E999E', // brand-7
      '#0E727B', // brand-8
      '#0D4E56', // brand-9
      '#093C44', // brand-10
    ],
  },
  {
    name: 'red',
    levels: [
      '#FFF2F0', // red-1
      '#FDD5CE', // red-2
      '#FBB0A7', // red-3
      '#F98981', // red-4
      '#F76560', // red-5
      '#F53F3F', // red-6
      '#CB272D', // red-7
      '#A1151E', // red-8
      '#770813', // red-9
      '#4D000A', // red-10
    ],
  },
  {
    name: 'orangered',
    levels: [
      '#FFF3E8', // orangered-1
      '#FDDDC3', // orangered-2
      '#FCC59F', // orangered-3
      '#FAAC7B', // orangered-4
      '#F99057', // orangered-5
      '#F77234', // orangered-6
      '#CC511F', // orangered-7
      '#A23511', // orangered-8
      '#771F06', // orangered-9
      '#4D0E00', // orangered-10
    ],
  },
  {
    name: 'orange',
    levels: [
      '#FFF7E8', // orange-1
      '#FFE4BA', // orange-2
      '#FFCF8B', // orange-3
      '#FFB65D', // orange-4
      '#FF9A2E', // orange-5
      '#FF7D00', // orange-6
      '#D25F00', // orange-7
      '#A64500', // orange-8
      '#792E00', // orange-9
      '#4D1B00', // orange-10
    ],
  },
  {
    name: 'gold',
    levels: [
      '#FFFCE8', // gold-1
      '#FDF4BF', // gold-2
      '#FCE996', // gold-3
      '#FADC6D', // gold-4
      '#F9CC45', // gold-5
      '#F7BA1E', // gold-6
      '#CC9213', // gold-7
      '#A26D0A', // gold-8
      '#774B04', // gold-9
      '#4D2D00', // gold-10
    ],
  },
  {
    name: 'yellow',
    levels: [
      '#FEFFE8', // yellow-1
      '#FEFEBE', // yellow-2
      '#FDFA94', // yellow-3
      '#FCF26B', // yellow-4
      '#FBE842', // yellow-5
      '#FADC19', // yellow-6
      '#CFAF0F', // yellow-7
      '#A38408', // yellow-8
      '#785D03', // yellow-9
      '#4D3800', // yellow-10
    ],
  },
  {
    name: 'yellowgreen',
    levels: [
      '#FAFAE0', // yellowgreen-1
      '#F2F2A7', // yellowgreen-2
      '#E2E67A', // yellowgreen-3
      '#D0D950', // yellowgreen-4
      '#BCCB2B', // yellowgreen-5
      '#A6BF0A', // yellowgreen-6
      '#7F9900', // yellowgreen-7
      '#5C7300', // yellowgreen-8
      '#3B4D00', // yellowgreen-9
      '#1C2600', // yellowgreen-10
    ],
  },
  {
    name: 'lime',
    levels: [
      '#FCFFE8', // lime-1
      '#EDF8BB', // lime-2
      '#DCF190', // lime-3
      '#C9E968', // lime-4
      '#B5E241', // lime-5
      '#9FDB1D', // lime-6
      '#7EB712', // lime-7
      '#5F940A', // lime-8
      '#437004', // lime-9
      '#2A4D00', // lime-10
    ],
  },
  {
    name: 'green',
    levels: [
      '#E6FFE5', // green-1
      '#B9F4BE', // green-2
      '#8AE59B', // green-3
      '#5ED983', // green-4
      '#3CCD6F', // green-5
      '#08BA59', // green-6
      '#18A550', // green-7
      '#148543', // green-8
      '#0A6733', // green-9
      '#014D21', // green-10
    ],
  },
  {
    name: 'cyan',
    levels: [
      '#E8FFFB', // cyan-1
      '#B7F4EC', // cyan-2
      '#89E9E0', // cyan-3
      '#5EDFCE', // cyan-4
      '#37D4CF', // cyan-5
      '#14C9C9', // cyan-6
      '#0DA5AA', // cyan-7
      '#07828B', // cyan-8
      '#03616C', // cyan-9
      '#00424D', // cyan-10
    ],
  },
  {
    name: 'blue',
    levels: [
      '#E8F7FF', // blue-1
      '#C3E7FE', // blue-2
      '#9FD4FD', // blue-3
      '#7BC0FC', // blue-4
      '#57A9FB', // blue-5
      '#3491FA', // blue-6
      '#206CCF', // blue-7
      '#114BA3', // blue-8
      '#063078', // blue-9
      '#001A4D', // blue-10
    ],
  },
  {
    name: 'brand',
    levels: [
      '#E8F3FF', // brand-1
      '#BEDAFF', // brand-2
      '#94BFFF', // brand-3
      '#6AA1FF', // brand-4
      '#4080FF', // brand-5
      '#165DFF', // brand-6
      '#0E42D2', // brand-7
      '#072CA6', // brand-8
      '#031A79', // brand-9
      '#000D4D', // brand-10
    ],
  },
  {
    name: 'lakeblue',
    levels: [
      '#E6FCFF', // lakeblue-1
      '#B0F4FF', // lakeblue-2
      '#86E9FC', // lakeblue-3
      '#59D1F0', // lakeblue-4
      '#30B9E3', // lakeblue-5
      '#0BA1D6', // lakeblue-6
      '#007BB0', // lakeblue-7
      '#005C8A', // lakeblue-8
      '#003F63', // lakeblue-9
      '#00253D', // lakeblue-10
    ],
  },
  {
    name: 'indigo',
    levels: [
      '#ECF3FF', // indigo-1
      '#D9E3FD', // indigo-2
      '#B0C5F7', // indigo-3
      '#829EEA', // indigo-4
      '#5877DC', // indigo-5
      '#3254CF', // indigo-6
      '#1E39A9', // indigo-7
      '#0F2484', // indigo-8
      '#05145F', // indigo-9
      '#02093A', // indigo-10
    ],
  },
  {
    name: 'purple',
    levels: [
      '#F5E8FF', // purple-1
      '#DDBEF6', // purple-2
      '#C396ED', // purple-3
      '#A871E3', // purple-4
      '#8D4EDA', // purple-5
      '#722ED1', // purple-6
      '#551DB0', // purple-7
      '#3C108F', // purple-8
      '#27066E', // purple-9
      '#16004D', // purple-10
    ],
  },
  {
    name: 'pinkpurple',
    levels: [
      '#FFE8FB', // pinkpurple-1
      '#F7BAEF', // pinkpurple-2
      '#F08EE6', // pinkpurple-3
      '#E865DF', // pinkpurple-4
      '#E13EDB', // pinkpurple-5
      '#D91AD9', // pinkpurple-6
      '#B010B6', // pinkpurple-7
      '#8A0993', // pinkpurple-8
      '#650370', // pinkpurple-9
      '#42004D', // pinkpurple-10
    ],
  },
  {
    name: 'magenta',
    levels: [
      '#FFE8F1', // magenta-1
      '#FDC2DB', // magenta-2
      '#FB9DC7', // magenta-3
      '#F979B7', // magenta-4
      '#F754A8', // magenta-5
      '#F5319D', // magenta-6
      '#CB1E83', // magenta-7
      '#A11069', // magenta-8
      '#77064F', // magenta-9
      '#4D0034', // magenta-10
    ],
  },
  {
    name: 'gray',
    levels: [
      '#F7F9FC', // gray-1
      '#F0F3FA', // gray-2
      '#E6EBF5', // gray-3
      '#E2E6F0', // gray-4
      '#CACFDE', // gray-5
      '#B3BACD', // gray-6
      '#8F97B2', // gray-7
      '#69718C', // gray-8
      '#474E66', // gray-9
      '#1D2233', // gray-10
    ],
  },
]
const otherColor = [
  {
    name: 'white',
    color: '#FFFFFF',
    background: '#000000',
  },
  {
    name: 'black',
    color: '#000000',
    background: '#FFFFFF',
  },
  {
    name: 'transparent',
    color: 'transparent',
  },
]
</script>
<style lang="scss" scoped>
.title {
  margin: 1rem 0;
  font-size: 1.5rem;
  font-weight: 500;
}
</style>
