import React, { Component } from 'react';
import './style.scss'
import  { updateColor, updateText } from '../../redux/actions'
import { getBoxColorList } from '../../redux/selector'
import { connect } from "react-redux";

interface stateInterface {
  boxText: string,
  visible: boolean,
}

interface propsInterface {
  boxNum: number,
  coreText: string,
  color: string,
  getBoxColorList: (state: any)=>any
}

class CoreBox extends Component<propsInterface, stateInterface> {
  constructor(props: propsInterface) {
    super(props);
    this.state = {
      boxText: this.props.coreText,
      visible: false
    }
  }

  render(): JSX.Element {
    return (
      <input className={`TextBox bg-${this.props.color} boxPos${this.props.boxNum}`} key={"test"} value={this.state.boxText}/>
    );
  }
}

const mapStateToProps = (state: any) => {
  const boxColors = getBoxColorList(state);
  return { boxColors };
};

export default connect(
  mapStateToProps,
  { updateColor, updateText }
)(CoreBox);