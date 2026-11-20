<script setup lang="ts">
import { reactive } from 'vue'

const headingLevels = [1, 2, 3, 4, 5, 6] as const
const model = reactive<{ size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; headingLevel: (typeof headingLevels)[number] }>({
  size: 'md',
  headingLevel: 4,
})
</script>

<template>
  <c-space direction="column" align="stretch">
    <c-form :model="model" layout="vertical" edit-mode="direct">
      <c-form-item field="size" label="分区尺寸">
        <c-radio-group v-model="model.size" aria-label="分区尺寸">
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
    </c-form>
    <output>渲染标签 <code>&lt;h{{ model.headingLevel }}&gt;</code></output>

    <c-section :size="model.size" variant="outline" show-marker :heading-level="model.headingLevel" title="成员权限">
      <div class="section-size-content">管理员可邀请成员并修改项目设置。</div>
    </c-section>
  </c-space>
</template>

<style scoped>
.section-size-content {
  border: 1px dashed currentColor;
  padding: 8px;
}
</style>
