import React, { Component } from 'react';
import { connect } from 'react-redux'
import { mapDispaToProps, mapStateToProps } from './connectMaps';
import { basePropsInterface, propsActions, stateInterface, } from "./types";
import './style.scss'

type propsInterface = basePropsInterface & propsActions;

class TextBox extends Component<propsInterface, stateInterface> {
  selectHandler() {
    let { boxNum, row, col } = this.props;

    if(this.props.updateBoxSelector)
      this.props.updateBoxSelector({
        boxNum, row, col
      });
  }

  isSelected(): boolean {
    const { boxNum, row, col } = this.props;
    const { boxSelector } = this.props;

    return boxNum === boxSelector.boxNum && row === boxSelector.row && col === boxSelector.col
  }

  setClassName() {
    let { boxColor, boxTextColor } = this.props;
    let { row, col } = this.props;
    const boxPos = row * 3 + col;
    const preFix = 'TextBox';
    let buildClassName = [];

    buildClassName.push(preFix);
    buildClassName.push(`boxPos${boxPos}`);
    buildClassName.push(`bg-${boxColor}`);
    buildClassName.push(`text-${boxTextColor}`);
    buildClassName.push(this.isSelected()?"selectedBox":"");

    return buildClassName.join(" ");
  }

  render(): JSX.Element {
    let { boxText } = this.props;

    return (
      <div className={this.setClassName()} onClick={()=>this.selectHandler()}>
        <div className={`textContent`}> { boxText } </div>
      </div>
    );
  }
}

export default connect<{}, propsActions, basePropsInterface>(
  mapStateToProps,
  mapDispaToProps
)(TextBox);
