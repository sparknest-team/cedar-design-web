import type { StyleValue as VueStyleValueCompat } from 'vue'
import type { CompatibleStyleValue } from '../src/_utils/style-value'
import type { ExtractPublicPropTypes } from 'vue'
import type { CompatiblePublicProps } from '../src/_utils/public-props'
import * as M0 from '../src/alert/props'
import * as M1 from '../src/avatar/props'
import * as M2 from '../src/badge/props'
import * as M3 from '../src/breadcrumb/props'
import * as M4 from '../src/button/props'
import * as M5 from '../src/button/group-props'
import * as M6 from '../src/card/props'
import * as M7 from '../src/carousel/props'
import * as M8 from '../src/collapse/props'
import * as M9 from '../src/divider/props'
import * as M10 from '../src/grid/props'
import * as M11 from '../src/grid/item-props'
import * as M12 from '../src/progress/props'
import * as M13 from '../src/skeleton/props'
import * as M14 from '../src/space/props'

type Assert<T extends true> = T
type Same<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false
type DifferentFields<A, B> = { [K in keyof A]-?: K extends keyof B ? Same<A[K], B[K]> extends true ? never : K : K }[keyof A]
type Matches<P> = Same<keyof ExtractPublicPropTypes<P>, keyof CompatiblePublicProps<P>> extends true
  ? DifferentFields<ExtractPublicPropTypes<P>, CompatiblePublicProps<P>> extends never
    ? [ExtractPublicPropTypes<P>] extends [CompatiblePublicProps<P>]
      ? [CompatiblePublicProps<P>] extends [ExtractPublicPropTypes<P>] ? true : false
      : false
    : false
  : false
export type PublicShape0 = Assert<Matches<typeof M0.alertProps>>
export type PublicShape1 = Assert<Matches<typeof M1.avatarProps>>
export type PublicShape2 = Assert<Matches<typeof M1.avatarGroupProps>>
export type PublicShape3 = Assert<Matches<typeof M2.badgeProps>>
export type PublicShape4 = Assert<Matches<typeof M3.breadcrumbProps>>
export type PublicShape5 = Assert<Matches<typeof M3.breadcrumbItemProps>>
export type PublicShape6 = Assert<Matches<typeof M4.buttonProps>>
export type PublicShape7 = Assert<Matches<typeof M5.buttonGroupProps>>
export type PublicShape8 = Assert<Matches<typeof M6.cardProps>>
export type PublicShape9 = Assert<Matches<typeof M7.carouselProps>>
export type PublicShape10 = Assert<Matches<typeof M7.carouselItemProps>>
export type PublicShape11 = Assert<Matches<typeof M8.collapseProps>>
export type PublicShape12 = Assert<Matches<typeof M8.collapseItemProps>>
export type PublicShape13 = Assert<Matches<typeof M9.dividerProps>>
export type PublicShape14 = Assert<Matches<typeof M10.gridProps>>
export type PublicShape15 = Assert<Matches<typeof M11.gridItemProps>>
export type PublicShape16 = Assert<Matches<typeof M12.progressProps>>
export type PublicShape17 = Assert<Matches<typeof M13.skeletonProps>>
export type PublicShape18 = Assert<Matches<typeof M13.skeletonLineProps>>
export type PublicShape19 = Assert<Matches<typeof M13.skeletonShapeProps>>
export type PublicShape20 = Assert<Matches<typeof M14.spaceProps>>

import * as Overlay0 from '../src/popover/props'
export type OverlayShape0 = Assert<Matches<typeof Overlay0.popoverProps>>

import * as Overlay1 from '../src/tooltip/props'
export type OverlayShape1 = Assert<Matches<typeof Overlay1.tooltipProps>>

import * as Overlay2 from '../src/trigger/props'
export type OverlayShape2 = Assert<Matches<typeof Overlay2.triggerProps>>

import * as Overlay3 from '../src/menu/props'
export type OverlayShape3 = Assert<Matches<typeof Overlay3.menuProps>>

import * as Overlay4 from '../src/menu/option-props'
export type OverlayShape4 = Assert<Matches<typeof Overlay4.menuOptionProps>>

