import { selectedInfoInterface } from '../../redux/settingStore/reducer/type'
import { color } from '../../redux/boxStore/reducer/type';

export type propsInterface = ourPropsInterface & stateInterface & mapDispatchToPropsInterface

export interface ourPropsInterface {
  bigBoxNum: number,
  row: number,
  col: number,
  box: {
    bgColor: color
    textColor: color,
    boxContent: string,
  }
}

export interface stateInterface {
  bgColor: color
  textColor: color,
  boxContent: string
}

export interface mapDispatchToPropsInterface {
  updateBoxSelector: (data: selectedInfoInterface) => any,
}