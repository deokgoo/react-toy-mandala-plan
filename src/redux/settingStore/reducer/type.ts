export interface selectedBoxInterface {
  boxNum: number,
  row: number,
  col: number
}

export interface selectInterface {
  box : selectedBoxInterface,
  isSelect: boolean,
}