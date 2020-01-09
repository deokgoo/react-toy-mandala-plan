import React, {Component} from 'react';
import './style.scss'
import {getBoxColorList, getTextColorList, getBoxTextList} from '../../redux/selector'
import {connect} from "react-redux";
import {color} from '../../redux/reducers/boxStoreType';

interface stateInterface {
  boxText: string,
  visible: boolean,
}

interface propsInterface {
  boxNum: number,
  row: number,
  col: number,
  boxColors?: Array<Array<color>>
  textColors?: Array<Array<color>>
  textContent?: Array<Array<string>>
  coreText: string,
}

class TextBox extends Component<propsInterface, stateInterface> {
  constructor(props: propsInterface) {
    super(props);
    this.state = {
      boxText: this.props.coreText,
      visible: false
    }
  }

  render(): JSX.Element {
    let boxColor:color = color.black;
    let textColor:color = color.black;
    let boxText:string = "";
    const boxPos = this.props.row*3+this.props.col;
    if(this.props.boxColors !== undefined)
      boxColor = this.props.boxColors[this.props.boxNum][boxPos];
    if(this.props.textColors !== undefined)
      textColor = this.props.textColors[this.props.boxNum][boxPos];
    if(this.props.textContent !== undefined)
      boxText = this.props.textContent[this.props.boxNum][boxPos];
    return (
      <div className={`TextBox boxPos${boxPos} bg-${boxColor} text-${textColor}`} key={"test"}>
        <div className={`textContent`}> {boxText} </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const boxColors = getBoxColorList(state.boxStore);
  const textColors = getTextColorList(state.boxStore);
  const textContent = getBoxTextList(state.boxStore);
  return { boxColors, textColors, textContent };
};

export default connect(
  mapStateToProps,
  null
)(TextBox);