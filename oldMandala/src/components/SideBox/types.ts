import {color} from '../../redux/boxStore/reducer/type';

export interface stateInterface {
  coreText: string,
  sideVisible: Boolean,
  coreInCore: Boolean,
}

export interface mapStateToPropsInterface {
  allBoxTexts?: Array<Array<string>>,
  sideTextColor?: color,
  sideBoxColors?: color,
  coreBoxColor?: color,
  coreText?: string,
  coreTextColor?: color,
}

export interface basePropsInterface extends mapStateToPropsInterface {
  boxNum: number,
}