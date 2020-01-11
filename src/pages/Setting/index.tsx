import React from 'react';
import { connect } from 'react-redux';
import { getBoxSelector } from '../../redux/settingStore/selector';
import {getBoxText, getCoreColor, getSideBoxColorList} from '../../redux/boxStore/selector';
import { color } from '../../redux/boxStore/reducer/type';

export interface propsInterface {
  boxNum?: number,
  row?: number,
  col?: number,
  isSelect?: boolean,
  boxText?: string,
  boxColor?: color
}

class Setting extends React.Component<propsInterface>{
  render(): JSX.Element{
    const {boxNum, row, col, boxText, boxColor } = this.props;
    return (
      <div>
        {boxNum} {row} {col} {boxText} {boxColor}
      </div>
  )}
}

const mapStateToProps = (state: any) => {
  const boxSelector = getBoxSelector(state.settingStore);
  const insideNum = boxSelector.row*3 + boxSelector.col;
  const boxText = boxSelector.isSelect? getBoxText(state.boxStore, boxSelector.boxNum, insideNum): "";
  let boxColor: color;
  if(boxSelector.boxNum === 4) {
    // Core
    boxColor = getCoreColor(state.boxStore, insideNum)
  } else {
    if(insideNum === 4)
      boxColor = getCoreColor(state.boxStore, boxSelector.boxNum);
    else
      boxColor = getSideBoxColorList(state.boxStore, boxSelector.boxNum);
  }
  return {...boxSelector, boxText, boxColor};
};

export default connect(
  mapStateToProps,
  null
)(Setting)