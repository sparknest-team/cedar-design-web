<template>
  <c-space direction="column">
    <c-space>
      <c-badge dot :content="1" size="xs" type="inline" description="描述文本"></c-badge>
      <c-badge dot :content="1" size="sm" type="inline" description="描述文本"></c-badge>
      <c-badge dot :content="1" size="md" type="inline" description="描述文本"></c-badge>
      <c-badge dot :content="1" size="lg" type="inline" description="描述文本"></c-badge>
      <c-badge dot :content="1" size="xl" type="inline" description="描述文本"></c-badge>
    </c-space>
    <br />
    <c-space>
      <c-badge :content="1" size="xs" type="inline" description="描述文本"></c-badge>
      <c-badge :content="1" size="sm" type="inline" description="描述文本"></c-badge>
      <c-badge :content="1" size="md" type="inline" description="描述文本"></c-badge>
      <c-badge :content="1" size="lg" type="inline" description="描述文本"></c-badge>
      <c-badge :content="1" size="xl" type="inline" description="描述文本"></c-badge>
    </c-space>
    <br />
    <c-space size="xl">
      <c-badge dot :content="1" size="xs">
        <c-avatar shape="square">
          <span>
            <c-icon-user />
          </span>
        </c-avatar>
      </c-badge>
      <c-badge dot :content="1" size="sm">
        <c-avatar shape="square">
          <span>
            <c-icon-user />
          </span>
        </c-avatar>
      </c-badge>
      <c-badge dot :content="1" size="md">
        <c-avatar shape="square">
          <span>
            <c-icon-user />
          </span>
        </c-avatar>
      </c-badge>
      <c-badge dot :max="999" :content="1000" size="lg">
        <c-avatar shape="square">
          <span>
            <c-icon-user />
          </span>
        </c-avatar>
      </c-badge>
      <c-badge dot :max="999" :content="1000" size="xl">
        <c-avatar shape="square">
          <span>
            <c-icon-user />
          </span>
        </c-avatar>
      </c-badge>
    </c-space>
    <br />
    <c-space :size="40">
      <c-badge :content="1" size="xs">
        <c-avatar shape="square">
          <span>
            <c-icon-user />
          </span>
        </c-avatar>
      </c-badge>
      <c-badge :content="1" size="sm">
        <c-avatar shape="square">
          <span>
            <c-icon-user />
          </span>
        </c-avatar>
      </c-badge>
      <c-badge :content="1" size="md">
        <c-avatar shape="square">
          <span>
            <c-icon-user />
          </span>
        </c-avatar>
      </c-badge>
      <c-badge :max="999" :content="1" size="lg">
        <c-avatar shape="square">
          <span>
            <c-icon-user />
          </span>
        </c-avatar>
      </c-badge>
      <c-badge :max="999" :content="1" size="xl">
        <c-avatar shape="square">
          <span>
            <c-icon-user />
          </span>
        </c-avatar>
      </c-badge>
    </c-space>
    <br />
    <c-space size="xl">
      <c-badge :content="1" size="xs"> 描述文案 </c-badge>
      <c-badge :content="1" size="sm"> 描述文案 </c-badge>
      <c-badge :content="1" size="md"> 描述文案 </c-badge>
      <c-badge :max="999" :content="1" size="lg"> 描述文案 </c-badge>
      <c-badge :max="999" :content="1" size="xl"> 描述文案 </c-badge>
    </c-space>
  </c-space>
</template>
