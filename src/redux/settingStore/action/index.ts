import { UPDATE_BOXSELECTOR } from './type';
import { selectedInfoInterface } from '../reducer/type';

export const updateBoxSelector = (data: { box: selectedInfoInterface }) => {
  return ({
    type: UPDATE_BOXSELECTOR,
    payload: {
      box: data.box,
      isSelect: true
    }
})};
