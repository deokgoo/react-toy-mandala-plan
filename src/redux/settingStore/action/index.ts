import { UPDATE_BOXSELECTOR } from './type';
import { selectedBoxInterface } from '../reducer/type';

export const updateBoxSelector = (data: { box: selectedBoxInterface }) => {
  return ({
    type: UPDATE_BOXSELECTOR,
    payload: {
      box: data.box,
      isSelect: true
    }
})};
