<template>
  <FieldPresentation
    v-if="readPretty"
    edit-mode="direct"
    :read-pretty="true"
    :loading="loading"
    :empty="emptyPolicy.isEmpty(computedValue)"
    :empty-text="emptyPolicy.emptyText.value"
    :text="computedValue ?? ''"
  >
    <template v-if="$slots.read" #read
      ><slot name="read" :value="computedValue" :text="computedValue ?? ''"
    /></template>
  </FieldPresentation>
  <div
    v-else
    :aria-busy="loading || undefined"
    :class="[classes(n(), n(`--${shape}`)), attrs.class]"
    :style="[{ background }, attrs.style as StyleValue]"
  >
    <SearchInputGroup :size="mergedSize" :disabled="mergedDisabled" :readonly="mergedReadonly" :variant="variant">
      <label
        v-if="!fields.length && (label || slots.label)"
        :for="getReferenceId()"
        :aria-hidden="popupActive || undefined"
        :class="n('label')"
      >
        <slot name="label">{{ label }}</slot>
      </label>
      <SearchSelect
        v-if="fields.length"
        :model-value="computedField"
        :options="fields"
        :style="selectStyle"
        :class="n('select')"
        :disabled="searchDisabled"
        @change="handleFieldChange"
      />
      <SearchDropdown
        :open="editMode === 'direct' && historyMenuVisible"
        trigger="focus"
        placement="bottom-start"
        auto-fit-popup-width
        :popup-container="inputRef?.$el"
        @update:open="handleHistoryMenuVisibleChange"
        @select="handleHistoryMenuSelect"
      >
        <template #content>
          <MenuOption v-for="(item, index) in recentSearches" :key="index" :value="item" :label="item" />
        </template>
        <SearchInput
          :loading="loading && loadingMode === 'line'"
          :loading-mode="loadingMode"
          v-bind="fallthroughInputAttrs"
          ref="inputRef"
          :model-value="computedValue"
          :model-modifiers="modelModifiers"
          :input-attrs="getReferenceAttrs()"
          :error="error"
          :type="type"
          :aria-label="getLabel()"
          :max-length="maxLength"
          :autofocus="autofocus"
          :enterkeyhint="enterkeyhint || 'search'"
          :text-color="textColor"
          :focus-color="focusColor"
          :blur-color="blurColor"
          :style="{ background: inputBackground }"
          :placeholder="searchPlaceholder"
          :size="mergedSize"
          :disabled="mergedDisabled"
          :readonly="mergedReadonly || popupActive"
          :variant="variant"
          :clearable="clearable"
          :empty-value="emptyValue"
          :empty-values="emptyPolicy.emptyValues.value"
          @update:model-value="updateValue"
          @input="handleInput"
          @change="handleChange"
          @clear="handleClear"
          @press-enter="handleSearch"
          @focus="handleFocus"
          @blur="handleBlur"
        >
          <template v-if="slots.prefix" #prefix><slot name="prefix" /></template>
          <template #suffix>
            <button
              v-if="!searchButton"
              type="button"
              :class="n('icon-button')"
              :disabled="searchDisabled"
              :aria-label="buttonText || searchText"
              @click="handleSearch"
            >
              <IconLoading v-if="loading && loadingMode !== 'line'" />
              <IconSearch v-else-if="searchIcon === 'search'" />
              <SearchIcon v-else :name="searchIcon" />
            </button>
            <slot name="suffix" />
          </template>
          <template v-if="slots['clear-icon']" #clear-icon="scope"><slot name="clear-icon" v-bind="scope" /></template>
        </SearchInput>
      </SearchDropdown>
      <SearchButton
        v-if="effectiveShowAction"
        :status="searchButton ? 'primary' : undefined"
        :variant="searchButton ? undefined : 'text'"
        v-bind="buttonProps"
        :class="n(searchButton ? 'btn' : 'action')"
        :disabled="searchDisabled"
        :size="mergedSize"
        :loading="effectiveActionType === 'search' && loading && loadingMode !== 'line'"
        :aria-label="effectiveActionText || (effectiveActionType === 'search' ? searchText : cancelText)"
        @click="handleAction"
      >
        <template v-if="searchButton && (slots['button-icon'] || !buttonText)" #icon>
          <slot name="button-icon"
            ><IconSearch v-if="searchIcon === 'search'" /><SearchIcon v-else :name="searchIcon"
          /></slot>
        </template>
        <slot v-if="searchButton" name="button-default">{{ buttonText }}</slot>
        <slot v-else name="action">{{ effectiveActionText }}</slot>
      </SearchButton>
    </SearchInputGroup>
    <HistoryPresentation
      v-if="editMode === 'popup'"
      :open="historyPopupVisible"
      @update:open="handlePopupVisibleChange"
      @closed="handleHistoryPopupClosed"
    >
      <HistoryContent :settings="props" :state="state" :input-attrs="getPopupAttrs()">
        <template v-if="slots.prefix" #prefix><slot name="prefix" /></template>
        <template v-if="slots.suffix" #suffix><slot name="suffix" /></template>
        <template v-if="slots.label" #label><slot name="label" /></template>
        <template v-if="slots['clear-icon']" #clear-icon="scope"><slot name="clear-icon" v-bind="scope" /></template>
      </HistoryContent>
    </HistoryPresentation>
  </div>
