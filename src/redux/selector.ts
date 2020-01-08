import {color, stateInterface} from "./reducers/boxStoreType";

export const getBoxColorList = (store: stateInterface) => store.boxColors;

export const getBoxTextList = (store: stateInterface) => store.boxTests;
