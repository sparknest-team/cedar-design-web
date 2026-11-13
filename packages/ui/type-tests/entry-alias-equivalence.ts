import { withInstall } from '../src/_utils/global-config'
import Affix from '../src/affix'
import OriginalAffix from '../src/affix/Affix.vue'
import Alert from '../src/alert'
import OriginalAlert from '../src/alert/Alert.vue'
import Badge from '../src/badge'
import OriginalBadge from '../src/badge/Badge.vue'
import Card from '../src/card'
import OriginalCard from '../src/card/Card.vue'
import Divider from '../src/divider'
import OriginalDivider from '../src/divider/Divider.vue'
import Empty from '../src/empty'
import OriginalEmpty from '../src/empty/Empty.vue'
import Link from '../src/link'
import OriginalLink from '../src/link/Link.vue'
import Paper from '../src/paper'
import OriginalPaper from '../src/paper/Paper.vue'
import Progress from '../src/progress'
import OriginalProgress from '../src/progress/Progress.vue'
import Rate from '../src/rate'
import OriginalRate from '../src/rate/presentation'
import Calendar from '../src/calendar'
import OriginalCalendar from '../src/calendar/calendar'
import Color from '../src/color'
import OriginalColor from '../src/color/presentation'
import ColorPicker from '../src/color-picker'
import OriginalColorPicker from '../src/color-picker/color-picker'
import ConfigProvider from '../src/config-provider'
import OriginalConfigProvider from '../src/config-provider/ConfigProvider.vue'
import CountTo from '../src/count-to'
import OriginalCountTo from '../src/count-to/CountTo.vue'
import Countdown from '../src/countdown'
import OriginalCountdown from '../src/countdown/Countdown.vue'
import FieldDecorator from '../src/field-decorator'
import OriginalFieldDecorator from '../src/field-decorator/FieldDecorator.vue'
import FilterForm from '../src/filter-form'
import OriginalFilterForm from '../src/filter-form/FilterForm.vue'
import Icon from '../src/icon'
import OriginalIcon from '../src/icon/Icon.vue'
import InputNumber from '../src/input-number'
import OriginalInputNumber from '../src/input-number/presentation'
import OverflowList from '../src/overflow-list'
import OriginalOverflowList from '../src/overflow-list/overflow-list'
import Overlay from '../src/overlay'
import OriginalOverlay from '../src/overlay/overlay.vue'
import PageHeader from '../src/page-header'
import OriginalPageHeader from '../src/page-header/PageHeader.vue'
import Pagination from '../src/pagination'
import OriginalPagination from '../src/pagination/Pagination.vue'
import Slider from '../src/slider'
import OriginalSlider from '../src/slider/presentation'
import Switch from '../src/switch'
import OriginalSwitch from '../src/switch/presentation'
import Textarea from '../src/textarea'
import OriginalTextarea from '../src/textarea/presentation'
import TreeSelect from '../src/tree-select'
import OriginalTreeSelect from '../src/tree-select/presentation'
import VerificationCode from '../src/verification-code'
import OriginalVerificationCode from '../src/verification-code/presentation'
import Watermark from '../src/watermark'
import OriginalWatermark from '../src/watermark/watermark'
import Anchor from '../src/anchor'
import OriginalAnchor from '../src/anchor/Anchor.vue'
import OriginalAnchorLink from '../src/anchor/AnchorLink.vue'
import Descriptions from '../src/descriptions'
import OriginalDescriptions from '../src/descriptions/descriptions'
import OriginalDescriptionsDescriptionsItem from '../src/descriptions/DescriptionsItem.vue'
import Layout from '../src/layout'
import OriginalLayout from '../src/layout/Layout.vue'
import OriginalLayoutHeader from '../src/layout/Header.vue'
import OriginalLayoutContent from '../src/layout/Content.vue'
import OriginalLayoutFooter from '../src/layout/Footer.vue'
import OriginalLayoutSider from '../src/layout/Sider.vue'
import Map from '../src/map'
import OriginalMap from '../src/map/map'
import OriginalMapSelect from '../src/map/map-select'
import Table from '../src/table'
import OriginalTable from '../src/table/table'
import OriginalTableThead from '../src/table/table-thead'
import OriginalTableTbody from '../src/table/table-tbody'
import OriginalTableTr from '../src/table/table-tr'
import OriginalTableTh from '../src/table/table-th'
import OriginalTableTd from '../src/table/table-td'
import OriginalTableColumn from '../src/table/table-column'
import Timeline from '../src/timeline'
import OriginalTimeline from '../src/timeline/timeline'
import OriginalTimelineItem from '../src/timeline/Item.vue'
import Typography from '../src/typography'
import OriginalTypography from '../src/typography/Typography.vue'
import OriginalTypographyParagraph from '../src/typography/paragraph'
import OriginalTypographyTitle from '../src/typography/title'
import OriginalTypographyText from '../src/typography/text'
import InfiniteScroll from '../src/infinite-scroll'
import OriginalInfiniteScroll from '../src/infinite-scroll/infinite-scroll.vue'
import Loading from '../src/loading'
import OriginalLoading from '../src/loading/Loading.vue'
import Popconfirm from '../src/popconfirm'
import OriginalPopconfirm from '../src/popconfirm/Popconfirm.vue'
import Popover from '../src/popover'
import OriginalPopover from '../src/popover/Popover.vue'
import ProgressGroup from '../src/progress-group'
import OriginalProgressGroup from '../src/progress-group/ProgressGroup.vue'
import ResizeBox from '../src/resize-box'
import OriginalResizeBox from '../src/resize-box/ResizeBox.vue'
import Result from '../src/result'
import OriginalResult from '../src/result/Result.vue'
import Scheduler from '../src/scheduler'
import OriginalScheduler from '../src/scheduler/Scheduler.vue'
import Scrollbar from '../src/scrollbar'
import OriginalScrollbar from '../src/scrollbar/Scrollbar.vue'
import Search from '../src/search'
import OriginalSearch from '../src/search/search.vue'
import Segmented from '../src/segmented'
import OriginalSegmented from '../src/segmented/segmented'
import Space from '../src/space'
import OriginalSpace from '../src/space/space'
import SplitButton from '../src/split-button'
import OriginalSplitButton from '../src/split-button/SplitButton.vue'
import Split from '../src/split'
import OriginalSplit from '../src/split/Split.vue'
import Statistic from '../src/statistic'
import OriginalStatistic from '../src/statistic/Statistic.vue'
import Tag from '../src/tag'
import OriginalTag from '../src/tag/Tag.vue'
import Tooltip from '../src/tooltip'
import OriginalTooltip from '../src/tooltip/Tooltip.vue'
import { vTooltip as OriginalTooltipDirective } from '../src/tooltip'
import Transfer from '../src/transfer'
import OriginalTransfer from '../src/transfer/presentation'
import Tree from '../src/tree'
import OriginalTree from '../src/tree/Tree.vue'
import Trigger from '../src/trigger'
import OriginalTrigger from '../src/trigger/trigger'
import Drawer, { _DrawerComponent } from '../src/drawer'
import type { DrawerMethod } from '../src/drawer'
type Assert<T extends true> = T
type Same<A, B> = [A] extends [B] ? ([B] extends [A] ? true : false) : false
const inferAffix = () => withInstall(OriginalAffix, Object.assign(OriginalAffix, {}), { components: [OriginalAffix] })
type AffixCompatibility = Assert<Same<ReturnType<typeof inferAffix>, typeof Affix>>
export type _AffixCompatibility = AffixCompatibility
const inferAlert = () => withInstall(OriginalAlert, Object.assign(OriginalAlert, {}), { components: [OriginalAlert] })
type AlertCompatibility = Assert<Same<ReturnType<typeof inferAlert>, typeof Alert>>
export type _AlertCompatibility = AlertCompatibility
const inferBadge = () => withInstall(OriginalBadge, Object.assign(OriginalBadge, {}), { components: [OriginalBadge] })
type BadgeCompatibility = Assert<Same<ReturnType<typeof inferBadge>, typeof Badge>>
export type _BadgeCompatibility = BadgeCompatibility
const inferCard = () => withInstall(OriginalCard, Object.assign(OriginalCard, {}), { components: [OriginalCard] })
type CardCompatibility = Assert<Same<ReturnType<typeof inferCard>, typeof Card>>
export type _CardCompatibility = CardCompatibility
const inferDivider = () => withInstall(OriginalDivider, Object.assign(OriginalDivider, {}), { components: [OriginalDivider] })
type DividerCompatibility = Assert<Same<ReturnType<typeof inferDivider>, typeof Divider>>
export type _DividerCompatibility = DividerCompatibility
const inferEmpty = () => withInstall(OriginalEmpty, Object.assign(OriginalEmpty, {}), { components: [OriginalEmpty] })
type EmptyCompatibility = Assert<Same<ReturnType<typeof inferEmpty>, typeof Empty>>
export type _EmptyCompatibility = EmptyCompatibility
const inferLink = () => withInstall(OriginalLink)
type LinkCompatibility = Assert<Same<ReturnType<typeof inferLink>, typeof Link>>
export type _LinkCompatibility = LinkCompatibility
const inferPaper = () => withInstall(OriginalPaper)
type PaperCompatibility = Assert<Same<ReturnType<typeof inferPaper>, typeof Paper>>
export type _PaperCompatibility = PaperCompatibility
const inferProgress = () => withInstall(OriginalProgress, Object.assign(OriginalProgress, {}), { components: [OriginalProgress] })
type ProgressCompatibility = Assert<Same<ReturnType<typeof inferProgress>, typeof Progress>>
export type _ProgressCompatibility = ProgressCompatibility
const inferRate = () => withInstall(OriginalRate, Object.assign(OriginalRate, {}), { components: [OriginalRate] })
type RateCompatibility = Assert<Same<ReturnType<typeof inferRate>, typeof Rate>>
export type _RateCompatibility = RateCompatibility

