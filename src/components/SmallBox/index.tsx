import React from 'react';
import { connect } from 'react-redux';
import * as types from './types';
import './style.scss';
import { mapDispatchToProps, mapStateToProps } from './connectMap';
import {selectedInfoInterface} from "../../redux/settingStore/reducer/type";

class SmallBox extends React.Component<types.propsInterface, types.stateInterface> {
  constructor(props: types.propsInterface) {
    super(props);
    let { box } = props;
    this.state = {
      bgColor: box.bgColor,
      textColor: box.textColor,
      boxContent: box.boxContent
    }
  }

  componentDidUpdate(prevProps:types.propsInterface, nextProptypes: types.propsInterface) {
    let { bgColor, textColor, boxContent } = this.props.box;
    let condition1 = bgColor !== this.state.bgColor;
    let condition2 = textColor !== this.state.textColor;
    let condition3 = boxContent !== this.state.boxContent;

    if(condition1 || condition2 || condition3) {
      this.setState(() => {
        return {
          bgColor,
          textColor,
          boxContent
        }
      });
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
  };

  render() {
    let { bgColor, textColor, boxContent } = this.state;
    return (
      <div className="FillSmallBox" style={{backgroundColor: bgColor, color: textColor}} onClick={this.selectBox}>
        <div className="FillSmallBox__content-box">
          {boxContent}
        </div>
      </div>
    )
  }
}

export const FillSmallBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(SmallBox);