import * as Overlay5 from '../src/message/props'
export type OverlayShape5 = Assert<Matches<typeof Overlay5.messageProps>>

import * as Overlay6 from '../src/overlay/props'
export type OverlayShape6 = Assert<Matches<typeof Overlay6.overlayProps>>

import * as Overlay7 from '../src/loading/props'
export type OverlayShape7 = Assert<Matches<typeof Overlay7.loadingProps>>

import * as Overlay8 from '../src/progress-group/props'
export type OverlayShape8 = Assert<Matches<typeof Overlay8.progressGroupProps>>

import * as Overlay9 from '../src/split-button/props'
export type OverlayShape9 = Assert<Matches<typeof Overlay9.splitButtonProps>>

import * as Overlay10 from '../src/rate/props'
export type OverlayShape10 = Assert<Matches<typeof Overlay10.rateProps>>

import * as Overlay11 from '../src/slider/props'
export type OverlayShape11 = Assert<Matches<typeof Overlay11.sliderProps>>

import * as Overlay12 from '../src/switch/props'
export type OverlayShape12 = Assert<Matches<typeof Overlay12.switchProps>>

import * as Temporal0 from '../src/date/picker-props'
import * as Temporal1 from '../src/date-range/picker-props'
import * as Temporal2 from '../src/field-decorator/props'
import * as Temporal3 from '../src/date/props'
import * as Temporal4 from '../src/date/picker/props'
import * as Temporal5 from '../src/date-range/props'
import * as Temporal6 from '../src/time/props'
import * as Temporal7 from '../src/time/picker/props'
import * as Temporal8 from '../src/time-range/props'
import * as Temporal9 from '../src/form/props'
import * as Temporal10 from '../src/form/item-props'
export type TemporalShape0 = Assert<Matches<typeof Temporal0.props>>
export type TemporalShape1 = Assert<Matches<typeof Temporal1.props>>
export type TemporalShape2 = Assert<Matches<typeof Temporal2.fieldLoadingProps>>
export type TemporalShape3 = Assert<Matches<typeof Temporal2.fieldDecoratorProps>>
export type TemporalShape4 = Assert<Matches<typeof Temporal3.dateProps>>
export type TemporalShape5 = Assert<Matches<typeof Temporal4.datePickerProps>>
export type TemporalShape6 = Assert<Matches<typeof Temporal4.pickerProps>>
export type TemporalShape7 = Assert<Matches<typeof Temporal4.dateRangePickerProps>>
export type TemporalShape8 = Assert<Matches<typeof Temporal5.dateRangeProps>>
export type TemporalShape9 = Assert<Matches<typeof Temporal6.timeProps>>
export type TemporalShape10 = Assert<Matches<typeof Temporal7.timePickerProps>>
export type TemporalShape11 = Assert<Matches<typeof Temporal7.timeRangePickerProps>>
export type TemporalShape12 = Assert<Matches<typeof Temporal8.timeRangeProps>>
export type TemporalShape13 = Assert<Matches<typeof Temporal9.formProps>>
export type TemporalShape14 = Assert<Matches<typeof Temporal10.formItemProps>>

import * as Shared0 from '../src/count-to/props'
export type SharedShape0 = Assert<Matches<typeof Shared0.countToProps>>

import * as Shared1 from '../src/countdown/props'
export type SharedShape1 = Assert<Matches<typeof Shared1.countdownProps>>

import * as Shared2 from '../src/empty/props'
export type SharedShape2 = Assert<Matches<typeof Shared2.emptyProps>>

import * as Shared3 from '../src/list/props'
export type SharedShape3 = Assert<Matches<typeof Shared3.listProps>>

import * as Shared4 from '../src/nav-menu/props'
export type SharedShape4 = Assert<Matches<typeof Shared4.navMenuProps>>

import * as Shared5 from '../src/nav-menu/item-props'
export type SharedShape5 = Assert<Matches<typeof Shared5.navMenuItemProps>>

import * as Shared6 from '../src/page-header/props'
export type SharedShape6 = Assert<Matches<typeof Shared6.pageHeaderProps>>

import * as Shared7 from '../src/pagination/props'
export type SharedShape7 = Assert<Matches<typeof Shared7.paginationProps>>

