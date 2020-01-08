import { UPDATE_COLOR, UPDATE_TEXT } from "../actionTypes";
import {Action, AnyAction} from "redux";
import {color, stateInterface} from "./boxStoreType";

const initialState:stateInterface = {
  boxColors: [
    [color.white, color.white, color.white, color.white, color.white, color.white, color.white, color.white, color.white],
    [color.white, color.white, color.white, color.white, color.white, color.white, color.white, color.white, color.white],
    [color.white, color.white, color.white, color.white, color.white, color.white, color.white, color.white, color.white],
    [color.white, color.white, color.white, color.white, color.white, color.white, color.white, color.white, color.white],
    [color.white, color.white, color.white, color.white, color.gray, color.white, color.white, color.white, color.white],
    [color.white, color.white, color.white, color.white, color.white, color.white, color.white, color.white, color.white],
    [color.white, color.white, color.white, color.white, color.white, color.white, color.white, color.white, color.white],
    [color.white, color.white, color.white, color.white, color.white, color.white, color.white, color.white, color.white],
    [color.white, color.white, color.white, color.white, color.white, color.white, color.white, color.white, color.white],
  ],
  boxTests: [
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
  ],
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case UPDATE_COLOR: {
      const { color, row, col } = action.payload;
      state.boxColors[row][col] = color;
      return {
        ...state
      };
    }
    case UPDATE_TEXT: {
      const { content, row, col } = action.payload;
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
