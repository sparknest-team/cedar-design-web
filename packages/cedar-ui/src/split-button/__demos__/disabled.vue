<script setup lang="ts">
import { Message } from '@cedarjs/ui'

const publish = () => {
  Message.info('发布成功')
}
const handleSelect = (_value: unknown, option: { label?: unknown }) => {
  Message.info(String(option.label))
}
</script>

<template>
  <c-space wrap>
    <c-split-button
      disabled
      status="primary"
      :button-props="{ disabled: false }"
      :trigger-button-props="{ disabled: false }"
      @click="publish"
      @select="handleSelect"
    >
      整体禁用

      <template #content>
        <c-menu-option label="保存草稿" value="draft" />
        <c-menu-option label="保存并发布" value="publish" />
        <c-menu-option label="暂无权限" value="restricted" disabled />
      </template>
    </c-split-button>
    <c-split-button status="primary" :button-props="{ disabled: true }" @click="publish" @select="handleSelect">
      仅禁用主按钮

      <template #content>
        <c-menu-option label="保存草稿" value="draft" />
        <c-menu-option label="保存并发布" value="publish" />
        <c-menu-option label="暂无权限" value="restricted" disabled />
      </template>
    </c-split-button>
    <c-split-button
      status="primary"
      :trigger-button-props="{ disabled: true }"
      @click="publish"
      @select="handleSelect"
    >
      仅禁用菜单按钮

      <template #content>
        <c-menu-option label="保存草稿" value="draft" />
        <c-menu-option label="保存并发布" value="publish" />
        <c-menu-option label="暂无权限" value="restricted" disabled />
      </template>
    </c-split-button>
  </c-space>
</template>
