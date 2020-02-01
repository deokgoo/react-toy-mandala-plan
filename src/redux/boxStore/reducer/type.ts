export enum color {
  red = '#fc0303',
  blue = '#0025fc',
  lite_blue = '#15fcfa',
  green = '#00fc45',
  white = '#ffffff',
  yellow = '#fceb00',
  black = '#000000',
  gray = '#626468',
}

export interface boxStoreStateInterface {
  sideBoxColors: Array<color>,
  coreBoxColors: Array<color>,
  sideBoxTextColors: Array<color>,
  coreBoxTextColors: Array<color>
  sideBoxTexts: Array<Array<string>>,
  coreBoxTexts: Array<string>,
}