</template>
<script setup lang="ts">
import { computed, reactive, ref, useAttrs, watch } from 'vue'
import type { StyleValue } from 'vue'
import { IconLoading } from '@cedar-design/icons-vue/icon-loading'
import { IconSearch } from '@cedar-design/icons-vue/icon-search'
import { useFieldPresentation } from '../_components/field-presentation/context'
import FieldPresentation from '../_components/field-presentation/FieldPresentation.vue'
import { useEmptyValues } from '../_utils/empty-value'
import { createNamespace } from '../_utils/global-config'
import SearchButton from '../button/base'
import SearchIcon from '../icon'
import SearchInput from '../input/input.vue'
import SearchInputGroup from '../input/InputGroup.vue'
import SearchDropdown, { MenuOption } from '../menu'
import SearchSelect from './FieldSelect.vue'
import HistoryPresentation from './history-presentation.vue'
import HistoryContent from './HistoryContent.vue'
import { searchProps } from './props'
import type { SearchExpose, SearchSlots } from './types'
import { searchEmits, useSearchControl } from './use-search-control'
import { useSearchInput } from './use-search-input'

defineOptions({ name: createNamespace('search').name, inheritAttrs: false })
const props = defineProps(searchProps)
const emit = defineEmits(searchEmits)
const slots = defineSlots<SearchSlots>()
const attrs = useAttrs()
const { n, classes } = createNamespace('search')
const inputRef = ref<InstanceType<typeof SearchInput>>()
const presentationState = useFieldPresentation(
  () => undefined,
  () => props.readPretty,
)
const readPretty = presentationState.readPretty
const control = useSearchControl(props, emit, inputRef, () => readPretty.value)
const editMode = control.editMode
const emptyPolicy = useEmptyValues(props, undefined, Boolean(presentationState.item))
const state = reactive(control)
const popupActive = computed(() => state.historyPopupVisible)
const { getReferenceId, getLabel, getReferenceAttrs, getPopupAttrs } = useSearchInput(
  props,
  () => popupActive.value,
  () => attrs,
)
watch(
  readPretty,
  (reading) => {
    if (reading) control.resetHistory()
  },
  { flush: 'sync' },
)

const {
  searchText,
  cancelText,
  computedField,
  computedValue,
  searchPlaceholder,
  searchDisabled,
  mergedDisabled,
  mergedReadonly,
  mergedSize,
  effectiveShowAction,
  effectiveActionType,
  effectiveActionText,
  historyMenuVisible,
  historyPopupVisible,
  updateValue,
  handleInput,
  handleChange,
  handleClear,
  handleSearch,
  handleFieldChange,
  handleFocus,
  handleBlur,
  handleAction,
  handleHistoryMenuVisibleChange,
  handleHistoryMenuSelect,
  handlePopupVisibleChange,
  handleHistoryPopupClosed,
  focus,
  blur,
} = control
const fallthroughInputAttrs = computed(() => {
  const { class: _class, style: _style, ...rest } = attrs
  return rest
})
defineExpose<SearchExpose>({ focus, blur })
</script>
