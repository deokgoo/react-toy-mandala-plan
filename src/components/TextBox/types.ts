import { color } from '../../redux/boxStore/reducer/type';

export interface stateInterface {
  boxText: string,
  visible: boolean,
}

export interface basePropsInterface {
  row: number,
  col: number,
  boxNum: number,
  boxText: string,
  boxTextColor: color,
  boxColor: color,
}

export interface propsActions {
  updateBoxSelector?: (data: {boxNum:number , row: number, col: number}) => void
  boxSelector?: any
}