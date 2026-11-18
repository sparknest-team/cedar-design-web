<template>
  <section
    :id="sectionId"
    :class="
      classes(n(), n(`--${variant}`), [!!form, n('--form')], [
        showEndDivider && variant !== 'card',
        n('--end-divider'),
      ])
    "
    :aria-labelledby="(title || $slots.title) ? titleId : undefined"
    :aria-describedby="(description || $slots.description) ? descriptionId : undefined"
  >
    <div :class="n('surface')">
      <div
        v-if="title || $slots.title || description || $slots.description || $slots.extra"
        :class="n('header')"
      >
        <div :class="n('heading')">
          <div v-if="title || $slots.title" :class="n('label')">
            <span v-if="showMarker" :class="n('marker')" aria-hidden="true" />
            <component :is="`h${headingLevel}`" :id="titleId" :class="n('title')">
              <slot name="title">{{ title }}</slot>
            </component>
          </div>
          <span
            v-if="variant === 'line'"
            :class="n('line')"
            aria-hidden="true"
          />
          <span v-else :class="n('spacer')" aria-hidden="true" />
          <div v-if="$slots.extra" :class="n('extra')">
            <slot name="extra" />
          </div>
        </div>
        <div
          v-if="description || $slots.description"
          :id="descriptionId"
          :class="n('description')"
        >
          <slot name="description">{{ description }}</slot>
        </div>
      </div>
      <div :class="classes(n('content'), [inline, n('content--inline')])">
        <slot />
      </div>
      <div
        v-if="showEndDivider && variant !== 'card'"
        :class="n('end-divider')"
        aria-hidden="true"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { createNamespace } from '../_utils/global-config'
import { useId } from '../_utils/vue-compat'
import { formInjectionKey } from '../form/context'
import { sectionProps, type SectionSlots } from './props'

defineOptions({ name: createNamespace('section').name })
defineSlots<SectionSlots>()
const props = defineProps(sectionProps)
const { n, classes } = createNamespace('section')
const form = inject(formInjectionKey, undefined)
const variant = computed(() => props.variant ?? (form ? 'line' : 'plain'))
const headingLevel = computed(() => props.headingLevel ?? (form ? 3 : 2))
const showMarker = computed(() => props.showMarker ?? !!form)
const inline = computed(() => form?.layout === 'inline')
const uniqueId = useId()
const sectionId = computed(() => props.id ?? `c-section-${uniqueId}`)
const titleId = computed(() => `${sectionId.value}-title`)
const descriptionId = computed(() => `${sectionId.value}-description`)
</script>
