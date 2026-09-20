<template>
  <c-space direction="column" size="lg" fill>
    <c-textarea placeholder="默认描边外观" />
    <c-textarea variant="filled" placeholder="填充外观" />
    <c-textarea variant="standard" placeholder="标准外观" />
    <c-textarea default-value="Readonly value" readonly />
    <c-textarea placeholder="Disabled status" disabled />
    <c-textarea placeholder="Error status" error />
  </c-space>
</template>
