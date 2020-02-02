import { stateInterface } from "../SmallBox/types";
import {selectedInfoInterface, selectInterface} from "../../redux/settingStore/reducer/type";

export type propsInterface = boxInterface & actionInterface;

interface boxInterface {
  box?: stateInterface,
  boxInfo?: selectedInfoInterface,
  isSelect?: boolean
}

interface actionInterface {
  updateBoxColor?: any,
  updateTextColor?: any,
  updateText?: any
}
