import { getBoxSelector } from '../../redux/settingStore/selector';
import {selectedInfoInterface, selectInterface} from "../../redux/settingStore/reducer/type";
import {stateInterface} from "../SmallBox/types";
import {color} from "../../redux/boxStore/reducer/type";
import {
  getCoreBoxColorList,
  getCoreBoxTexts,
  getCoreTextColorList,
  getSideBoxColorList, getSideBoxTexts, getSideTextColorList
} from "../../redux/boxStore/selector";
import {updateBoxColor, updateText, updateTextColor} from "../../redux/boxStore/action";

const CORE_BOX_NUM = 4;

export const mapStateToProps = (state: any) => {
  let boxSelect:selectInterface = getBoxSelector(state.settingStore);
  let { selectedInfo, isSelect } = boxSelect;
  let { boxNum, row, col} = selectedInfo;
  let boxInfo:selectedInfoInterface = { boxNum, row, col };
  let smallBoxNum = row*3 + col;

  let box:stateInterface = {
    bgColor: color.white,
    textColor: color.black,
    boxContent: ""
  };

  if(boxNum === CORE_BOX_NUM) {
    box.bgColor = getCoreBoxColorList(state.boxStore)[smallBoxNum];
    box.textColor= getCoreTextColorList(state.boxStore)[smallBoxNum];
    box.boxContent = getCoreBoxTexts(state.boxStore)[smallBoxNum];
  }else {
    if(smallBoxNum===4) {
      box.bgColor = getCoreBoxColorList(state.boxStore)[boxNum];
      box.textColor = getCoreTextColorList(state.boxStore)[boxNum];
      box.boxContent = getCoreBoxTexts(state.boxStore)[boxNum];
    }else {
      if(smallBoxNum>4) smallBoxNum--;
      if(boxNum>4) boxNum--;

      box.bgColor = getSideBoxColorList(state.boxStore)[boxNum];
      box.textColor = getSideTextColorList(state.boxStore)[boxNum];
      box.boxContent = getSideBoxTexts(state.boxStore)[boxNum][smallBoxNum];
    }
  }

  return { box, boxInfo, isSelect }
};

export const mapDispatchToProps = {
  updateBoxColor,
  updateTextColor,
  updateText
};