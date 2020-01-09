export enum color {
  red = 'danger',
  blue = 'primary',
  white = 'light',
  black = 'dark',
  gray = 'secondary',
}

export interface stateInterface {
  boxColors: Array<Array<color>>,
  textColors: Array<Array<color>>,
  boxTests: Array<Array<string>>,
}