import * as Shared8 from '../src/result/props'
export type SharedShape8 = Assert<Matches<typeof Shared8.resultProps>>

import * as Shared9 from '../src/statistic/props'
export type SharedShape9 = Assert<Matches<typeof Shared9.statisticProps>>

import * as Shared10 from '../src/steps/props'
export type SharedShape10 = Assert<Matches<typeof Shared10.stepsProps>>

import * as Shared11 from '../src/table/props'
export type SharedShape11 = Assert<Matches<typeof Shared11.tableProps>>

import * as Shared12 from '../src/theme-provider/props'
export type SharedShape12 = Assert<Matches<typeof Shared12.themeProviderProps>>

import * as Shared13 from '../src/upload/props'
export type SharedShape13 = Assert<Matches<typeof Shared13.uploadProps>>

import * as Shared14 from '../src/verification-code/props'
export type SharedShape14 = Assert<Matches<typeof Shared14.verificationCodeProps>>

export type SharedStepShape = Assert<Matches<Omit<typeof Shared10.stepProps, 'internalIndex' | 'internalNextStatus'>>>

import * as Remaining0 from '../src/hover/overlay-props'
export type RemainingShape0 = Assert<Matches<typeof Remaining0.hoverOverlayProps>>

import * as Remaining1 from '../src/watermark/props'
export type RemainingShape1 = Assert<Matches<typeof Remaining1.watermarkProps>>

import * as BackTopCompat from '../src/back-top/props'
export type BackTopShape = Assert<Matches<typeof BackTopCompat.backTopProps>>

import type { Ref as CompatibleRef } from 'vue'
import { useHoverOverlay as hoverRefProbe } from '../src/hover'
export type HoverRefContract = Assert<Same<ReturnType<typeof hoverRefProbe>, { hovering: CompatibleRef<boolean>; handleHovering: (value: boolean) => void }>>

import { useUploader as uploaderCompatProbe } from '../src/upload/composables/use-uploader'
import type { UploadFileItem as CompatFile, UploadRejectedFile as CompatRejected, UploadStatus as CompatStatus } from '../src/upload/interfaces'
type CompatUploader = {
  chooseFile: () => Promise<void>
  replacementTarget: import('vue').Ref<CompatFile | undefined>
  cancelChoose: () => void
  replace: (file: CompatFile, replacement?: File) => Promise<void>
  retainUrls: (uids: string[]) => () => void
  addFiles: (files: File[], initialRejected?: CompatRejected[]) => Promise<void>
  submit: (file?: CompatFile) => Promise<void>
  abort: (file?: CompatFile) => void
  retry: (file: CompatFile) => Promise<void>
  remove: (file: CompatFile) => Promise<void>
  preview: (file: CompatFile, originalEvent?: MouseEvent) => void
  reset: () => void
  clearSuccess: () => void
  clearError: () => void
  getFiles: (status?: CompatStatus) => CompatFile[]
  inputRef: import('vue').Ref<HTMLInputElement | undefined>
  dragOver: import('vue').Ref<boolean>
  handleInputChange: (event: Event) => void
  handleDragOver: (event: DragEvent) => void
  handleDragLeave: () => void
  handleDrop: (event: DragEvent) => void
  guardPending: import('vue').ComputedRef<boolean>
  editorPending: import('vue').ComputedRef<boolean>
  fileList: import('vue').ComputedRef<CompatFile[]>
  maxReached: import('vue').ComputedRef<boolean>
  disabled: import('vue').ComputedRef<boolean>
}
export type UploaderReturnContract = Assert<Same<ReturnType<typeof uploaderCompatProbe>, CompatUploader>>

import type { Slot as VueSlotCompat, VNode as VNodeSlotCompat } from 'vue'
type ExplicitSlotProbe<T> = (props: T) => VNodeSlotCompat[]
export type ImageSlotCompatContract = Assert<Same<VueSlotCompat<{ imageNumber: number; length: number }>, ExplicitSlotProbe<{ imageNumber: number; length: number }>>>

