<script setup lang="ts">
import { reactive } from 'vue'

const footerAlignments = ['start', 'center', 'end'] as const
const sectionVariants = ['heading-line', 'plain', 'tonal', 'outline'] as const
const headingLevels = [1, 2, 3, 4, 5, 6] as const
const model = reactive<{
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  headingLevel: (typeof headingLevels)[number]
  footerAlign: (typeof footerAlignments)[number]
  sectionVariant: (typeof sectionVariants)[number]
}>({
  size: 'md',
  headingLevel: 4,
  footerAlign: 'end',
  sectionVariant: 'heading-line',
})
</script>

<template>
  <c-space direction="column" align="stretch">
    <c-form :model="model" layout="vertical" edit-mode="direct">
      <c-form-item field="size" label="卡片尺寸">
        <c-radio-group v-model="model.size" aria-label="卡片尺寸">
          <c-radio value="xs">超紧凑 (xs)</c-radio>
          <c-radio value="sm">紧凑 (sm)</c-radio>
          <c-radio value="md">默认 (md)</c-radio>
          <c-radio value="lg">宽松 (lg)</c-radio>
          <c-radio value="xl">超宽松 (xl)</c-radio>
        </c-radio-group>
      </c-form-item>
      <c-form-item field="headingLevel" label="标题层级">
        <c-radio-group v-model="model.headingLevel" aria-label="标题层级">
          <c-radio v-for="level in headingLevels" :key="level" :value="level">h{{ level }}</c-radio>
        </c-radio-group>
      </c-form-item>
      <c-form-item field="footerAlign" label="页脚对齐">
        <c-radio-group v-model="model.footerAlign" aria-label="页脚对齐">
          <c-radio v-for="value in footerAlignments" :key="value" :value="value">{{ value }}</c-radio>
        </c-radio-group>
      </c-form-item>
      <c-form-item field="sectionVariant" label="分区变体">
        <c-radio-group v-model="model.sectionVariant" aria-label="分区变体">
          <c-radio v-for="value in sectionVariants" :key="value" :value="value">{{ value }}</c-radio>
        </c-radio-group>
      </c-form-item>
    </c-form>
    <output>渲染标签 <code>&lt;h{{ model.headingLevel }}&gt;</code></output>

    <c-card
      :size="model.size"
      :heading-level="model.headingLevel"
      :footer-align="model.footerAlign"
      title="项目概览"
      description="项目设置适用于整个团队。"
      top-divider
      bottom-divider
    >
      <c-section :size="model.size" :heading-level="model.headingLevel" :variant="model.sectionVariant" title="成员权限" description="权限按成员角色分组。">
        管理员可邀请成员。
      </c-section>
      <template #footer>最近更新于今天</template>
    </c-card>
  </c-space>
</template>