const inferCalendar = () => withInstall(OriginalCalendar, Object.assign(OriginalCalendar, {}))
export type _CalendarCompatibility = Assert<Same<ReturnType<typeof inferCalendar>, typeof Calendar>>
const inferColor = () => withInstall(OriginalColor, Object.assign(OriginalColor, {}))
export type _ColorCompatibility = Assert<Same<ReturnType<typeof inferColor>, typeof Color>>
const inferColorPicker = () => withInstall(OriginalColorPicker, Object.assign(OriginalColorPicker, {}))
export type _ColorPickerCompatibility = Assert<Same<ReturnType<typeof inferColorPicker>, typeof ColorPicker>>
const inferConfigProvider = () => withInstall(OriginalConfigProvider, Object.assign(OriginalConfigProvider, {}))
export type _ConfigProviderCompatibility = Assert<Same<ReturnType<typeof inferConfigProvider>, typeof ConfigProvider>>
const inferCountTo = () => withInstall(OriginalCountTo, Object.assign(OriginalCountTo, {}))
export type _CountToCompatibility = Assert<Same<ReturnType<typeof inferCountTo>, typeof CountTo>>
const inferCountdown = () => withInstall(OriginalCountdown)
export type _CountdownCompatibility = Assert<Same<ReturnType<typeof inferCountdown>, typeof Countdown>>
const inferFieldDecorator = () => withInstall(OriginalFieldDecorator)
export type _FieldDecoratorCompatibility = Assert<Same<ReturnType<typeof inferFieldDecorator>, typeof FieldDecorator>>
const inferFilterForm = () => withInstall(OriginalFilterForm, Object.assign(OriginalFilterForm, {}))
export type _FilterFormCompatibility = Assert<Same<ReturnType<typeof inferFilterForm>, typeof FilterForm>>
const inferIcon = () => withInstall(OriginalIcon)
export type _IconCompatibility = Assert<Same<ReturnType<typeof inferIcon>, typeof Icon>>
const inferInputNumber = () => withInstall(OriginalInputNumber, Object.assign(OriginalInputNumber, {}))
export type _InputNumberCompatibility = Assert<Same<ReturnType<typeof inferInputNumber>, typeof InputNumber>>
const inferOverflowList = () => withInstall(OriginalOverflowList, Object.assign(OriginalOverflowList, {}))
export type _OverflowListCompatibility = Assert<Same<ReturnType<typeof inferOverflowList>, typeof OverflowList>>
const inferOverlay = () => withInstall(OriginalOverlay)
export type _OverlayCompatibility = Assert<Same<ReturnType<typeof inferOverlay>, typeof Overlay>>
const inferPageHeader = () => withInstall(OriginalPageHeader, Object.assign(OriginalPageHeader, {}))
export type _PageHeaderCompatibility = Assert<Same<ReturnType<typeof inferPageHeader>, typeof PageHeader>>
const inferPagination = () => withInstall(OriginalPagination, Object.assign(OriginalPagination, {}))
export type _PaginationCompatibility = Assert<Same<ReturnType<typeof inferPagination>, typeof Pagination>>
const inferSlider = () => withInstall(OriginalSlider, Object.assign(OriginalSlider, {}))
export type _SliderCompatibility = Assert<Same<ReturnType<typeof inferSlider>, typeof Slider>>
const inferSwitch = () => withInstall(OriginalSwitch, Object.assign(OriginalSwitch, {}))
export type _SwitchCompatibility = Assert<Same<ReturnType<typeof inferSwitch>, typeof Switch>>
const inferTextarea = () => withInstall(OriginalTextarea, Object.assign(OriginalTextarea, {}))
export type _TextareaCompatibility = Assert<Same<ReturnType<typeof inferTextarea>, typeof Textarea>>
const inferTreeSelect = () => withInstall(OriginalTreeSelect, Object.assign(OriginalTreeSelect, {}))
export type _TreeSelectCompatibility = Assert<Same<ReturnType<typeof inferTreeSelect>, typeof TreeSelect>>
const inferVerificationCode = () => withInstall(OriginalVerificationCode, Object.assign(OriginalVerificationCode, {}))
export type _VerificationCodeCompatibility = Assert<Same<ReturnType<typeof inferVerificationCode>, typeof VerificationCode>>
const inferWatermark = () => withInstall(OriginalWatermark, Object.assign(OriginalWatermark, {}))
export type _WatermarkCompatibility = Assert<Same<ReturnType<typeof inferWatermark>, typeof Watermark>>