import type { App as HoverAppCompat, ObjectDirective as HoverDirectiveCompat } from 'vue'
import { _HoverComponent as hoverPluginCompat, HoverOverlay as hoverOverlayCompat } from '../src/hover'
type HoverPluginShape = HoverDirectiveCompat & { install: (app: HoverAppCompat, ...options: any[]) => any } & { Overlay: typeof hoverOverlayCompat; install(app: HoverAppCompat): void }
export type HoverPluginCompatContract = Assert<Same<typeof hoverPluginCompat, HoverPluginShape>>

import type { ShallowRef as VueShallowCompat, UnwrapRef as UnwrapShallowCompat } from 'vue'
import type { CompatibleShallowRef } from '../src/_utils/compatible-shallow-ref'
type ShallowTestValue = { nested: import('vue').Ref<number> }
type Mutual<A, B> = [A] extends [B] ? [B] extends [A] ? true : false : false
export type ShallowRefCompatContract = Assert<Mutual<CompatibleShallowRef<ShallowTestValue>, VueShallowCompat<ShallowTestValue>>>
export type ShallowUnwrapCompatContract = Assert<Same<UnwrapShallowCompat<CompatibleShallowRef<ShallowTestValue>>, UnwrapShallowCompat<VueShallowCompat<ShallowTestValue>>>>
export type ShallowUnknownCompatContract = Assert<Mutual<CompatibleShallowRef<unknown>, VueShallowCompat<unknown>>>
export type ShallowUndefinedCompatContract = Assert<Mutual<CompatibleShallowRef<string | undefined>, VueShallowCompat<string | undefined>>>

import { useTriggerReference as triggerRefProbe, useTriggerTarget as triggerTargetProbe, type TriggerElement as TriggerElementProbe, type Reference as TriggerReferenceProbe } from '../src/trigger/reference'
import { useTimePanel as timePanelProbe } from '../src/time/use-time-panel'
type TriggerRefProbe = { nodes: { value: import('vue').VNode[] }; element: CompatibleShallowRef<TriggerElementProbe | undefined> }
type TriggerTargetProbe = { element: CompatibleShallowRef<TriggerElementProbe | undefined>; getReference: () => TriggerElementProbe | undefined; setReference: (target?: TriggerReferenceProbe) => void }
export type TriggerShallowContract = Assert<Mutual<ReturnType<typeof triggerRefProbe>, TriggerRefProbe>>
export type TriggerTargetShallowContract = Assert<Mutual<ReturnType<typeof triggerTargetProbe>, TriggerTargetProbe>>
export type TimeShallowContract = Assert<Mutual<ReturnType<typeof timePanelProbe<string>>['draft'], CompatibleShallowRef<string | undefined>>>

import type { CedarComponentWithInstall as EntryInstall } from '../src/_utils/global-config'
import type { ComponentWithInstall as ThemeEntryInstall } from '../src/_utils/maple/components'
import { Col as Entry0 } from '../src/col'
import RawEntry0 from '../src/col/Col.vue'
export type EntryAliasCol = Assert<Same<typeof Entry0, EntryInstall<typeof RawEntry0>>>
import { Row as Entry1 } from '../src/row'
import RawEntry1 from '../src/row/Row.vue'
export type EntryAliasRow = Assert<Same<typeof Entry1, EntryInstall<typeof RawEntry1>>>
import { ThemeProvider as Entry2 } from '../src/theme-provider'
import RawEntry2 from '../src/theme-provider/ThemeProvider.vue'
export type EntryAliasThemeProvider = Assert<Same<typeof Entry2, ThemeEntryInstall<typeof RawEntry2>>>
import { Grid as EntryGrid, GridItem as EntryGridItem } from '../src/grid'
import RawGrid from '../src/grid/Grid.vue'
import RawGridItem from '../src/grid/GridItem.vue'
export type EntryAliasGridItem = Assert<Same<typeof EntryGridItem, EntryInstall<typeof RawGridItem>>>
export type EntryAliasGrid = Assert<Same<typeof EntryGrid, EntryInstall<typeof RawGrid & { Item: typeof EntryGridItem }>>>
import { Avatar as Compound0 } from '../src/avatar'
import RawCompound0 from '../src/avatar/Avatar.vue'
import CompoundChild0 from '../src/avatar/AvatarGroup.vue'
export type EntryAliasAvatar = Assert<Same<typeof Compound0, EntryInstall<typeof RawCompound0 & { Group: typeof CompoundChild0 }>>>
import { Button as Compound1 } from '../src/button'
import RawCompound1 from '../src/button/base'
import CompoundChild1 from '../src/button/ButtonGroup.vue'
export type EntryAliasButton = Assert<Same<typeof Compound1, EntryInstall<typeof RawCompound1 & { Group: typeof CompoundChild1 }>>>
import Compound2 from '../src/collapse'
import RawCompound2 from '../src/collapse/Collapse.vue'
import CompoundChild2 from '../src/collapse/CollapseItem.vue'
export type EntryAliasCollapse = Assert<Same<typeof Compound2, EntryInstall<typeof RawCompound2 & { Item: typeof CompoundChild2 }>>>
import { Steps as Compound3 } from '../src/steps'
import RawCompound3 from '../src/steps/Steps'
import CompoundChild3 from '../src/steps/Step.vue'
export type EntryAliasSteps = Assert<Same<typeof Compound3, EntryInstall<typeof RawCompound3 & { Step: typeof CompoundChild3 }>>>

