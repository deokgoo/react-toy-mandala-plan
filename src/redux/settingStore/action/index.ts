import { UPDATE_BOXSELECTOR } from './type';
import { selectedInfoInterface } from '../reducer/type';

export const updateBoxSelector = (selectedInfo: selectedInfoInterface) => {
  return ({
    type: UPDATE_BOXSELECTOR,
    payload: {
      selectedInfo: selectedInfo,
      isSelect: true
    }
})};
