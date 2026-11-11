import { ModelBase, Column } from 'loca-boot-core'

/**
 * @description 场站列表查询条件
 */
export class ListFilter extends ModelBase {
  /**
   * @description 城市公司数组
   */
  @Column()
  public regionNameArray?: string[]
  /**
   * @description 区域公司名称
   */
  @Column()
  public regionNames!: string[]

  /**
   * @description 查询条件，枚举:station_id, grid_account_id, ems_device_id, station_name, ems_device_name
   */
  @Column({ default: 'station_id' })
  public conditionType?: string

  /**
   * @description 模糊查询字符串
   */
  @Column()
  public fuzzyQuery?: string

  /**
   * @description 页数
   */
  @Column()
  public pageNo!: number

  /**
   * @description 每页数量
   */
  @Column()
  public pageSize!: number
}

/**
 * @description 场站列表
 */
export class StationListItem extends ModelBase {
  /**
   * @description 场站名称
   */
  @Column()
  public stationName!: string

  /**
   * @description 场站ID
   */
  @Column()
  public outStationId!: string

  /**
   * @description 城市公司
   */
  @Column()
  public regionName!: string

  /**
   * @description 场地方
   */
  @Column()
  public siteName!: string
}

export class StationList extends ModelBase {
  @Column()
  public totalResults!: number

  @Column()
  public hasNext!: boolean

  @Column({ default: () => [], childType: StationListItem })
  public resultList!: StationListItem[]
}

/**
 * @description 地址
 */
export class StationAddressModel extends ModelBase {
  /**
   * @description 经度
   */
  @Column()
  public longitude!: number

  /**
   * @description 纬度
   */
  @Column()
  public latitude!: number

  /**
   * @description 区域公司id
   */
  @Column()
  public regionId!: string

  /**
   * @description 详细地址
   */
  @Column()
  public addressDetail!: string

  /**
   * @description name
   */
  @Column()
  public name!: string

  /**
   * @description adcode
   */
  @Column()
  public adcode!: string

  /**
   * @description city
   */
  @Column()
  public city!: string
}

/**
 * @description 创建场站
 */
export class CreateStationModel extends ModelBase {
  /**
   * @description 场站id
   */
  @Column()
  public outStationId!: string

  /**
   * @description 场站名称
   */
  @Column()
  public stationName!: string

  /**
   * @description ems设备id
   */
  @Column()
  public emsId!: string

  /**
   * @description ems设备名称
   */
  @Column()
  public emsName!: string

  /**
   * @description 户号
   */
  @Column()
  public gridAccountId!: string

  /**
   * @description 场地方
   */
  @Column()
  public siteName!: string

  /**
   * @description 电价卡片id
   */
  @Column()
  public priceCardId!: string

  /**
   * @description 用电分类id
   */
  @Column()
  public priceCategoryId!: string

  /**
   * @description 场站照片
   */
  @Column()
  public imageUrl!: string

  /**
   * @description 地址
   */
  @Column({ autowired: true, childType: StationAddressModel })
  public addressDto!: StationAddressModel
}

export class PriceCategoryItemModel extends ModelBase {
  /**
   * @description 电价类别id
   */
  @Column()
  public priceCategoryId!: string

  /**
   * @description 电价类别类型
   */
  @Column()
  public priceType!: string

  /**
   * @description 计费方式
   */
  @Column()
  public billingMethod!: string

  /**
   * @description 电压等级
   */
  @Column()
  public voltageLevel!: string
}

export class PriceCategoryListItemModel extends ModelBase {
  /**
   * @description 电价卡片
   */
  @Column()
  public priceCardId!: string

  /**
   * @description 电价卡片名称
   */
  @Column()
  public priceCardName!: string

  /**
   * @description 电价类别
   */
  @Column({
    default: () => [],
    childType: PriceCategoryItemModel,
  })
  public ecoPriceCategoryDtoList!: PriceCategoryItemModel[]
}