export type EntryMoreAutoComplete = Assert<Same<typeof import('../src/auto-complete').AutoComplete, EntryInstall<typeof import('../src/auto-complete/presentation').default>>>

export type EntryMoreInputTag = Assert<Same<typeof import('../src/input-tag').InputTag, EntryInstall<typeof import('../src/input-tag/presentation').default>>>

export type EntryMoreMention = Assert<Same<typeof import('../src/mention').Mention, EntryInstall<typeof import('../src/mention/presentation').default>>>

export type EntryMorePeopleSelect = Assert<Same<typeof import('../src/people-select').PeopleSelect, EntryInstall<typeof import('../src/people-select/PeopleSelect').default>>>
export type EntryMoreCascader = Assert<Same<typeof import('../src/cascader').Cascader, EntryInstall<typeof import('../src/cascader/presentation').default & { CascaderPanel: typeof import('../src/cascader/CascaderPanel.vue').default }>>>
export type EntryMoreDate = Assert<Same<typeof import('../src/date').Date, EntryInstall<typeof import('../src/date/presentation').default & { Picker: typeof import('../src/date').DatePicker }>>>
export type EntryMoreDateRange = Assert<Same<typeof import('../src/date-range').DateRange, EntryInstall<typeof import('../src/date-range/presentation').default & { Picker: typeof import('../src/date-range').DateRangePicker }>>>
export type EntryMoreTime = Assert<Same<typeof import('../src/time').Time, EntryInstall<typeof import('../src/time/presentation').default & { Picker: typeof import('../src/time').TimePicker }>>>
export type EntryMoreTimeRange = Assert<Same<typeof import('../src/time-range').TimeRange, EntryInstall<typeof import('../src/time-range/presentation').default & { Picker: typeof import('../src/time-range').TimeRangePicker }>>>
export type EntryMoreNavMenu = Assert<Same<typeof import('../src/nav-menu').NavMenu, EntryInstall<typeof import('../src/nav-menu/menu').default & { Item: typeof import('../src/nav-menu').NavMenuItem }>>>
export type EntryMoreSelect = Assert<Same<typeof import('../src/select').Select, EntryInstall<typeof import('../src/select/select').default & { Option: typeof import('../src/select/Option.vue').default; OptGroup: typeof import('../src/select/Optgroup.vue').default }>>>

export type EntryFinalList = Assert<Same<typeof import('../src/list').List, EntryInstall<typeof import('../src/list/list.vue').default & { Item: typeof import('../src/list').ListItem }>>>
export type EntryFinalImage = Assert<Same<typeof import('../src/image').Image, EntryInstall<typeof import('../src/image/Image.vue').default & { Preview: typeof import('../src/image').ImagePreview; PreviewGroup: typeof import('../src/image').ImagePreviewGroup; preview: typeof import('../src/image').previewImage }>>>

