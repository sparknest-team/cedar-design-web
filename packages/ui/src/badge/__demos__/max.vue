<template>
  <c-space wrap :size="24"
    ><c-badge :content="0"
      ><span style="display: inline-block; padding: 12px; border: 1px solid currentColor; border-radius: 4px"
        >Inbox</span
      ></c-badge
    ><c-badge :content="0" show-zero
      ><span style="display: inline-block; padding: 12px; border: 1px solid currentColor; border-radius: 4px"
        >Inbox</span
      ></c-badge
    ><c-badge :content="100" :max="10"
      ><span style="display: inline-block; padding: 12px; border: 1px solid currentColor; border-radius: 4px"
        >Inbox</span
      ></c-badge
    ><c-badge :content="100"
      ><span style="display: inline-block; padding: 12px; border: 1px solid currentColor; border-radius: 4px"
        >Inbox</span
      ></c-badge
    ><c-badge :content="1000" :max="999"
      ><span style="display: inline-block; padding: 12px; border: 1px solid currentColor; border-radius: 4px"
        >Inbox</span
      ></c-badge
    ></c-space
  >
</template>
