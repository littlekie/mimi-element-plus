
import MenuItem from "./src/menu-item.vue";
import MenuItemProgress from "./src/menu-item-progress.vue";
import SubMenu from "./src/sub-menu.vue";
export type MenuItemInstance = InstanceType<typeof MenuItem>
export type MenuItemProgressInstance = InstanceType<typeof MenuItemProgress>
export type SubMenuInstance = InstanceType<typeof SubMenu>
export {
  MenuItem,
  SubMenu,
  MenuItemProgress
}