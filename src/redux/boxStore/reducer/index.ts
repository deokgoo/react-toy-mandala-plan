import { UPDATE_COLOR, UPDATE_TEXT } from "../action/type";
import { AnyAction } from 'redux';
import {color, stateInterface} from "./type";

const initialState:stateInterface = {
  sideBoxColors: [
    color.green,
    color.blue,
    color.blue,
    color.yellow,
    color.green,
    color.sora,
    color.blue,
    color.yellow,
  ],
  coreBoxColors: [
    color.red,
    color.yellow,
    color.yellow,
    color.green,
    color.gray,
    color.black,
    color.blue,
    color.red,
    color.sora,
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
    color.black,
    color.white,
    color.white,
    color.white,
  ],
  boxTexts: [
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', 'sdffs', 'df', '', 'dsf', 'sdf', 'sdf', ''],
    ['', '', '', '', 'dsfsd', '', '', '', ''],
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
      const { content, boxNum, row, col } = action.payload;
      let afterState = state;
      let afterBoxTests = state.boxTexts;

      afterBoxTests[boxNum][row*3+col] = content;
      afterState.boxTexts = afterBoxTests;

      return {
        ...afterState,
      };
    }
    default:
      return state;
  }
}
