import { UPDATE_BOXSELECTOR } from "./type";

export const updateBoxSelector = (data: {boxNum: number, row: number, col: number}) => {
  const { boxNum, row, col } = data;
  return ({
    type: UPDATE_BOXSELECTOR,
    payload: {
      boxNum, row, col, isSelect: true
    }
})};
