export interface MenuButton {
  label: string,
  route: string,
  icon: string,
}

export interface MenuButtonGroup {
  name: string,
  buttons: MenuButton[]
}
