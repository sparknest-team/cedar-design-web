<script setup>
import { computed, ref } from "vue";

const files = ref([]);
const hasUploading = computed(() =>
  files.value.some((file) => file.status === "uploading"),
);
const hasRetryable = computed(() =>
  files.value.some((file) => ["error", "canceled"].includes(file.status)),
);
let sequence = 0;

function read(file) {
  file.status = "uploading";
  file.percent = 40;
}

function addExample() {
  const file = new File(
    ["Local external upload demo."],
    `external-${++sequence}.txt`,
    { type: "text/plain" },
  );
  const item = {
    uid: `external-${sequence}`,
    name: file.name,
    size: file.size,
    type: file.type,
    file,
    status: "ready",
    percent: 0,
  };
  read(item);
  files.value = [...files.value, item];
}

function complete() {
  files.value = files.value.map((file) =>
    file.status === "uploading"
      ? { ...file, status: "success", percent: 100 }
      : file,
  );
}

function retry() {
  files.value = files.value.map((file) =>
    ["error", "canceled"].includes(file.status)
      ? { ...file, status: "uploading", percent: 40 }
      : file,
  );
}
</script>

<template>
  <div>
    <p>
      The application manages progress and results. Add a local sample without
      opening the picker or sending requests.
    </p>
    <c-space wrap>
      <c-button @click="addExample">Add an external upload</c-button>
      <c-button :disabled="!hasUploading" @click="complete"
        >Complete externally</c-button
      >
      <c-button :disabled="!hasRetryable" @click="retry"
        >Retry externally</c-button
      >
    </c-space>
    <c-upload
      v-model="files"
      edit-mode="direct"
      :show-retry-button="false"
      @read="read"
    />
    <p>
      File states:{{
        files
          .map((file) => `${file.name}: ${file.status} (${file.percent}%)`)
          .join("；") || "Empty"
      }}
    </p>
  </div>
</template>
