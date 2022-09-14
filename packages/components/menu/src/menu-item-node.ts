const progressDefaultNumber: Record<string, number[]> = {
  OPTION_UAM_VOL_VISU: [0, 100],
  OPTION_UAM_DIALOG_ENHANCE_LEVEL: [0, 9]
}
interface IMenuItemNode {
  parent: null | IMenuItemNode
  cssName: string
  label: string
  data: IMenuItemData[]
  name: string
  value: number
  level: number
  progressValue: number
  progressMaxSize?: number
  progressMinSize?: number
  isChecked: boolean
  hasChildren: boolean
  disabled: boolean
  chLockState: boolean
  nodeType: number
  iconType?: number | null
}
export interface IMenuItemData {
  index: number
  mlang_key: string
  label?: string
  name?: string
  data: IMenuItemData[]
  selected?: boolean | number
  disabled?: boolean | number
  chLockState?: boolean | number
  type: NodeType // 节点类型
  iconType?: number
  selectedIcon?: string // 选中节点的图标
  nameExtra?: string //
}
export enum NodeType {
  IS_DEFAULT = -1, // 非 RADIO 节点 和音量 BAR
  IS_RADIO = 0,
  IS_BAR = 2
}
export default class MenuItemNode implements IMenuItemNode {
  nodeData: IMenuItemData
  parent: null | MenuItemNode
  data: IMenuItemData[] = []
  cssName = ''
  label = ''
  name = ''
  value = 0
  progressValue = 0
  progressMaxSize = 0
  progressMinSize = 0
  level: number
  isChecked: boolean
  iconType = -1
  hasChildren = false
  disabled = false
  chLockState = false
  nodeType = NodeType.IS_DEFAULT
  children: MenuItemNode[] = []
  constructor (nodeData: IMenuItemData, parentNode?: MenuItemNode | null) {
    this.nodeData = nodeData
    this.parent = parentNode || null
    this.level = !this.parent ? 1 : this.parent.level + 1
    this.isChecked = false
    this.initState()
    this.initChildren()
  }

  initState () {
    const {
      index,
      label,
      name,
      selected,
      iconType,
      type,
      mlang_key,
      disabled,
      chLockState
    } = this.nodeData

    this.value = index
    this.name = name || ''
    this.cssName = mlang_key || ''
    this.label = this.cssName
    this.isChecked = Boolean(selected)
    this.iconType = iconType || -1
    this.nodeType = type
    this.disabled = Boolean(disabled) || false
    this.chLockState = Boolean(chLockState) || false
    if (this.nodeType === NodeType.IS_BAR) {
      this.progressValue = (selected as number) || 0
      this.progressMaxSize = progressDefaultNumber[this.cssName][1]
      this.progressMinSize = progressDefaultNumber[this.cssName][0]
    }
  }

  initChildren () {
    const childrenData: IMenuItemData[] = this.nodeData.data || []
    this.hasChildren = Array.isArray(childrenData) && childrenData.length > 0
    this.children = childrenData.map((child, index) => {
      child.index = index
      return new MenuItemNode(child, this)
    })
  }

  get isDisabled (): boolean {
    const { nodeData, parent } = this
    return (
      Boolean(nodeData.disabled) || Boolean(parent && parent.isDisabled)
    )
  }

  get isLeaf () {
    return !this.hasChildren
  }
  get nameExtra () {
    return this.nodeData.nameExtra || ''
  }

  get text () {
    return this.name
  }

  getNodeType () {
    return this.nodeType
  }
}
