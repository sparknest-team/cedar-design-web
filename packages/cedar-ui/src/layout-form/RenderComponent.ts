type VNodeData = any

export interface IRenderComponent extends VNodeData {
  componentId?: number

  level?: number

  render?: any

  parentComponentId?: number

  componentName?: any

  componentType?: string

  children?: IRenderComponent[]
}

// export class RenderComponent extends ModelBase implements IRenderComponent {
//   @Column()
//   public componentId!: number
//
//   @Column()
//   public ref!: string
//
//   @Column()
//   public level!: number
//
//   @Column()
//   public render!: any
//
//   @Column()
//   public parentComponentId!: number
//
//   @Column()
//   public componentName!: string
//
//   @Column()
//   public componentType!: string
//
//   @Column()
//   public attrs!: { [key: string]: any }
//
//   @Column()
//   public props!: { [key: string]: any }
//
//   @Column({ childType: RenderComponent })
//   public children!: RenderComponent[]
// }
