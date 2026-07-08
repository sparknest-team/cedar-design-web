<template>
  <c-space direction="column">
    <c-input-number :style="{ width: '320px' }" clearable placeholder="请输入">
      <template #prefix> +86</template>
      <template #suffix><span>RMB</span></template>
    </c-input-number>
    <c-input-number :style="{ width: '320px' }" clearable mode="button" placeholder="请输入">
      <template #prefix>
        <c-icon-refresh />
      </template>
      <template #suffix><span>RMB</span></template>
    </c-input-number>

    <c-input-number :style="{ width: '320px' }" clearable placeholder="请输入" control-type="split">
      <template #prefix> +86</template>
      <template #suffix><span>RMB</span></template>
    </c-input-number>
    <c-input-number :style="{ width: '320px' }" clearable mode="button" placeholder="请输入" control-type="split">
      <template #prefix>
        <c-icon-refresh />
      </template>
      <template #suffix><span>RMB</span></template>
    </c-input-number>
  </c-space>
</template>
