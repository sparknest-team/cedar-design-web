<template>
  <Spin></Spin>
</template>

<script lang="ts" setup>
import { loadingProps } from './props'
import Spin from '../spin'

defineOptions({
  name: 'Loading',
})

defineProps(loadingProps)
</script>
