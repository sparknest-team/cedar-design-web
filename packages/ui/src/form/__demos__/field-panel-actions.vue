<template>
  <c-space direction="column" :size="16">
    <c-date-picker
      default-value="2026-10-20 09:30:00"
      show-time
      :disable-confirm="false"
    />
    <c-date-picker
      default-value="2026-10-20 09:30:00"
      show-time
      :disable-confirm="false"
    >
      <template #actions="{ selectNow, nowDisabled, confirm, disabled }">
        <c-button variant="text" :disabled="nowDisabled" @click="selectNow"
          >此刻</c-button
        >
        <c-button :disabled="disabled" @click="confirm">完成</c-button>
      </template>
    </c-date-picker>
  </c-space>
</template>
