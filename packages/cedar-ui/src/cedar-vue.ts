import type { App, Plugin } from 'vue'
import type { CedarOptions } from './_utils/types'
import Affix from './affix'
import Alert from './alert'
import Anchor, { AnchorLink } from './anchor'
import AutoComplete from './auto-complete'
import Avatar, { AvatarGroup } from './avatar'
import BackTop from './back-top'
import Badge from './badge'
import Breadcrumb, { BreadcrumbItem } from './breadcrumb'
import Button, { ButtonGroup } from './button'
import Calendar from './calendar'
import Card from './card'
import Carousel, { CarouselItem } from './carousel'
import Cascader, { CascaderPanel } from './cascader'
import Checkbox, { CheckboxGroup } from './checkbox'
import Collapse, { CollapseItem } from './collapse'
import Color from './color'
import ColorPicker from './color-picker'
import ConfigProvider from './config-provider'
import CountTo from './count-to'
import Countdown from './countdown'
import Date, { DatePicker } from './date'
import DateRange, { DateRangePicker } from './date-range'
import Descriptions, { DescriptionsItem } from './descriptions'
import Divider from './divider'
import Drawer from './drawer'
import Empty from './empty'
import FilterForm from './filter-form'
import Form, { FormItem } from './form'
import Grid, { Col, GridItem, Row } from './grid'
import Hover, { HoverOverlay } from './hover'
import Icon from './icon'
import Image, { ImagePreview, ImagePreviewAction, ImagePreviewFn, ImagePreviewGroup } from './image'
import InfiniteScroll from './infinite-scroll'
import Input, { InputGroup, InputGroupLabel, InputPassword } from './input'
import InputNumber from './input-number'
import InputTag from './input-tag'
import Layout, { LayoutContent, LayoutFooter, LayoutHeader, LayoutSider } from './layout'
import Link from './link'
import List, { ListItem } from './list'
import Map, { MapSelect } from './map'
import Mention from './mention'
import Menu, { MenuGroup, MenuOption, MenuSubmenu } from './menu'
import NavMenu, { NavMenuItem, NavMenuItemGroup, NavMenuSubMenu } from './nav-menu'
import OverflowList from './overflow-list'
import PageHeader from './page-header'
import Pagination from './pagination'
import PeopleSelect from './people-select'
import Popconfirm from './popconfirm'
import Popover from './popover'
import Progress from './progress'
import Radio, { RadioGroup } from './radio'
import Rate from './rate'
import ResizeBox from './resize-box'
import Result from './result'
import Ripple from './ripple'
import SaasPage from './saas-page'
import Scrollbar from './scrollbar'
import Search from './search'
import Segmented from './segmented'
import Select, { Optgroup, Option } from './select'
import Skeleton, { SkeletonLine, SkeletonShape } from './skeleton'
import Slider from './slider'
import Space from './space'
import Spin from './spin'
import Split from './split'
import SplitButton from './split-button'
import Statistic from './statistic'
import Steps, { Step } from './steps'
import StyleProvider from './style-provider'
import Switch from './switch'
import Table, { TableColumn, Tbody, Td, Th, Thead, Tr } from './table'
import TableColumnManager from './table-column-manager'
import Tabs, { TabItem, TabNav, TabsItems, TabsNavs } from './tabs'
import Tag from './tag'
import Textarea from './textarea'
import Time, { TimePicker } from './time'
import TimeRange, { TimeRangePicker } from './time-range'
import Timeline, { TimelineItem } from './timeline'
import Tooltip from './tooltip'
import Transfer from './transfer'
import Tree from './tree'
import TreeSelect from './tree-select'
import Trigger from './trigger'
import Typography, { TypographyParagraph, TypographyText, TypographyTitle } from './typography'
import Upload from './upload'
import VerificationCode from './verification-code'
import Watermark from './watermark'
import { addI18nMessages, useLocale, getLocale } from './locale'
import { useFormItem } from './_hooks/use-form-item'

