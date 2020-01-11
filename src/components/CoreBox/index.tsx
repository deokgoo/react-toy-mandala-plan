import React, { Component } from 'react';
import TextBox from '../TextBox';
import { getCoreBoxColorList, getCoreTextColorList, getBoxAllText } from '../../redux/boxStore/selector'
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
  textColors?: Array<color>,
  boxColors?: Array<color>,
}


class CoreBox extends Component<propsInterface, stateInterface> {
  constructor(props: propsInterface) {
    super(props);
  }

  BoxComponent = () => {
    if(!this.props.textColors) return;
    if(!this.props.boxColors) return;
    if(!this.props.textContent) return;

    const elements = [];
    let { textColors, boxColors, textContent, boxNum } = this.props;
    for (let i=0;i<3;i++){
      for(let j=0;j<3;j++){
        elements.push(
          <TextBox
            boxNum={this.props.boxNum}
            row={i}
            col={j}
            boxTextColor={textColors[i*3+j]}
            boxColor={boxColors[i*3+j]}
            boxText={textContent[boxNum][i*3+j]}
            key={i*3 + j} />
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

const mapStateToProps = (state: any) => {
  const boxColors = getCoreBoxColorList(state.boxStore);
  const textColors = getCoreTextColorList(state.boxStore);
  const textContent = getBoxAllText(state.boxStore);
  return { boxColors, textColors, textContent };
};

export default connect(
    mapStateToProps,
    null
)(CoreBox);