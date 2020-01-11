import React, { Component } from 'react';
import TextBox from '../TextBox';
import {
  getBoxAllText, getCoreColor, getCoreText, getCoreTextColor,
  getSideBoxColorList,
  getSideTextColorList
} from '../../redux/boxStore/selector'
import { connect } from "react-redux";
import './style.scss'
import { color } from '../../redux/boxStore/reducer/type';

interface stateInterface {
  coreText: string,
  sideVisible: Boolean,
  coreInCore: Boolean,
}

interface propsInterface {
  boxNum: number,
  textContent?: Array<string>,
  textColor?: color,
  boxColors?: color,
  coreText?: string,
  coreTextColor?: color,
  coreBoxColor?: color,
}


class SideBox extends Component<propsInterface, stateInterface> {
  constructor(props: propsInterface) {
    super(props);
  }

  BoxComponent = () => {
    if(!this.props.textColor) return;
    if(!this.props.boxColors) return;
    if(!this.props.textContent) return;
    if(!this.props.coreBoxColor) return;
    if(!this.props.coreTextColor) return;
    if(this.props.coreText===undefined) return;

    const elements = [];
    let { textColor, boxColors, textContent, boxNum } = this.props;
    let { coreBoxColor, coreTextColor, coreText} = this.props;

    for (let i=0;i<3;i++){
      for(let j=0;j<3;j++){
        elements.push(
            i*3+j===4 ?
          <TextBox
            boxNum={this.props.boxNum}
            row={i}
            col={j}
            boxTextColor={coreTextColor}
            boxColor={coreBoxColor}
            boxText={coreText}
            key={i*3+j} /> :
          <TextBox
            boxNum={this.props.boxNum}
            row={i}
            col={j}
            boxTextColor={textColor}
            boxColor={boxColors}
            boxText={textContent[boxNum][i*3+j]}
            key={i*3+j} />
        )
      }
    }
    return elements;
  };

  render(): JSX.Element {
    return (
      <div className={`CoreBox coreBoxPos${this.props.boxNum}`} >
        {this.BoxComponent()}
      </div>
    );
  }
}

const mapStateToProps = (state: any, ownProps: propsInterface) => {
  const boxColors = getSideBoxColorList(state.boxStore, ownProps.boxNum);
  const textColor = getSideTextColorList(state.boxStore, ownProps.boxNum);
  const textContent = getBoxAllText(state.boxStore);

  const coreText = getCoreText(state.boxStore, ownProps.boxNum);
  const coreTextColor = getCoreTextColor(state.boxStore, ownProps.boxNum);
  const coreBoxColor = getCoreColor(state.boxStore, ownProps.boxNum);

  return { boxColors, textColor, textContent, coreText, coreTextColor, coreBoxColor };
};

export default connect(
    mapStateToProps,
    null
)(SideBox);