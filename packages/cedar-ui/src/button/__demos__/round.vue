<template>
  <c-space wrap>
    <!-- 无需导入、注册组件 -->
    <c-button round><c-icon-plus /></c-button>
    <c-button status="primary" round><c-icon-reply /></c-button>
    <c-button status="info" round><c-icon-info-circle /></c-button>
    <c-button status="success" round><c-icon-refresh /></c-button>
    <c-button status="warning" round><c-icon-delete /></c-button>
    <c-button status="danger" round><c-icon-cloud-download /></c-button>
  </c-space>
</template>

<script setup lang="ts">
import {
  IconPlus,
  IconInfoCircle,
  IconRefresh,
  IconDelete,
  IconCloudDownload,
  IconEdit,
  IconSearch,
  IconCopy,
  IconSync,
  IconReply,
} from '@cedar/ui'
</script>
