<template>
  <div :style="{ position: 'relative', width: '440px', height: '280px' }">
    <c-popconfirm content="This is a Popconfirm" placement="top-start">
      <c-button class="button" :style="{ position: 'absolute', top: '0', left: '70px' }">TL</c-button>
    </c-popconfirm>
    <c-popconfirm content="This is a Popconfirm" placement="top">
      <c-button class="button" :style="{ position: 'absolute', top: '0', left: '180px' }">TOP</c-button>
    </c-popconfirm>
    <c-popconfirm content="This is a Popconfirm" placement="top-end">
      <c-button class="button" :style="{ position: 'absolute', top: '0', left: '290px' }">TR</c-button>
    </c-popconfirm>
    <c-popconfirm content="This is a Popconfirm" placement="bottom-start">
      <c-button class="button" :style="{ position: 'absolute', top: '240px', left: '70px' }">BL</c-button>
    </c-popconfirm>
    <c-popconfirm content="This is a Popconfirm" placement="bottom">
      <c-button class="button" :style="{ position: 'absolute', top: '240px', left: '180px' }">BOTTOM</c-button>
    </c-popconfirm>
    <c-popconfirm content="This is a Popconfirm" placement="bottom-end">
      <c-button class="button" :style="{ position: 'absolute', top: '240px', left: '290px' }">BR</c-button>
    </c-popconfirm>
    <c-popconfirm content="This is a Popconfirm" placement="left-start">
      <c-button class="button" :style="{ position: 'absolute', top: '60px', left: '10px' }">LT</c-button>
    </c-popconfirm>
    <c-popconfirm content="This is a Popconfirm" placement="left">
      <c-button class="button" :style="{ position: 'absolute', top: '120px', left: '10px' }">LEFT</c-button>
    </c-popconfirm>
    <c-popconfirm content="This is a Popconfirm" placement="left-end">
      <c-button class="button" :style="{ position: 'absolute', top: '180px', left: '10px' }">LB</c-button>
    </c-popconfirm>
    <c-popconfirm content="This is a Popconfirm" placement="right-start">
      <c-button class="button" :style="{ position: 'absolute', top: '60px', left: '350px' }">RT</c-button>
    </c-popconfirm>
    <c-popconfirm content="This is a Popconfirm" placement="right">
      <c-button class="button" :style="{ position: 'absolute', top: '120px', left: '350px' }">RIGHT</c-button>
    </c-popconfirm>
    <c-popconfirm content="This is a Popconfirm" placement="right-end">
      <c-button class="button" :style="{ position: 'absolute', top: '180px', left: '350px' }">RB</c-button>
    </c-popconfirm>
  </div>
</template>

<script lang="ts" setup>
</script>
