<template>
  <c-space wrap :size="24"
    ><c-badge dot :content="1"
      ><span
        style="
          display: inline-block;
          padding: 12px;
          border: 1px solid currentColor;
          border-radius: 4px;
        "
        >Inbox</span
      ></c-badge
    ><c-badge dot :content="1" :offset-x="6" :offset-y="-2"
      ><c-link href="#" @click.prevent>Messages</c-link></c-badge
    ></c-space
  >
</template>
