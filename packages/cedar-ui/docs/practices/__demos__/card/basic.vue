<template>
  <div class="p-24">
    <div class="text-subtitle-2-semibold mb-24">设备清单</div>
    <Grid :colGap="16" :cols="2" :rowGap="24">
      <GridItem>
        <div class="py-16 px-24 h-100 bg-1">
          <div v-tooltip:ellipsis class="text-body-1-semibold mb-12">箱式变压器箱式变压器箱式变压器箱式变压器</div>
          <Space :size="8" class="text-body-2-regular" direction="column" fill>
            <div class="flex justify-space-between align-center">
              <div>型号型号型号型号型号型号型号型号型号型号型号型号型号型号型号</div>
              <div>SCB13-1250kVA</div>
            </div>
            <div class="flex justify-space-between align-center">
              <div>型号</div>
              <div>SCB13-1250kVA 1250kVA</div>
            </div>
            <div class="flex justify-space-between align-center">
              <div>型号</div>
              <div>SCB13-1250kVA 1250kVA</div>
            </div>
          </Space>
        </div>
      </GridItem>
      <GridItem>
        <div class="py-16 px-24 h-100 bg-1">
          <div v-tooltip:ellipsis class="text-body-1-semibold mb-12">箱式变压器</div>
          <Space :size="8" class="text-body-2-regular" direction="column" fill>
            <div class="flex justify-space-between align-center">
              <div>型号型号型号型号型号</div>
              <div>SCB13-1250kVA</div>
            </div>
            <div class="flex justify-space-between align-center">
              <div>型号</div>
              <div>SCB13-1250kVA 1250kVA</div>
            </div>
            <div class="flex justify-space-between align-center">
              <div>型号</div>
              <div>SCB13-1250kVA 1250kVA</div>
            </div>
          </Space>
        </div>
      </GridItem>
      <GridItem>
        <div class="py-16 px-24 h-100 bg-1">
          <div v-tooltip:ellipsis class="text-body-1-semibold mb-12">箱式变压器</div>
          <Space :size="8" class="text-body-2-regular" direction="column" fill>
            <div class="flex justify-space-between align-center">
              <div>型号型号型号型号型号</div>
              <div>SCB13-1250kVA</div>
            </div>
            <div class="flex justify-space-between align-center">
              <div>型号</div>
              <div>SCB13-1250kVA 1250kVA</div>
            </div>
            <div class="flex justify-space-between align-center">
              <div>型号</div>
              <div>SCB13-1250kVA 1250kVA</div>
            </div>
          </Space>
        </div>
      </GridItem>
      <GridItem>
        <div class="py-16 px-24 h-100 bg-1">
          <div v-tooltip:ellipsis class="text-body-1-semibold mb-12">箱式变压器</div>
          <Space :size="8" class="text-body-2-regular" direction="column" fill>
            <div class="flex justify-space-between align-center">
              <div>型号型号型号型号型号</div>
              <div>SCB13-1250kVA</div>
            </div>
            <div class="flex justify-space-between align-center">
              <div>型号</div>
              <div>SCB13-1250kVA 1250kVA</div>
            </div>
            <div class="flex justify-space-between align-center">
              <div>型号</div>
              <div>SCB13-1250kVA 1250kVA</div>
            </div>
          </Space>
        </div>
      </GridItem>
    </Grid>
  </div>
</template>

<script lang="ts" setup>
import { Space, Grid, GridItem } from '@cedar/ui'
</script>

<style lang="scss" scoped></style>