const inferAnchor = () => withInstall(OriginalAnchor, Object.assign(OriginalAnchor, { Link: OriginalAnchorLink }))
export type _AnchorCompatibility = Assert<Same<ReturnType<typeof inferAnchor>, typeof Anchor>>
const inferDescriptions = () => withInstall(OriginalDescriptions, Object.assign(OriginalDescriptions, { DescriptionsItem: OriginalDescriptionsDescriptionsItem }))
export type _DescriptionsCompatibility = Assert<Same<ReturnType<typeof inferDescriptions>, typeof Descriptions>>
const inferLayout = () => withInstall(OriginalLayout, Object.assign(OriginalLayout, { Header: OriginalLayoutHeader, Content: OriginalLayoutContent, Footer: OriginalLayoutFooter, Sider: OriginalLayoutSider }))
export type _LayoutCompatibility = Assert<Same<ReturnType<typeof inferLayout>, typeof Layout>>
const inferMap = () => withInstall(OriginalMap, Object.assign(OriginalMap, { Select: OriginalMapSelect }))
export type _MapCompatibility = Assert<Same<ReturnType<typeof inferMap>, typeof Map>>
const inferTable = () => withInstall(OriginalTable, Object.assign(OriginalTable, { Thead: OriginalTableThead, Tbody: OriginalTableTbody, Tr: OriginalTableTr, Th: OriginalTableTh, Td: OriginalTableTd, Column: OriginalTableColumn }))
export type _TableCompatibility = Assert<Same<ReturnType<typeof inferTable>, typeof Table>>
const inferTimeline = () => withInstall(OriginalTimeline, Object.assign(OriginalTimeline, { Item: OriginalTimelineItem }))
export type _TimelineCompatibility = Assert<Same<ReturnType<typeof inferTimeline>, typeof Timeline>>
const inferTypography = () => withInstall(OriginalTypography, Object.assign(OriginalTypography, { Paragraph: OriginalTypographyParagraph, Title: OriginalTypographyTitle, Text: OriginalTypographyText }))
export type _TypographyCompatibility = Assert<Same<ReturnType<typeof inferTypography>, typeof Typography>>

