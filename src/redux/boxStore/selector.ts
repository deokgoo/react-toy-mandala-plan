import { boxStoreStateInterface } from "./reducer/type";

export const getCoreBoxColorList = (state: boxStoreStateInterface) => state.coreBoxColors;
export const getSideBoxColorList = (state: boxStoreStateInterface) => state.sideBoxColors;
export const getCoreTextColorList = (state: boxStoreStateInterface) => state.coreBoxTextColors;
export const getSideTextColorList = (state: boxStoreStateInterface) => state.sideBoxTextColors;
export const getCoreBoxTexts = (state: boxStoreStateInterface) => state.coreBoxTexts;
export const getSideBoxTexts = (state: boxStoreStateInterface) => state.sideBoxTexts;