import type { UnwrapNestedRefs as VueReactiveShape } from 'vue'
import type { CompatibleReactive } from '../src/_utils/compatible-reactive'
import type { SelectController } from '../src/select/use-select-controller'
import type { CascaderController } from '../src/cascader/use-cascader-controller'
import type { SearchControl } from '../src/search/use-search-control'
export type ReactiveControllerSelect = Assert<Same<VueReactiveShape<SelectController>, CompatibleReactive<SelectController>>>
export type ReactiveControllerCascader = Assert<Same<VueReactiveShape<CascaderController>, CompatibleReactive<CascaderController>>>
export type ReactiveControllerSearch = Assert<Same<VueReactiveShape<SearchControl>, CompatibleReactive<SearchControl>>>

type TriggerCompatBefore = import('../src/_utils/public-props').CompatiblePublicProps<typeof import('../src/trigger/props').triggerProps>
type TriggerClassValue = string | unknown[] | Record<string, any>
type TriggerClassKeys = 'popupClass' | 'contentClass' | 'arrowClass' | 'openedClass'
type TriggerCompatCandidate = Omit<TriggerCompatBefore, TriggerClassKeys> & Partial<Record<TriggerClassKeys, TriggerClassValue>>
export type TriggerClassAliasContract = Assert<Mutual<TriggerCompatBefore, TriggerCompatCandidate>>
export type TriggerClassFields = Assert<Same<TriggerCompatBefore['popupClass'], TriggerClassValue | undefined>>
export type TriggerClassContent = Assert<Same<TriggerCompatBefore['contentClass'], TriggerClassValue | undefined>>
export type TriggerClassArrow = Assert<Same<TriggerCompatBefore['arrowClass'], TriggerClassValue | undefined>>
export type TriggerClassOpened = Assert<Same<TriggerCompatBefore['openedClass'], TriggerClassValue | undefined>>

type CompatibleStyleValueContract = Assert<Mutual<CompatibleStyleValue, VueStyleValueCompat>>

import type { ExtractPublicPropTypes as VuePublicPropsOverlay } from 'vue'
import type { DialogProps, dialogProps } from '../src/dialog/props'
import type { DrawerProps, drawerProps } from '../src/drawer/props'
type DialogPublicPropsContract = Assert<Mutual<DialogProps, VuePublicPropsOverlay<typeof dialogProps>>>
type DrawerPublicPropsContract = Assert<Mutual<DrawerProps, VuePublicPropsOverlay<typeof drawerProps>>>

import type { NotificationProps, notificationProps } from '../src/notification/props'
import type { TreeSelectProps } from '../src/tree-select/types'
import type { treeSelectProps } from '../src/tree-select/props'
type NotificationPublicPropsContract = Assert<Mutual<NotificationProps, VuePublicPropsOverlay<typeof notificationProps>>>
type TreeSelectPublicPropsContract = Assert<Mutual<TreeSelectProps, VuePublicPropsOverlay<typeof treeSelectProps>>>

import type { AnchorProps, AnchorLinkProps } from '../src/anchor'
import type { anchorProps } from '../src/anchor/props'
import type { anchorLinkProps } from '../src/anchor/link-props'
import type { CalendarProps } from '../src/calendar'
import type { calendarProps } from '../src/calendar/props'
import type { TreeProps } from '../src/tree'
import type { treeProps } from '../src/tree/props'
import type { TransferProps } from '../src/transfer'
import type { transferProps } from '../src/transfer/props'
type AnchorPublicPropsContract = Assert<Mutual<AnchorProps, VuePublicPropsOverlay<typeof anchorProps>>>
type AnchorLinkPublicPropsContract = Assert<Mutual<AnchorLinkProps, VuePublicPropsOverlay<typeof anchorLinkProps>>>
type CalendarPublicPropsContract = Assert<Mutual<CalendarProps, VuePublicPropsOverlay<typeof calendarProps>>>
type TreePublicPropsContract = Assert<Mutual<TreeProps, VuePublicPropsOverlay<typeof treeProps>>>
type TransferPublicPropsContract = Assert<Mutual<TransferProps, VuePublicPropsOverlay<typeof transferProps>>>

