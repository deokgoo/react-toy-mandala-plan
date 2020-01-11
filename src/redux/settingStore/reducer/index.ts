import { AnyAction } from 'redux';
import { UPDATE_BOXSELECTOR } from '../action/type'
import { selectInterface } from './type';

const initialState:selectInterface = {
  boxNum: 0,
  col: 0,
  row: 0,
  isSelect: true,
};

export default (state = initialState, action: AnyAction) => {

  switch (action.type) {
    case UPDATE_BOXSELECTOR: {
      const { boxNum, row, col, isSelect } = action.payload;
      console.log(action.payload);
      return {
        boxNum,
        row,
        col,
        isSelect
      };
    }
    default:
      return state;
  }
}
