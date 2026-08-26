import type { App, Plugin } from 'vue'
import type { CedarOptions } from './_utils/types'
import { addI18nMessages, useLocale, getLocale } from './locale'
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
import ColorPicker from './color-picker'
import Color from './color'
import ConfigProvider from './config-provider'
import StyleProvider from './style-provider'
import DatePicker, { DateRangePicker } from './date-picker'
import Date from './date'
import DateRange from './date-range'
import Descriptions, { DescriptionsItem } from './descriptions'
import Divider from './divider'
import CountTo from './count-to'
import DragContainer from './drag-container'
import Drawer from './drawer'
import Menu, { MenuOption, MenuGroup, MenuSubmenu } from './menu'
import SplitButton from './split-button'
import Empty from './empty'
import Form, { FormItem } from './form'
import Grid, { Row, Col, GridItem } from './grid'
import Icon from './icon-component'
import Image, { ImagePreview, ImagePreviewAction, ImagePreviewGroup } from './image'
import Input, { InputGroup, InputPassword } from './input'
import InputNumber from './input-number'
import InputTag from './input-tag'
import Layout, { LayoutHeader, LayoutContent, LayoutFooter, LayoutSider } from './layout'
import Link from './link'
import List, { ListItem, ListItemMeta } from './list'
import Mention from './mention'
import NavMenu, { NavMenuItem, NavMenuItemGroup, NavMenuSubMenu } from './nav-menu'
import Message from './message'
import Dialog from './dialog'
import Notification from './notification'
import PageHeader from './page-header'
import Pagination from './pagination'
import Popconfirm from './popconfirm'
import Popover from './popover'
import Progress from './progress'
import Radio, { RadioGroup } from './radio'
import Rate from './rate'
import ResizeBox from './resize-box'
import Result from './result'
import Scrollbar from './scrollbar'
import Search from './search'
import Segmented from './segmented'
import Select, { Option, Optgroup } from './select'
import Skeleton, { SkeletonLine, SkeletonShape } from './skeleton'
import Slider from './slider'
import Space from './space'
import Spin from './spin'
import Split from './split'
import Statistic, { Countdown } from './statistic'
import Steps, { Step } from './steps'
import Switch from './switch'
import Table, { Thead, Td, Th, Tr, Tbody, TableColumn } from './table'
import TableColumnManager from './table-column-manager'
import Tabs, { TabNav, TabItem, TabsNavs, TabsItems } from './tabs'
import Tag from './tag'
import Textarea from './textarea'
import TimePicker, { TimeRangePicker } from './time-picker'
import Time from './time'
import TimeRange from './time-range'
import Timeline, { TimelineItem } from './timeline'
import Tooltip from './tooltip'
import Transfer from './transfer'
import Tree from './tree'
import TreeSelect from './tree-select'
import Trigger from './trigger'
import Typography, { TypographyParagraph, TypographyTitle, TypographyText } from './typography'
import Upload from './upload'
import OverflowList from './overflow-list'
import VerificationCode from './verification-code'
import Watermark from './watermark'

import { useFormItem } from './_hooks/use-form-item'

const components: Record<string, Plugin> = {
  Button,
  Link,
  Typography,
  Divider,
  CountTo,
  Grid,
  Layout,
  Space,
  Avatar,
  Badge,
  Calendar,
  Card,
  Carousel,
  Collapse,
  ColorPicker,
  Color,
  Descriptions,
  Empty,
  Image,
  Scrollbar,
  List,
  Popover,
  Statistic,
  Table,
  TableColumnManager,
  Tabs,
  Tag,
  Timeline,
  Tooltip,
  AutoComplete,
  Cascader,
  Checkbox,
  DatePicker,
  Date,
  DateRange,
  Form,
  Input,
  InputNumber,
  InputTag,
  Mention,
  Radio,
  Rate,
  Select,
  Segmented,
  Slider,
  Switch,
  Textarea,
  TimePicker,
  Time,
  TimeRange,
  Transfer,
  Tree,
  Upload,
  TreeSelect,
  Alert,
  Drawer,
  Message,
  Dialog,
  Notification,
  Popconfirm,
  Progress,
  Result,
  Spin,
  Skeleton,
  Breadcrumb,
  Menu,
  SplitButton,
  NavMenu,
  PageHeader,
  Pagination,
  Steps,
  Affix,
  Anchor,
  BackTop,
  ConfigProvider,
  StyleProvider,
  ResizeBox,
  Trigger,
  Split,
  Icon,
  OverflowList,
  Watermark,
  VerificationCode,
  Search,
  DragContainer,
}

const install = (app: App, options?: CedarOptions) => {
  for (const key of Object.keys(components)) {
    app.use(components[key], options)
  }
}

const CedarVue: Record<string, any> = {
  ...components,
  // Historical reason
  Alter: Alert,
  AnchorLink,
  AvatarGroup,
  BreadcrumbItem,
  ButtonGroup,
  Calendar,
  Card,
  CarouselItem,
  CascaderPanel,
  CheckboxGroup,
  CollapseItem,
  DescriptionsItem,
  DateRangePicker,
  TimeRangePicker,
  MenuOption,
  MenuGroup,
  MenuSubmenu,
  SplitButton,
  FormItem,  Row,
  Col,
  GridItem,
  ImagePreview,
  ImagePreviewAction,
  ImagePreviewGroup,
  InputGroup,
  InputPassword,
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
  LayoutSider,
  ListItem,
  ListItemMeta,
  NavMenuItem,
  NavMenuItemGroup,
  NavMenuSubMenu,
  RadioGroup,
  Option,
  Optgroup,
  SkeletonLine,
  SkeletonShape,
  Countdown,
  Step,
  Thead,
  Td,
  Th,
  Tr,
  Tbody,
  TableColumn,
  TimelineItem,
  TypographyParagraph,
  TypographyTitle,
  TypographyText,
  install,
  addI18nMessages,
  useLocale,
  getLocale,
  useFormItem,
}

export default CedarVue