type RemainingCedarPublicContract0 = Assert<Mutual<import('../src/config-provider/props').ConfigProviderProps, VuePublicPropsOverlay<typeof import('../src/config-provider/props').configProviderProps>>>
type RemainingCedarPublicContract1 = Assert<Mutual<import('../src/descriptions/props').DescriptionsProps, VuePublicPropsOverlay<typeof import('../src/descriptions/props').descriptionsProps>>>
type RemainingCedarPublicContract2 = Assert<Mutual<import('../src/descriptions/props').DescriptionsItemProps, VuePublicPropsOverlay<typeof import('../src/descriptions/props').descriptionsItemProps>>>
type RemainingCedarPublicContract3 = Assert<Mutual<import('../src/scheduler/props').SchedulerProps, VuePublicPropsOverlay<typeof import('../src/scheduler/props').schedulerProps>>>
type RemainingCedarPublicContract4 = Assert<Mutual<import('../src/segmented/props').SegmentedProps, VuePublicPropsOverlay<typeof import('../src/segmented/props').segmentedProps>>>
type RemainingCedarPublicContract5 = Assert<Mutual<import('../src/timeline/index').TimelineProps, VuePublicPropsOverlay<typeof import('../src/timeline/props').timelineProps>>>
type RemainingCedarPublicContract6 = Assert<Mutual<import('../src/color-picker/props').ColorPickerProps, VuePublicPropsOverlay<typeof import('../src/color-picker/props').colorPickerProps>>>
type RemainingCedarPublicContract7 = Assert<Mutual<import('../src/popconfirm/props').PopconfirmProps, VuePublicPropsOverlay<typeof import('../src/popconfirm/props').popconfirmProps>>>
type RemainingCedarPublicContract8 = Assert<Mutual<import('../src/typography/props').TypographyProps, VuePublicPropsOverlay<typeof import('../src/typography/props').typographyProps>>>
type RemainingCedarPublicContract9 = Assert<Mutual<import('../src/typography/props').TypographyBaseProps, VuePublicPropsOverlay<typeof import('../src/typography/props').typographyBaseProps>>>
type RemainingCedarPublicContract10 = Assert<Mutual<import('../src/typography/props').TypographyTitleProps, VuePublicPropsOverlay<typeof import('../src/typography/props').typographyTitleProps>>>
type RemainingCedarPublicContract11 = Assert<Mutual<import('../src/typography/props').TypographyTextProps, VuePublicPropsOverlay<typeof import('../src/typography/props').typographyTextProps>>>
type RemainingCedarPublicContract12 = Assert<Mutual<import('../src/typography/props').TypographyParagraphProps, VuePublicPropsOverlay<typeof import('../src/typography/props').typographyParagraphProps>>>
type RemainingCedarPublicContract13 = Assert<Mutual<import('../src/filter-form/props').FilterFormProps, VuePublicPropsOverlay<typeof import('../src/filter-form/props').filterFormProps>>>
type RemainingCedarPublicContract14 = Assert<Mutual<import('../src/color/props').ColorProps, VuePublicPropsOverlay<typeof import('../src/color/props').colorProps>>>
type RemainingCedarPublicContract15 = Assert<Mutual<import('../src/map/props').MapProps, VuePublicPropsOverlay<typeof import('../src/map/props').mapProps>>>
type RemainingCedarPublicContract16 = Assert<Mutual<import('../src/map/props').MapSelectProps, VuePublicPropsOverlay<typeof import('../src/map/props').mapSelectProps>>>

import type { InputHTMLAttributes as VueInputAttributesCompat } from 'vue'
import type { InputProps as EnterHintInputProps } from '../src/input/props'
type EnterHintContract = Assert<Same<EnterHintInputProps['enterkeyhint'], VueInputAttributesCompat['enterKeyHint']>>

import type { MaybeRef as VueMaybeRefCompat, MaybeRefOrGetter as VueMaybeRefOrGetterCompat } from 'vue'
import type { CompatibleMaybeRef, CompatibleMaybeRefOrGetter } from '../src/_utils/maybe-ref'
type MaybeRefValueContract = Assert<Mutual<CompatibleMaybeRef<string>, VueMaybeRefCompat<string>>>
type MaybeRefFunctionContract = Assert<Mutual<CompatibleMaybeRef<() => number>, VueMaybeRefCompat<() => number>>>
type MaybeRefGetterContract = Assert<Mutual<CompatibleMaybeRefOrGetter<string | undefined>, VueMaybeRefOrGetterCompat<string | undefined>>>
