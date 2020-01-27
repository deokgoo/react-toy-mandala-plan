import { UPDATE_BOX_COLOR, UPDATE_TEXT_COLOR, UPDATE_TEXT } from "./type";

export const updateBoxColor = (color: string, boxNum: number, row: number, col: number) => ({
  type: UPDATE_BOX_COLOR,
  payload: {
    boxNum,
    row,
    col,
    color
  }
});

export const updateTextColor = (color: string, boxNum: number, row: number, col: number) => ({
  type: UPDATE_TEXT_COLOR,
  payload: {
    boxNum,
    row,
    col,
    color
  }
});

export const updateText = (content: string, boxNum: number, row: number, col: number) => ({
  type: UPDATE_TEXT,
  payload: {
    boxNum,
    row,
    col,
    content
  }
});
