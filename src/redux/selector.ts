import { stateInterface } from "./reducers/boxStoreType";

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

export const getBoxTextList = (state: stateInterface) => state.boxTexts;
