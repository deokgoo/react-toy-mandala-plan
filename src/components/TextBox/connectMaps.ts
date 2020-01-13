import { getBoxSelector } from '../../redux/settingStore/selector';
import { updateBoxSelector } from '../../redux/settingStore/action';

export const mapStateToProps = (state: any) => {
  const boxSelector = getBoxSelector(state.settingStore);

  return { boxSelector };
};

export const mapDispaToProps = { updateBoxSelector };