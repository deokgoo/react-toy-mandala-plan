import React from 'react';
import { connect } from 'react-redux';
import {getBoxSelector} from "../../redux/settingStore/selector";

export interface propsInterface {
  boxNum?: number,
  row?: number,
  col?: number,
  isSelect?: boolean,
}

class Setting extends React.Component<propsInterface>{
  render(): JSX.Element{
    const {boxNum, row, col, isSelect} = this.props;
    return (
      <div>
        {boxNum} {row} {col}
      </div>
  )}
}

const mapStateToProps = (state: any) => {
  const boxSelector = getBoxSelector(state.settingStore);
  return boxSelector;
};

export default connect(
  mapStateToProps,
  null
)(Setting)