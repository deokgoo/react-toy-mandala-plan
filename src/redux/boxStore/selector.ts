import { stateInterface } from "./reducer/type";

export const getCoreBoxColorList = (state: stateInterface) => state.coreBoxColors;

export const getSideBoxColorList = (state: stateInterface, boxNum: number) => {
  const { sideBoxColors } = state;

  return boxNum<4 ? sideBoxColors[boxNum] : sideBoxColors[boxNum-1];
};

export const getCoreTextColorList = (state: stateInterface) => state.coreBoxTextColors;

export const getSideTextColorList = (state: stateInterface, boxNum: number) => {
  const { sideBoxTextColors } = state;

  return boxNum<4 ? sideBoxTextColors[boxNum] : sideBoxTextColors[boxNum-1];
};

export const getSelectBoxTextColor = (state: stateInterface) => {
  let coreBoxTextColorList = state.coreBoxTextColors;
  let sideBoxTextColorList = state.sideBoxTextColors;

  return { coreBoxTextColorList, sideBoxTextColorList }
}

export const getCoreText = (state: stateInterface, boxNum: number) => {
  const { boxTexts } = state;

  return boxTexts[4][boxNum];
};

export const getCoreColor = (state: stateInterface, boxNum: number) => {
  const { coreBoxColors } = state;
  return coreBoxColors[boxNum];
};

export const getCoreTextColor = (state: stateInterface, boxNum: number) => {
  const { coreBoxTextColors } = state;
  return coreBoxTextColors[boxNum];
};

export const getBoxAllText = (state: stateInterface) => state.boxTexts;

export const getBoxText = (state: stateInterface, boxNum: number, num: number) => state.boxTexts[boxNum][num];