const components: Record<string, Plugin> = {
  Affix: Affix as Plugin,
  Alert: Alert as Plugin,
  Anchor: Anchor as Plugin,
  AutoComplete: AutoComplete as Plugin,
  Avatar: Avatar as Plugin,
  BackTop: BackTop as Plugin,
  Badge: Badge as Plugin,
  Breadcrumb: Breadcrumb as Plugin,
  Button: Button as Plugin,
  Calendar: Calendar as Plugin,
  Card: Card as Plugin,
  Carousel: Carousel as Plugin,
  Cascader: Cascader as Plugin,
  Checkbox: Checkbox as Plugin,
  Collapse: Collapse as Plugin,
  Color: Color as Plugin,
  ColorPicker: ColorPicker as Plugin,
  ConfigProvider: ConfigProvider as Plugin,
  CountTo: CountTo as Plugin,
  Countdown: Countdown as Plugin,
  Date: Date as Plugin,
  DateRange: DateRange as Plugin,
  Descriptions: Descriptions as Plugin,
  Divider: Divider as Plugin,
  Drawer: Drawer as Plugin,
  Empty: Empty as Plugin,
  FilterForm: FilterForm as Plugin,
  Form: Form as Plugin,
  Grid: Grid as Plugin,
  Hover: Hover as Plugin,
  Icon: Icon as Plugin,
  Image: Image as Plugin,
  InfiniteScroll: InfiniteScroll as Plugin,
  Input: Input as Plugin,
  InputNumber: InputNumber as Plugin,
  InputTag: InputTag as Plugin,
  Layout: Layout as Plugin,
  Link: Link as Plugin,
  List: List as Plugin,
  Map: Map as Plugin,
  Mention: Mention as Plugin,
  Menu: Menu as Plugin,
  NavMenu: NavMenu as Plugin,
  OverflowList: OverflowList as Plugin,
  PageHeader: PageHeader as Plugin,
  Pagination: Pagination as Plugin,
  PeopleSelect: PeopleSelect as Plugin,
  Popconfirm: Popconfirm as Plugin,
  Popover: Popover as Plugin,
  Progress: Progress as Plugin,
  Radio: Radio as Plugin,
  Rate: Rate as Plugin,
  ResizeBox: ResizeBox as Plugin,
  Result: Result as Plugin,
  Ripple: Ripple as Plugin,
  SaasPage: SaasPage as Plugin,
  Scrollbar: Scrollbar as Plugin,
  Search: Search as Plugin,
  Segmented: Segmented as Plugin,
  Select: Select as Plugin,
  Skeleton: Skeleton as Plugin,
  Slider: Slider as Plugin,
  Space: Space as Plugin,
  Spin: Spin as Plugin,
  Split: Split as Plugin,
  SplitButton: SplitButton as Plugin,
  Statistic: Statistic as Plugin,
  Steps: Steps as Plugin,
  StyleProvider: StyleProvider as Plugin,
  Switch: Switch as Plugin,
  Table: Table as Plugin,
  TableColumnManager: TableColumnManager as Plugin,
  Tabs: Tabs as Plugin,
  Tag: Tag as Plugin,
  Textarea: Textarea as Plugin,
  Time: Time as Plugin,
  TimeRange: TimeRange as Plugin,
  Timeline: Timeline as Plugin,
  Tooltip: Tooltip as Plugin,
  Transfer: Transfer as Plugin,
  Tree: Tree as Plugin,
  TreeSelect: TreeSelect as Plugin,
  Trigger: Trigger as Plugin,
  Typography: Typography as Plugin,
  Upload: Upload as Plugin,
  VerificationCode: VerificationCode as Plugin,
  Watermark: Watermark as Plugin,
}

const install = (app: App, options?: CedarOptions) => {
  for (const key of Object.keys(components)) {
    app.use(components[key], options)
  }
}

const CedarVue: Record<string, any> = {
  ...components,
  AnchorLink,
  AvatarGroup,
  BreadcrumbItem,
  ButtonGroup,
  CarouselItem,
  CascaderPanel,
  CheckboxGroup,
  Col,
  CollapseItem,
  DatePicker,
  DateRangePicker,
  DescriptionsItem,
  FormItem,
  GridItem,
  HoverOverlay,
  ImagePreview,
  ImagePreviewAction,
  ImagePreviewFn,
  ImagePreviewGroup,
  InputGroup,
  InputGroupLabel,
  InputPassword,
  LayoutContent,
  LayoutFooter,
  LayoutHeader,
  LayoutSider,
  ListItem,
  MapSelect,
  MenuGroup,
  MenuOption,
  MenuSubmenu,
  NavMenuItem,
  NavMenuItemGroup,
  NavMenuSubMenu,
  Optgroup,
  Option,
  RadioGroup,
  Row,
  SkeletonLine,
  SkeletonShape,
  Step,
  TabItem,
  TabNav,
  TableColumn,
  TabsItems,
  TabsNavs,
  Tbody,
  Td,
  Th,
  Thead,
  TimePicker,
  TimeRangePicker,
  TimelineItem,
  Tr,
  TypographyParagraph,
  TypographyText,
  TypographyTitle,
  install,
  addI18nMessages,
  useLocale,
  getLocale,
  useFormItem,
}

export default CedarVue
