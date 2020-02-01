import { color } from '../../redux/boxStore/reducer/type';
import {
  getCoreBoxColorList,
  getCoreBoxTexts,
  getCoreTextColorList,
  getSideBoxColorList,
  getSideBoxTexts,
  getSideTextColorList
} from '../../redux/boxStore/selector';
import { updateBoxSelector } from '../../redux/settingStore/action';
import { stateInterface } from './types';

export const mapStateToProps = (state: any, ourProps: any) => {
  const CORE_BOX_NUM = 4;
  let { bigBoxNum, row, col } = ourProps;
  let smallBoxNum = row*3 + col;

  let box:stateInterface = {
    bgColor: color.white,
    boxContent: "",
    textColor: color.black
  };

  if(bigBoxNum === CORE_BOX_NUM) {
    box.bgColor = getCoreBoxColorList(state.boxStore)[smallBoxNum];
    box.textColor= getCoreTextColorList(state.boxStore)[smallBoxNum];
    box.boxContent = getCoreBoxTexts(state.boxStore)[smallBoxNum];
  }else {
    if(smallBoxNum===4) {
      box.bgColor = getCoreBoxColorList(state.boxStore)[bigBoxNum];
      box.textColor = getCoreTextColorList(state.boxStore)[bigBoxNum];
      box.boxContent = getCoreBoxTexts(state.boxStore)[bigBoxNum];
    }else {
      if(smallBoxNum>4) smallBoxNum--;
      if(bigBoxNum>4) bigBoxNum--;

      box.bgColor = getSideBoxColorList(state.boxStore)[bigBoxNum];
      box.textColor = getSideTextColorList(state.boxStore)[bigBoxNum];
      box.boxContent = getSideBoxTexts(state.boxStore)[bigBoxNum][smallBoxNum];
    }
  }

  return { box };
};

export const mapDispatchToProps = {
  updateBoxSelector,
};