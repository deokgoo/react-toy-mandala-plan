import { AnyAction } from 'redux';
import { UPDATE_BOXSELECTOR } from '../action/type'
import { selectInterface } from './type';

const initialState:selectInterface = {
  selectedInfo: {
    boxNum: 0,
    row: 0,
    col: 0,
  },
  isSelect: false,
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case UPDATE_BOXSELECTOR: {
      const { box } = action.payload;
      return {
        box,
        isSelect: true
      };
    }
    default:
      return state;
  }
}
