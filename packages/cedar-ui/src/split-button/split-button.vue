<template>
  <ButtonGroup
    :status="status"
    :size="size"
    :variant="variant"
    :color="color"
    :text-color="textColor"
    :disabled="disabled"
    :elevation="elevation"
  >
    <Button v-bind="buttonProps" :auto-loading="autoLoading" @click="handleClick">
      <slot />
    </Button>

    <Menu
      v-model:open="computedOpen"
      :disabled="disabled"
      :trigger="trigger"
      :placement="placement"
      :popup-container="popupContainer"
      :popup-max-height="popupMaxHeight"
      :hide-on-select="hideOnSelect"
      @select="handleSelect"
    >
      <Button
        v-bind="triggerButtonProps"
        icon-container
        :aria-expanded="computedOpen"
        aria-haspopup="menu"
      >
        <template #icon>
          <slot name="icon" :open="computedOpen">
            <IconMore />
          </slot>
        </template>
      </Button>

      <template #content>
        <slot name="content" />
      </template>
    </Menu>
  </ButtonGroup>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { IconMore } from '@cedarjs/icons-vue/icon-more'
import Button, { ButtonGroup } from '../button'
import Menu from '../menu'
import { createNamespace } from '../_utils/global-config'
import { splitButtonProps } from './props'

defineOptions({
  name: createNamespace('split-button').name,
})

const props = defineProps(splitButtonProps)
const emit = defineEmits(['update:open', 'openChange', 'click', 'select'])

const uncontrolledOpen = ref(props.defaultOpen)
const computedOpen = computed({
  get: () => props.open ?? uncontrolledOpen.value,
  set: (open: boolean) => {
    uncontrolledOpen.value = open
    emit('update:open', open)
    emit('openChange', open)
  },
})

const handleClick = (event: Event) => emit('click', event)
const handleSelect = (
  value: unknown,
  option: Record<string, unknown>,
  event: Event,
) => emit('select', value, option, event)
</script>
