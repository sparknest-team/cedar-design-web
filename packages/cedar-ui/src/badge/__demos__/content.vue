<template>
  <c-space :size="40">
    <c-badge content="NEW">
      <c-avatar shape="square">
        <span>
          <c-icon-user />
        </span>
      </c-avatar>
    </c-badge>
    <c-badge content="HOT">
      <c-avatar shape="square">
        <span>
          <c-icon-user />
        </span>
      </c-avatar>
    </c-badge>
    <c-badge content="NEW" mode="inline">
      <c-avatar shape="square">
        <span>
          <c-icon-user />
        </span>
      </c-avatar>
    </c-badge>
    <c-badge content="HOT" mode="inline" inline-position="end">
      <c-avatar shape="square">
        <span>
          <c-icon-user />
        </span>
      </c-avatar>
    </c-badge>
  </c-space>
</template>
