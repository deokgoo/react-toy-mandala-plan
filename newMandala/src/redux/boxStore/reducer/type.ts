export enum color {
  red = 'danger',
  blue = 'primary',
  sora = 'info',
  green = 'success',
  white = 'light',
  yellow = 'warning',
  black = 'dark',
  gray = 'secondary',
}

export interface stateInterface {
  sideBoxColors: Array<color>,
  coreBoxColors: Array<color>,
  sideBoxTextColors: Array<color>,
  coreBoxTextColors: Array<color>
  boxTexts: Array<Array<string>>,
}