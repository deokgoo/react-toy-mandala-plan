import {basePropsInterface, connectStateInterface} from './types';
import {
  getAllBoxText,
  getCoreColor,
  getCoreText,
  getCoreTextColor,
  getSideBoxColorList,
  getSideTextColorList
} from '../../redux/boxStore/selector';

export const mapStateToProps = (state: any, ownProps: basePropsInterface): connectStateInterface => {
  const sideBoxColors = getSideBoxColorList(state.boxStore, ownProps.boxNum);
  const coreBoxColor = getCoreColor(state.boxStore, ownProps.boxNum);
  const sideTextColor = getSideTextColorList(state.boxStore, ownProps.boxNum);
  const coreTextColor = getCoreTextColor(state.boxStore, ownProps.boxNum);
  const coreTexts = getCoreText(state.boxStore, ownProps.boxNum);
  const allBoxTexts = getAllBoxText(state.boxStore);

  return { sideBoxColors, sideTextColor, allBoxTexts, coreText: coreTexts, coreTextColor, coreBoxColor };
};