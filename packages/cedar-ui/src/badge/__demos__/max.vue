<template>
  <c-space :size="40">
    <c-badge :max="10" :content="0">
      <c-avatar shape="square">
        <span>
          <c-icon-user />
        </span>
      </c-avatar>
    </c-badge>
    <c-badge :max="10" :content="100">
      <c-avatar shape="square">
        <span>
          <c-icon-user />
        </span>
      </c-avatar>
    </c-badge>
    <c-badge :content="100">
      <c-avatar shape="square">
        <span>
          <c-icon-user />
        </span>
      </c-avatar>
    </c-badge>
    <c-badge :max="999" :content="1000">
      <c-avatar shape="square">
        <span>
          <c-icon-user />
        </span>
      </c-avatar>
    </c-badge>
  </c-space>
</template>