const inferInfiniteScroll = () => withInstall(OriginalInfiniteScroll, Object.assign(OriginalInfiniteScroll, {}))
export type _InfiniteScrollCompatibility = Assert<Same<ReturnType<typeof inferInfiniteScroll>, typeof InfiniteScroll>>
const inferLoading = () => withInstall(OriginalLoading)
export type _LoadingCompatibility = Assert<Same<ReturnType<typeof inferLoading>, typeof Loading>>
const inferPopconfirm = () => withInstall(OriginalPopconfirm, Object.assign(OriginalPopconfirm, {}))
export type _PopconfirmCompatibility = Assert<Same<ReturnType<typeof inferPopconfirm>, typeof Popconfirm>>
const inferPopover = () => withInstall(OriginalPopover, Object.assign(OriginalPopover, {}))
export type _PopoverCompatibility = Assert<Same<ReturnType<typeof inferPopover>, typeof Popover>>
const inferProgressGroup = () => withInstall(OriginalProgressGroup, Object.assign(OriginalProgressGroup, {}))
export type _ProgressGroupCompatibility = Assert<Same<ReturnType<typeof inferProgressGroup>, typeof ProgressGroup>>
const inferResizeBox = () => withInstall(OriginalResizeBox, Object.assign(OriginalResizeBox, {}))
export type _ResizeBoxCompatibility = Assert<Same<ReturnType<typeof inferResizeBox>, typeof ResizeBox>>
const inferResult = () => withInstall(OriginalResult, Object.assign(OriginalResult, {}))
export type _ResultCompatibility = Assert<Same<ReturnType<typeof inferResult>, typeof Result>>
const inferScheduler = () => withInstall(OriginalScheduler)
export type _SchedulerCompatibility = Assert<Same<ReturnType<typeof inferScheduler>, typeof Scheduler>>
const inferScrollbar = () => withInstall(OriginalScrollbar, Object.assign(OriginalScrollbar, {}))
export type _ScrollbarCompatibility = Assert<Same<ReturnType<typeof inferScrollbar>, typeof Scrollbar>>
const inferSearch = () => withInstall(OriginalSearch, Object.assign(OriginalSearch, {}))
export type _SearchCompatibility = Assert<Same<ReturnType<typeof inferSearch>, typeof Search>>
const inferSegmented = () => withInstall(OriginalSegmented, Object.assign(OriginalSegmented, {}))
export type _SegmentedCompatibility = Assert<Same<ReturnType<typeof inferSegmented>, typeof Segmented>>
const inferSpace = () => withInstall(OriginalSpace, Object.assign(OriginalSpace, {}))
export type _SpaceCompatibility = Assert<Same<ReturnType<typeof inferSpace>, typeof Space>>
const inferSplitButton = () => withInstall(OriginalSplitButton)
export type _SplitButtonCompatibility = Assert<Same<ReturnType<typeof inferSplitButton>, typeof SplitButton>>
const inferSplit = () => withInstall(OriginalSplit, Object.assign(OriginalSplit, {}))
export type _SplitCompatibility = Assert<Same<ReturnType<typeof inferSplit>, typeof Split>>
const inferStatistic = () => withInstall(OriginalStatistic)
export type _StatisticCompatibility = Assert<Same<ReturnType<typeof inferStatistic>, typeof Statistic>>
const inferTag = () => withInstall(OriginalTag, Object.assign(OriginalTag, {}))
export type _TagCompatibility = Assert<Same<ReturnType<typeof inferTag>, typeof Tag>>
const inferTooltip = () => withInstall(OriginalTooltip, Object.assign(OriginalTooltip, { directive: OriginalTooltipDirective }))
export type _TooltipCompatibility = Assert<Same<ReturnType<typeof inferTooltip>, typeof Tooltip>>
const inferTransfer = () => withInstall(OriginalTransfer, Object.assign(OriginalTransfer, {}))
export type _TransferCompatibility = Assert<Same<ReturnType<typeof inferTransfer>, typeof Transfer>>
const inferTree = () => withInstall(OriginalTree, Object.assign(OriginalTree, {}))
export type _TreeCompatibility = Assert<Same<ReturnType<typeof inferTree>, typeof Tree>>
const inferTrigger = () => withInstall(OriginalTrigger, Object.assign(OriginalTrigger, {}))
export type _TriggerCompatibility = Assert<Same<ReturnType<typeof inferTrigger>, typeof Trigger>>
const drawerOpen: DrawerMethod['open'] = Drawer.open
const drawerAlias: typeof Drawer = _DrawerComponent
void drawerOpen
void drawerAlias
