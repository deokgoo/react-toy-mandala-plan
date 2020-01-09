import React, {Component} from 'react';
import './style.scss'
import {getBoxColorList, getTextColorList} from '../../redux/selector'
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
    const boxPos = this.props.row*3+this.props.col;
    if(this.props.boxColors !== undefined)
      boxColor = this.props.boxColors[this.props.boxNum][boxPos];
    if(this.props.textColors !== undefined)
      textColor = this.props.textColors[this.props.boxNum][boxPos];
    return (
      <input className={`TextBox boxPos${boxPos} bg-${boxColor} text-${textColor}`} key={"test"} value={this.state.boxText}/>
    );
  }
}

const mapStateToProps = (state: any) => {
  const boxColors = getBoxColorList(state.boxStore);
  const textColors = getTextColorList(state.boxStore);
  return { boxColors, textColors };
};

export default connect(
  mapStateToProps,
  null
)(TextBox);