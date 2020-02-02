import React, { CSSProperties } from 'react';
import { connect } from 'react-redux';
import * as types from './types';
import './style.scss';
import { mapDispatchToProps, mapStateToProps } from './connectMap';
import {selectedInfoInterface} from "../../redux/settingStore/reducer/type";

class SmallBox extends React.Component<types.propsInterface, types.stateInterface> {
  constructor(props: types.propsInterface, states: types.stateInterface) {
    super(props, states);
    let { bgColor, textColor, boxContent } = props.box;
    this.state = {
      bgColor,
      textColor,
      boxContent
    }
  }

  selectBox = () => {
    const { bigBoxNum, row, col} = this.props;
    const { updateBoxSelector } = this.props;
    let selectedInfo:selectedInfoInterface = {
      boxNum: bigBoxNum,
      row,
      col
    };
    updateBoxSelector(selectedInfo);
  }

  render() {
    const smallBoxStyle:CSSProperties = {
      backgroundColor: this.state.bgColor,
      color: this.state.textColor
    };
    return (
      <div className="FillSmallBox" style={smallBoxStyle} onClick={this.selectBox}>
        <div className="FillSmallBox__content-box">
          {this.state.boxContent}
        </div>
      </div>
    )
  }
}

export const FillSmallBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(SmallBox);