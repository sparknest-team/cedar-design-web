<template>
  <div>
    <p>实线 / solid</p>
    <c-divider />
    <p>虚线 / dashed</p>
    <c-divider type="dashed" />
    <p>点线 / dotted</p>
    <c-divider type="dotted" />
    <p>双线 / double · 3px</p>
    <c-divider type="double" :thickness="3" />
  </div>
</template>
