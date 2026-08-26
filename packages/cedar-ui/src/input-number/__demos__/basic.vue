<template>
  <c-space direction="column">
    <c-input-number
      :style="{ width: '320px' }"
      placeholder="error"
      clearable
      error
    ></c-input-number>
    <c-input-number
      :style="{ width: '320px' }"
      placeholder="error disabled"
      clearable
      error
      disabled
    ></c-input-number>
    <c-input-number
      :style="{ width: '320px' }"
      placeholder="请输入"
      clearable
    ></c-input-number>
    <c-input-number
      :style="{ width: '320px' }"
      :min="2"
      :max="10"
      placeholder="请输入"
      clearable
    ></c-input-number>
    <c-input-number
      :style="{ width: '320px' }"
      :min="2"
      :max="10"
      clearable
      placeholder="disabled"
      disabled
    ></c-input-number>
    <c-input-number
      :style="{ width: '320px' }"
      placeholder="error"
      clearable
      error
      mode="button"
    ></c-input-number>
    <c-input-number
      :style="{ width: '320px' }"
      placeholder="error disabled"
      clearable
      error
      mode="button"
      disabled
    ></c-input-number>
    <c-input-number
      :style="{ width: '320px' }"
      placeholder="请输入"
      clearable
      mode="button"
    ></c-input-number>
    <c-input-number
      :style="{ width: '320px' }"
      :min="2"
      :max="10"
      placeholder="请输入"
      clearable
      mode="button"
    ></c-input-number>
    <c-input-number
      :style="{ width: '320px' }"
      :min="2"
      :max="10"
      clearable
      placeholder="请输入"
      mode="button"
      disabled
    ></c-input-number>
  </c-space>
</template>

<script lang="ts"></script>
