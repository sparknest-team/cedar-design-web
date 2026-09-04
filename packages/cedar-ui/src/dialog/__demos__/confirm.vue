<template>
  <c-space>
    <c-button @click="openConfirm">Confirm</c-button>
    <c-button status="danger" @click="openDangerConfirm">Delete</c-button>
    <c-button @click="componentOpen = true">Component Confirm</c-button>
  </c-space>

  <c-dialog
    v-model:open="componentOpen"
    type="warning"
    title="Confirm Action"
    message="Are you sure you want to continue?"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Dialog, Message } from "@cedarjs/ui";

const componentOpen = ref(false);

async function openConfirm() {
  const action = await Dialog.confirm({
    title: "Confirm Action",
    message: "Are you sure you want to continue?",
  });
  if (action) Message.info(`Dialog action: ${action}`);
}

async function openDangerConfirm() {
  const action = await Dialog.confirm({
    title: "Dangerous Action",
    message: "This action cannot be undone. Continue?",
    confirmButtonText: "Delete",
    confirmButtonProps: { variant: "default", status: "danger" },
  });
  if (action) Message.info(`Dialog action: ${action}`);
}
</script>
