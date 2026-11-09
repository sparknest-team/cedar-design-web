<script setup lang="ts">
import { ConfigProvider, Empty, Loading } from '../src'
import type { ConfigProviderSlots as RootSlots } from '../src'
import type { ConfigProviderSlots as EntrySlots } from '../src/config-provider'
const root: RootSlots = { empty: ({ component }) => component, loading: () => 'Wait' }
const entry: EntrySlots = root
void entry
</script>
<template>
  <ConfigProvider size="lg">
    <Empty /><Loading />
    <template #empty="{ component }"><span>{{ component.toUpperCase() }}</span></template>
    <template #loading><span>Wait</span></template>
  </ConfigProvider>
</template>
