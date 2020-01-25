import { UPDATE_TEXT, UPDATE_COLOR } from "./type";

export const updateColor = (color: string, boxNum: number, row: number, col: number) => ({
  type: UPDATE_COLOR,
  payload: {
    color,
    row,
    col
  }
});

export const updateText = (content: string, boxNum: number, row: number, col: number) => ({
  type: UPDATE_TEXT,
  payload: {
    content,
    boxNum,
    row,
    col
  }
});
