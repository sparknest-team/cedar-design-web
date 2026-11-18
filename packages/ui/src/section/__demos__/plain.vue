<template>
  <c-section :title="copy.permissions" :description="copy.scope">
    <dl>
      <dt>{{ copy.admin }}</dt>
      <dd>{{ copy.manage }}</dd>
      <dt>{{ copy.member }}</dt>
      <dd>{{ copy.update }}</dd>
    </dl>
  </c-section>
</template>

<script setup lang="ts">
import { useDemoLocale } from '../../__demos__/locale'

const copy = useDemoLocale('section')
</script>
