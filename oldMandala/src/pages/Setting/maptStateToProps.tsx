import {getBoxSelector} from "../../redux/settingStore/selector";
import {getBoxText, getCoreColor, getSelectBoxTextColor, getSideBoxColorList} from "../../redux/boxStore/selector";
import {color} from "../../redux/boxStore/reducer/type";

export const mapStateToProps = (state: any) => {
  const CORE_NUMBER = 4;
  const boxSelector = getBoxSelector(state.settingStore);
  const insideNum = boxSelector.row * 3 + boxSelector.col;
  const boxText = boxSelector.isSelect ? getBoxText(state.boxStore, boxSelector.boxNum, insideNum) : "";
  const { coreBoxTextColorList, sideBoxTextColorList } = getSelectBoxTextColor(state.boxStore);
  let boxColor: color;

  if (boxSelector.boxNum === CORE_NUMBER) {
    boxColor = getCoreColor(state.boxStore, insideNum)
  } else {
    if (insideNum === CORE_NUMBER)
      boxColor = getCoreColor(state.boxStore, boxSelector.boxNum);
    else
      boxColor = getSideBoxColorList(state.boxStore, boxSelector.boxNum);
  }

  return {...boxSelector, boxText, boxColor, coreBoxTextColorList, sideBoxTextColorList};
};