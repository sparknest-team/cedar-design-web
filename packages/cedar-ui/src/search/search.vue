<template>
  <div :class="[classes(n(), n(`--${shape}`)), attrs.class]" :style="[{ background }, attrs.style as StyleValue]">
    <SearchInputGroup :size="mergedSize" :disabled="mergedDisabled" :readonly="mergedReadonly" :variant="variant">
      <div v-if="!fields.length && (label || slots.label)" :class="n('label')"><slot name="label">{{ label }}</slot></div>
      <SearchSelect v-if="fields.length" :model-value="computedField" :options="fields"
        :style="selectStyle" :class="n('select')" :disabled="searchDisabled" @change="handleFieldChange" />
      <SearchDropdown :open="!historyPopup && historyMenuVisible" trigger="focus"
        placement="bottom-start" auto-fit-popup-width :popup-container="inputRef?.$el"
        @update:open="handleHistoryMenuVisibleChange" @select="handleHistoryMenuSelect">
        <template #content>
          <MenuOption v-for="(item, index) in recentSearches" :key="index" :value="item" :label="item" />
        </template>
        <SearchInput
          v-bind="fallthroughInputAttrs" ref="inputRef" :model-value="computedValue"
          :model-modifiers="modelModifiers"
        :input-attrs="inputAttrs" :error="error" :type="type" :aria-label="ariaLabel"
          :max-length="maxLength" :autofocus="autofocus" :enterkeyhint="enterkeyhint || 'search'"
          :text-color="textColor" :focus-color="focusColor" :blur-color="blurColor"
          :style="{ background: inputBackground }" :placeholder="searchPlaceholder"
          :size="mergedSize" :disabled="mergedDisabled" :readonly="mergedReadonly"
          :variant="variant" :clearable="clearable"
          @update:model-value="updateValue" @input="handleInput" @change="handleChange"
          @clear="handleClear" @press-enter="handleSearch" @focus="handleFocus" @blur="handleBlur">
          <template v-if="slots.prefix" #prefix><slot name="prefix" /></template>
          <template #suffix>
            <button v-if="!searchButton" type="button" :class="n('icon-button')" :disabled="searchDisabled"
              :aria-label="buttonText || searchText" @click="handleSearch">
              <IconLoading v-if="loading" />
              <IconSearch v-else-if="searchIcon === 'search'" />
              <SearchIcon v-else :name="searchIcon" />
            </button>
            <slot name="suffix" />
          </template>
          <template v-if="slots['clear-icon']" #clear-icon="scope"><slot name="clear-icon" v-bind="scope" /></template>
        </SearchInput>
      </SearchDropdown>
      <SearchButton v-if="effectiveShowAction" :status="searchButton ? 'primary' : undefined" :variant="searchButton ? undefined : 'text'" v-bind="buttonProps"
        :class="n(searchButton ? 'btn' : 'action')" :disabled="searchDisabled" :size="mergedSize"
        :loading="effectiveActionType === 'search' && loading"
        :aria-label="effectiveActionText || (effectiveActionType === 'search' ? searchText : cancelText)"
        @click="handleAction">
        <template v-if="searchButton && (slots['button-icon'] || !buttonText)" #icon>
          <slot name="button-icon"><IconSearch v-if="searchIcon === 'search'" /><SearchIcon v-else :name="searchIcon" /></slot>
        </template>
        <slot v-if="searchButton" name="button-default">{{ buttonText }}</slot>
        <slot v-else name="action">{{ effectiveActionText }}</slot>
      </SearchButton>
    </SearchInputGroup>
    <HistoryPresentation v-if="historyPopup" :open="historyPopupVisible"
      @update:open="handlePopupVisibleChange" @closed="handleHistoryPopupClosed">
      <HistoryContent :settings="props" :state="state">
        <template v-if="slots.prefix" #prefix><slot name="prefix" /></template>
        <template v-if="slots.suffix" #suffix><slot name="suffix" /></template>
        <template v-if="slots.label" #label><slot name="label" /></template>
        <template v-if="slots['clear-icon']" #clear-icon="scope"><slot name="clear-icon" v-bind="scope" /></template>
      </HistoryContent>
    </HistoryPresentation>
  </div>
</template>
<script setup lang="ts">
import { computed, reactive, ref, useAttrs } from 'vue'
import type { StyleValue } from 'vue'
import { IconSearch } from '@cedar-design/icons-vue/icon-search'
import { IconLoading } from '@cedar-design/icons-vue/icon-loading'
import SearchButton from '../button'
import SearchInput from '../input/input.vue'
import SearchInputGroup from '../input/InputGroup.vue'
import SearchSelect from './FieldSelect.vue'
import SearchIcon from '../icon'
import SearchDropdown, { MenuOption } from '../menu'
import { createNamespace } from '../_utils/global-config'
import { searchProps } from './props'
import { searchEmits, useSearchControl } from './use-search-control'
import type { SearchExpose, SearchSlots } from './types'
import HistoryPresentation from './history-presentation.vue'
import HistoryContent from './HistoryContent.vue'

defineOptions({ name: createNamespace('search').name, inheritAttrs: false })
const props = defineProps(searchProps)
const emit = defineEmits(searchEmits)
const slots = defineSlots<SearchSlots>()
const attrs = useAttrs()
const { n, classes } = createNamespace('search')
const inputRef = ref<InstanceType<typeof SearchInput>>()
const control = useSearchControl(props, emit, inputRef)
const state = reactive(control)
const {
  searchText, cancelText,
  computedField, computedValue, searchPlaceholder, searchDisabled, mergedDisabled, mergedReadonly, mergedSize,
  effectiveShowAction, effectiveActionType, effectiveActionText, historyMenuVisible, historyPopupVisible,
  updateValue, handleInput, handleChange, handleClear, handleSearch, handleFieldChange, handleFocus, handleBlur,
  handleAction, handleHistoryMenuVisibleChange, handleHistoryMenuSelect, handlePopupVisibleChange, handleHistoryPopupClosed,
  focus, blur,
} = control
const fallthroughInputAttrs = computed(() => {
  const { class: _class, style: _style, ...rest } = attrs
  return rest
})
defineExpose<SearchExpose>({ focus, blur })
</script>
