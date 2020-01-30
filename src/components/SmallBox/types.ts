import { selectedInfoInterface } from '../../redux/settingStore/reducer/type'
import { color } from '../../redux/boxStore/reducer/type';

export interface propsInterface {
  box?: selectedInfoInterface
}

export interface stateInterface {
  boxContent: string,
  textColor: color,
  boxColor: color
}

export interface mapDispatchToPropsInterface {
  updateBoxSelector?: (data: {box: selectedInfoInterface}) => any,

}