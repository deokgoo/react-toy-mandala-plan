import { getCoreBoxColorList, getCoreTextColorList, getAllBoxText } from '../../redux/boxStore/selector'
import { mapStateToPropsInterface } from './types';

export const mapStateToProps = (state: any): mapStateToPropsInterface => {
  const sideBoxColors = getCoreBoxColorList(state.boxStore);
  const textColors = getCoreTextColorList(state.boxStore);
  const textContents = getAllBoxText(state.boxStore);

  return { sideBoxColors, textColors, textContents };
};