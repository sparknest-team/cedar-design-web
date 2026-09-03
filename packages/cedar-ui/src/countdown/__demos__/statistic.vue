<template>
  <c-space size="xl" wrap>
    <c-statistic title="Countdown">
      <c-countdown :time="2 * 60 * 60 * 1000" />
    </c-statistic>
    <c-statistic title="Campaign">
      <c-countdown :time="4 * 24 * 60 * 60 * 1000" format="DD 天 HH 时 mm 分 ss 秒" />
    </c-statistic>
  </c-space>
</template>
