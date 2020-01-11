import { UPDATE_TEXT, UPDATE_COLOR } from "./type";

export const updateColor = (color: string, row: number, col: number) => ({
  type: UPDATE_COLOR,
  payload: {
    color,
    row,
    col
  }
});

export const boxSelectHandler = (data: {boxNum: number, row: number, col: number}) => {
  const { boxNum, row, col } = data;
  console.log(boxNum, row, col);
  return ({
    type: UPDATE_TEXT,
    payload: {
      boxNum, row, col
    }
})};

export const updateText = (content: string, row: number, col: number) => ({
  type: UPDATE_TEXT,
  payload: {
    content,
    row,
    col
  }
});
