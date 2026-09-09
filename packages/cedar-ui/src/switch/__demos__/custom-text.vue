<template>
  <c-space wrap
    ><c-switch checked-text="ON" unchecked-text="OFF" aria-label="Text props" /><c-switch
      variant="round"
      aria-label="Text slots"
      ><template #checked>ON</template><template #unchecked>OFF</template></c-switch
    ></c-space
  >
</template>
