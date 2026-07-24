<template>
  <c-button @click="handleClick">Alert</c-button>
</template>

<script lang="ts">
export default {
  setup() {
    const handleClick = () => {
      Dialog.alert({
        title: 'Alert',
        message: 'This is an alert description.',
        type: 'info',
      })
    }

    return { handleClick }
  },
}
</script>
