<template>
  <c-space>
    <c-button @click="handleNotification"> Open Notification </c-button>
  </c-space>
</template>
<script lang="ts" setup>
import { Notification } from '@cedar-design/ui'

const handleNotification = () => {
  Notification.info({
    title: 'Notification',
    content: 'This is a notification!',
  })
}
</script>
