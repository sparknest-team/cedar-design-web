<template>
  <c-space>
    <c-button @click="openBasic">Basic</c-button>
    <c-button @click="openDialog">Open</c-button>
    <c-button @click="openAndUpdate">Open and Update</c-button>
    <c-button @click="awaitAction">Await Action</c-button>
    <c-button @click="hideButtons">Hide Footer Buttons</c-button>
  </c-space>
</template>

<script setup lang="ts">
import { Dialog, Message } from "@cedarjs/ui";

function openBasic() {
  Dialog.open("This dialog was opened from a string message.");
}

function openDialog() {
  Dialog.open({
    title: "Global Method",
    message: "This dialog was opened programmatically.",
  });
}

function openAndUpdate() {
  const instance = Dialog.open({
    title: "Submitting",
    message: "Processing the request…",
  });
  window.setTimeout(
    () =>
      instance.update({
        title: "Completed",
        message: "The request succeeded.",
      }),
    800,
  );
}

async function awaitAction() {
  const action = await Dialog.open("Choose an action to close this dialog.");
  if (action) Message.info(`Dialog action: ${action}`);
}

function hideButtons() {
  Dialog.open({
    title: "No Footer Buttons",
    message: "Click the overlay or press Esc to dismiss this dialog.",
    confirmButton: false,
    cancelButton: false,
  });
}
</script>
