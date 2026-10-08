<template>
  <p>12 小时显示；禁用回调始终使用 0–23 小时。下午 1 点禁用，下午 2 点的第 30 分钟禁用。</p>
  <c-time-picker
    default-value="02:20:00 pm"
    format="hh:mm:ss a"
    use12-hours
    :disabled-hours="() => [0, 13]"
    :disabled-minutes="(hour) => hour === 14 ? [30] : []"
    :disabled-seconds="(hour, minute) => hour === 14 && minute === 20 ? [15, 30, 45] : []"
  />
</template>
