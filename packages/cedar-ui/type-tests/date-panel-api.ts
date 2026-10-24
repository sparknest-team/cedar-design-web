import type {
  ConfigProviderProps, DateProps, DatePickerProps, DateRangeProps, DateRangePickerProps, DateWeekStart,
  DatePickerType, DateRangePickerType, DatePickerOptions, DateRangePickerOptions,
  DateEmits, DateRangeEmits, DatePickerEmits, DateRangePickerEmits, DateShortcut, DateShortcutsPosition,
} from '@cedar-design/ui'
import { DatePicker } from '@cedar-design/ui/date'
import { DateRangePicker } from '@cedar-design/ui/date-range'
import type { DatePickerProps as SubpathPanel } from '@cedar-design/ui/date'
import type { DateRangePickerProps as SubpathRange } from '@cedar-design/ui/date-range'

const week: DateWeekStart = 1
const type: DatePickerType = 'month'
const rangeType: DateRangePickerType = 'date'
const field: DateProps = { open: true, variant: 'outline', datePickerProps: { dayStartOfWeek: week } }
const range: DateRangeProps = { dateRangePickerProps: { dayStartOfWeek: week } }
const panel: DatePickerProps = { type, dayStartOfWeek: week, disableConfirm: false, modelValue: new Date() }
const rangePanel: DateRangePickerProps = { type: rangeType, disabled: [false, true], modelValue: ['2025-01-01', '2025-01-03'] }
const options: DatePickerOptions = { dayStartOfWeek: week }
const rangeOptions: DateRangePickerOptions = { dayStartOfWeek: week }
const subpath: SubpathPanel = panel
const subpathRange: SubpathRange = rangePanel
const change: DatePickerEmits['change'] = ['2025-01-01', new Date(), '01/01/2025']
const confirm: DateRangePickerEmits['confirm'] = [['2025-01-01'], [new Date()], ['01/01/2025']]
const focus: DateEmits['focus'] = []
const open: DateRangeEmits['update:open'] = [true]
// @ts-expect-error Pure panels do not control a popup.
const badPanel: DatePickerProps = { open: true }
// @ts-expect-error Input appearance belongs to the field.
const badRangePanel: DateRangePickerProps = { variant: 'outline' }
// @ts-expect-error Removed pre-release alias.
const oldWeek: DatePickerProps = { firstDayOfWeek: 1 }
// @ts-expect-error Week starts are numeric.
const stringWeek: DatePickerProps = { dayStartOfWeek: '1' }
// @ts-expect-error Week range is zero to six.
const badWeek: DateWeekStart = 7
// @ts-expect-error Nested options cannot own the model.
const badOptions: DatePickerOptions = { modelValue: '2025-01-01' }
// @ts-expect-error Nested options cannot own the rules.
const badRangeOptions: DateRangePickerOptions = { disabledDate: () => true }
// @ts-expect-error Field control is a boolean event.
const badOpen: DateEmits['update:open'] = ['true']
void [field, range, panel, rangePanel, options, rangeOptions, subpath, subpathRange, change, confirm, focus, open,
  badPanel, badRangePanel, oldWeek, stringWeek, badWeek, badOptions, badRangeOptions, badOpen, DatePicker, DateRangePicker]

const shortcut: DateShortcut = { label: 'next', value: () => new Date(), disabled: false }
const position: DateShortcutsPosition = 'bottom'
const toolsPanel: DatePickerProps = { shortcuts: [shortcut], shortcutsPosition: position, pickerValue: new Date() }
const navigate: DatePickerEmits['update:pickerValue'] = [new Date()]
const shortcutEvent: DateRangePickerEmits['select-shortcut'] = [shortcut]
// @ts-expect-error Shortcut position is a closed enum.
const badPosition: DateShortcutsPosition = 'top'
void [toolsPanel, navigate, shortcutEvent, badPosition]

const currentPanel: DatePickerProps = { showCurrent: false, showNowButton: true }
const currentOptions: DatePickerOptions = { showNowButton: false }
const rangeInteraction: DateRangePickerProps = { exchangeTime: false, showCurrent: false }
// @ts-expect-error Removed pre-release current action name.
const oldNow: DatePickerProps = { showNowBtn: true }
// @ts-expect-error Range panels do not offer single-current selection.
const rangeNow: DateRangePickerProps = { showNowButton: true }
void [currentPanel, currentOptions, rangeInteraction, oldNow, rangeNow]

// @ts-expect-error Range interaction strategy belongs to DateRangePicker, not global ConfigProvider.
const oldGlobalRange: ConfigProviderProps = { exchangeTime: true }
void oldGlobalRange

// @ts-expect-error Date panels use global Locale, not component-specific dictionaries.
const localDictionary: DatePickerProps = { locale: {} }
// @ts-expect-error Range panels use the same global Locale.
const rangeLocalDictionary: DateRangePickerProps = { locale: {} }
void [localDictionary, rangeLocalDictionary]

const timeView: import('@cedar-design/ui').DateTimePickerOptions = { use12Hours: true, step: { minute: 15 }, hideDisabledOptions: true }
const dateTimeView: DatePickerProps = { timePickerProps: timeView }
// @ts-expect-error Nested time options cannot override date precision.
const nestedTimeFormat: DatePickerProps = { timePickerProps: { format: 'ss' } }
// @ts-expect-error Date constraints belong to the date root.
const nestedTimeRules: DateRangePickerProps = { timePickerProps: { disabledHours: () => [] } }
void [dateTimeView, nestedTimeFormat, nestedTimeRules]

// @ts-expect-error Desktop fields do not render mobile wheels.
const desktopWheel: DateProps = { pickerProps: { optionCount: 4 } }
// @ts-expect-error Desktop range fields do not render mobile wheels.
const desktopRangeWheel: DateRangeProps = { pickerProps: {} }
// @ts-expect-error Desktop range field configures its range panel, not a mobile inner calendar.
const desktopRangeCalendar: DateRangeProps = { datePickerProps: {} }
void [desktopWheel, desktopRangeWheel, desktopRangeCalendar]
