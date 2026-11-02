export interface EllipsisConfig {
  /**
   * @zh 显示省略的行数
   * @en The number of omitted lines
   * @default-value 1
   */
  rows?: number
  /**
   * @zh 是否支持展开/折叠
   * @en Whether expandable
   */
  expandable?: boolean
  /**
   * @zh 省略号
   * @en Ellipsis string
   * @default-value '...'
   */
  ellipsisStr?: string
  /**
   * @zh 后缀
   * @en Suffix
   */
  suffix?: string
  /**
   * @zh 配置省略时的弹出框
   * @en Pop-up box when configuration is omitted
   * @default-value false
   * */
  showTooltip?: boolean | { type: 'tooltip' | 'popover'; props: Record<string, any> }
  /**
   * @zh 是否使用 CSS 省略（此模式暂不支持展开、自定义省略号和后缀）
   * @en Whether to use CSS ellipsis (expansion, custom ellipsis and suffix are not supported in this mode)
   * @default-value false
   * */
  css?: boolean
}

export interface EllipsisInternalConfig extends Required<EllipsisConfig> {
  showTooltip: boolean
  TooltipComponent: any
  tooltipProps: { [key: string]: any }
}
