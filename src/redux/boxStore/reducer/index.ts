import {UPDATE_BOX_COLOR, UPDATE_TEXT_COLOR, UPDATE_TEXT} from "../action/type";
import { AnyAction } from 'redux';
import { color, boxStoreStateInterface } from "./type";

const initialState:boxStoreStateInterface = {
  sideBoxColors: [
    color.green,
    color.blue,
    color.blue,
    color.yellow,
    color.green,
    color.lite_blue,
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
    color.lite_blue,
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
  allBoxTexts: [
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

const CORE_NUMBER = 4;

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case UPDATE_BOX_COLOR: {
      const { boxNum, row, col, color } = action.payload;

      if(boxNum === CORE_NUMBER) {
        state.coreBoxColors[row*3+col] = color;
      }else {
        state.sideBoxColors[row*3+col] = color;
      }

      return state;
    }

    case UPDATE_TEXT_COLOR: {
      const { boxNum, row, col, color } = action.payload;

      if(boxNum === CORE_NUMBER) {
        state.coreBoxTextColors[row*3+col] = color;
      }else {
        state.sideBoxTextColors[row*3+col] = color;
      }

      return state;
    }

    case UPDATE_TEXT: {
      const { content, boxNum, row, col } = action.payload;

      state.allBoxTexts[boxNum][row*3+col] = content;

      return state;
    }

    default:
      return state;
  }
}