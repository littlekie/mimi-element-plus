# MENU

## task todo
- [x] 简单deno测试
- [x] 定义 menuItem 节点
- [x] test menuItem data
- [x] 编写 menuItem 组件
- [x] 测试 menuItem 组件
- [x] menu-item 支持click事件 和 enter事件 返回当前节点的数据，key\value等
- [x] menu-item disbale不支持click事件
- [x] menu-item 是非选择状态下，何点击item 需要有选择icon 且上一个选择的item取消选择
- [x] sub-menu 支持上下左右移动，碰到 menu-item  disbale对时候要跳过它,
- [x] sub-menu 组件扩展性，
      是否有头部title,
      是否可以用 slot 让使用者方便扩展，可以替换成图片等
- [x] sub-menu 有最多显示几个子节点、上下箭头显示的时机
- [x] sub-menu 组件要支持上下移动 menu-item 
- [x] menu 组件要支持打开下级菜单，由sub-menu 告诉 menu
- [x] menu 组件支持哪些方法？获取当前focus 的 menuItemData
- [x] menu 组件要记录当前 sub-menu id 以及当前 expand item id
- [x] 能够左右调节 mune-item-progress组件（Bar组件要支持左右拖拽吗？）,要有返回调节 BAR 后的事件
- [x] 支持 BACK 事件关闭 sub-menu ，支持 beforeClose 事件 和 onclose 事件
- [x] 鼠标点击有子菜单的，按back 后焦点要在父级的菜单上

## 进度

### 8.8
- [x] 简单deno测试
- [x] 定义 menuItem 节点（menu-item.ts）
- [x] test menuItem data

### 8.9
- [x] 编写 menuItem 组件
- [x] 测试 menuItem 组件、测试icon 是否存在等
- [x] 编写 sunMenu 组件
- [x] menu-item disbale不支持click事件
- [x] sub-menu 支持上下左右移动，碰到 menu-item disbale对时候要跳过它

### 8.10
- [x] 完成音量调组件 左右移动，处理逻辑放在 mune-item-progress 组件中
      支持双向绑定,

### 8.11
- [x] 增加修改 mune-item-progress 值后onchange 事件
- [x] 修复点击click 遇到disbaled问题，上下移动遇到 menu-item disbaled的时候要跳过它
- [x] menu-item 支持click事件 和 enter事件 返回当前节点的数据，key\value等
      且点击和 enter不为disabled的节点，要触发click事件，menu-item需要有selected icon