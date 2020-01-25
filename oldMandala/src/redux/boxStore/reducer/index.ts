import { UPDATE_COLOR, UPDATE_TEXT } from "../action/type";
import {Action, AnyAction} from "redux";
import {color, stateInterface} from "./type";

const initialState:stateInterface = {
  sideBoxColors: [
    color.green,
    color.blue,
    color.red,
    color.yellow,
    color.green,
    color.sora,
    color.blue,
    color.yellow,
  ],
  coreBoxColors: [
    color.red,
    color.white,
    color.white,
    color.white,
    color.gray,
    color.sora,
    color.white,
    color.white,
    color.white,
  ],
  sideBoxTextColors: [
    color.white,
    color.white,
    color.white,
    color.white,
    color.white,
    color.white,
    color.white,
    color.white,
  ],
  coreBoxTextColors: [
    color.white,
    color.white,
    color.white,
    color.white,
    color.white,
    color.yellow,
    color.white,
    color.white,
    color.white,
  ],
  boxTexts: [
    ['hi', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['test!!!', '', '', '', 'test', 'sora', '', '', ''],
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
      // state.sideBoxColors[row][col] = color;
      return {
        ...state
      };
    }
    case UPDATE_TEXT: {
      // const { content, row, col } = action.payload;
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
