import {color, stateInterface} from "./reducers/boxStoreType";

export const getBoxColorList = (state: stateInterface) => state.boxColors;

export const getTextColorList = (state: stateInterface) => state.textColors;

export const getBoxTextList = (state: stateInterface) => state.boxTests;
