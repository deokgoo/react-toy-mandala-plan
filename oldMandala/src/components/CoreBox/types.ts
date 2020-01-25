import { color } from '../../redux/boxStore/reducer/type';

export interface basePropsInterface {
  boxNum: number,
}

export interface mapStateToPropsInterface {
  textContents?: Array<Array<string>>,
  textColors?: Array<color>,
  sideBoxColors?: Array<color>,
}