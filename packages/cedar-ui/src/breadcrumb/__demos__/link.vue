<script setup lang="ts">
import { Message } from '@cedarjs/ui'
</script>

<template>
  <c-breadcrumb>
    <c-breadcrumb-item href="#/home" @click.prevent="Message.info('Home')">Home</c-breadcrumb-item>
    <c-breadcrumb-item href="#/channel" @click.prevent="Message.info('Channel')">Channel</c-breadcrumb-item>
    <c-breadcrumb-item>News</c-breadcrumb-item>
  </c-breadcrumb>
</template>
