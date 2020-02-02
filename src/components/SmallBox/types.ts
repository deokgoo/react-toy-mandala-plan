import { selectedInfoInterface } from '../../redux/settingStore/reducer/type'
import { color } from '../../redux/boxStore/reducer/type';

export type propsInterface = ourPropsInterface & stateInterface & mapDispatchToPropsInterface

export interface ourPropsInterface {
  bigBoxNum: number,
  row: number,
  col: number,
  box: stateInterface
}

export interface stateInterface {
  boxContent: string,
  textColor: color,
  bgColor: color
}

export interface mapDispatchToPropsInterface {
  updateBoxSelector: (data: selectedInfoInterface) => any,
}