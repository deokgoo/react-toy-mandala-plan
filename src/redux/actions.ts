import { UPDATE_TEXT, UPDATE_COLOR } from "./actionTypes";

export const updateColor = (color: string, row: number, col: number) => ({
  type: UPDATE_COLOR,
  payload: {
    color,
    row,
    col
  }
});

export const updateText = (content: string, row: number, col: number) => ({
  type: UPDATE_TEXT,
  payload: {
    content,
    row,
    col
  }
});
