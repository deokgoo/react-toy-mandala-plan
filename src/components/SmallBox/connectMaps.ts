import { getBoxSelector } from '../../redux/settingStore/selector';
import { updateBoxSelector } from '../../redux/settingStore/action';

export const mapStateToProps = (state: any) => {
  const box = getBoxSelector(state.settingStore);

  return { box };
};

export const mapDispatchToProps = {
  updateBoxSelector,
};