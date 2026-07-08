<template>
  <div>
    <c-upload multiple action="/" :limit="3" />
  </div>
  <br />
  <div>
    <c-upload multiple action="/" :limit="1" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  })
</script>
