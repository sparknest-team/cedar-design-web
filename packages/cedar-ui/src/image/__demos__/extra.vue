<template>
  <c-image
    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
    title="A user’s avatar"
    description="Present by Cedar Design"
    width="260"
    style="margin-right: 67px; vertical-align: top"
    :preview-open="open1"
    @preview-open-change="
      () => {
        open1 = false
      }
    "
  >
    <template #extra>
      <div class="actions">
        <span
          class="action"
          @click="
            () => {
              open1 = true
            }
          "
          ><c-icon-eye
        /></span>
        <span class="action" @click="onDownLoad"><c-icon-download /></span>
        <c-tooltip content="A user’s avatar">
          <span class="action"><c-icon-info-circle /></span>
        </c-tooltip>
      </div>
    </template>
  </c-image>
  <c-image
    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
    title="A user’s avatar"
    description="Present by Cedar Design"
    width="260"
    footer-position="outer"
    :preview-open="open2"
    @preview-open-change="
      () => {
        open2 = false
      }
    "
  >
    <template #extra>
      <div class="actions actions-outer">
        <span
          class="action"
          @click="
            () => {
              open2 = true
            }
          "
          ><c-icon-eye
        /></span>
        <span class="action" @click="onDownLoad"><c-icon-download /></span>
        <c-tooltip content="A user’s avatar">
          <span class="action"><c-icon-info-circle /></span>
        </c-tooltip>
      </div>
    </template>
  </c-image>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const open1 = ref(false)
const open2 = ref(false)

const onDownLoad = () => {
  console.log('download')
}
</script>

<style scoped>
.actions {
  display: flex;
  align-items: center;
}
.action {
  padding: 5px 4px;
  font-size: 14px;
  margin-left: 12px;
  border-radius: 2px;
  line-height: 1;
  cursor: pointer;
}
.action:first-child {
  margin-left: 0;
}

.action:hover {
  background: rgba(0, 0, 0, 0.5);
}
.actions-outer {
  .action {
    &:hover {
      color: #ffffff;
    }
  }
}
</style>
