import {UPDATE_BOX_COLOR, UPDATE_TEXT_COLOR, UPDATE_TEXT} from "../action/type";
import { AnyAction } from 'redux';
import { color, boxStoreStateInterface } from "./type";

const initialState:boxStoreStateInterface = {
  sideBoxColors: [
    color.white,
    color.white,
    color.white,
    color.white,
    color.white,
    color.white,
    color.white,
    color.white,
  ],
  coreBoxColors: [
    color.gray,
    color.gray,
    color.gray,
    color.gray,
    color.white,
    color.gray,
    color.gray,
    color.gray,
    color.gray,
  ],
  sideBoxTextColors: [
    color.black,
    color.black,
    color.black,
    color.black,
    color.black,
    color.black,
    color.black,
    color.black,
  ],
  coreBoxTextColors: [
    color.white,
    color.white,
    color.white,
    color.white,
    color.black,
    color.white,
    color.white,
    color.white,
    color.white,
  ],
  sideBoxTexts: [
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
  ],
  coreBoxTexts: ['', '', '', '', '', '', '', '', '']
};

const CORE_NUMBER = 4;

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case UPDATE_BOX_COLOR: {
      const { boxNum, row, col, color } = action.payload;
      let smallBoxNum = row*3 + col;
      let boxNumCopy = boxNum;
      let newState = {
        ...state
      };

      if(boxNum === CORE_NUMBER) {
        newState.coreBoxColors[smallBoxNum] = color;
      }else {
        if(boxNum>4) boxNumCopy--;
        newState.sideBoxColors[boxNumCopy] = color;
      }

      return newState;
    }

    case UPDATE_TEXT_COLOR: {
      const { boxNum, row, col, color } = action.payload;
      let smallBoxNum = row*3 + col;
      let boxNumCopy = boxNum;
      let newState = {
        ...state
      };

      if(boxNum === CORE_NUMBER) {
        newState.coreBoxTextColors[smallBoxNum] = color;
      }else {
        if(boxNum>4) boxNumCopy--;
        newState.sideBoxTextColors[boxNumCopy] = color;
      }

      return newState;
    }

    case UPDATE_TEXT: {
      const { boxNum, row, col, content } = action.payload;
      let smallBoxNum = row*3 + col;
      let boxNumCopy = boxNum;
      let newState:any = {};

      if(boxNum === CORE_NUMBER) {
        let copyTexts:any = [...state.coreBoxTexts];
        copyTexts[smallBoxNum] = content;
        newState.coreBoxTexts = copyTexts;
      }else {
        if(boxNumCopy>4) boxNumCopy--;
        if(smallBoxNum>4) smallBoxNum--;
        let copyTexts:any = [...state.sideBoxTexts];
        copyTexts[boxNumCopy][smallBoxNum] = content;
        newState.sideBoxTexts = copyTexts;
      }

      return Object.assign({}, state, newState )
    }

    default:
      return state;
  }
}
