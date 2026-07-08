<template>
  <c-upload action="/">
    <template #upload-button>
      <div
        style="
          background-color: var(--fill-0);
          color: var(--color-text-1);
          border: 1px dashed var(--color-fill-4);
          height: 158px;
          width: 380px;
          border-radius: 2;
          line-height: 158px;
          text-align: center;
        "
      >
        <div>
          Drag the file here or
          <span style="color: #3370ff"> Click to upload</span>
        </div>
      </div>
    </template>
  </c-upload>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  })
</script>
