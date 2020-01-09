import React, { Component } from 'react';
import TextBox from '../TextBox';
import './style.scss'

interface stateInterface {
  coreText: string,
  sideVisible: Boolean,
  coreInCore: Boolean,
}

interface propsInterface {
  boxNum: number
}


class CoreBox extends Component<propsInterface, stateInterface> {
  constructor(props: propsInterface) {
    super(props);
  }

  // handleTextChange = (e: React.FormEvent<HTMLInputElement>) => {
  //   //TODO : textChange : if that box is core
  // };

  SideBox = () => {
    return(
        <div>
          <TextBox boxNum={this.props.boxNum} row={0} col={0} coreText={"something"}></TextBox>
          <TextBox boxNum={this.props.boxNum} row={0} col={1} coreText={"something"}></TextBox>
          <TextBox boxNum={this.props.boxNum} row={0} col={2} coreText={"something"}></TextBox>
          <TextBox boxNum={this.props.boxNum} row={1} col={0} coreText={"something"}></TextBox>
          <TextBox boxNum={this.props.boxNum} row={1} col={1} coreText={"core"}></TextBox>
          <TextBox boxNum={this.props.boxNum} row={1} col={2} coreText={"something"}></TextBox>
          <TextBox boxNum={this.props.boxNum} row={2} col={0} coreText={"something"}></TextBox>
          <TextBox boxNum={this.props.boxNum} row={2} col={1} coreText={"something"}></TextBox>
          <TextBox boxNum={this.props.boxNum} row={2} col={2} coreText={"something"}></TextBox>
        </div>
    )
  };

  render(): JSX.Element {
    return (
      <div className={`CoreBox coreBoxPos${this.props.boxNum}`} >
        <this.SideBox />
      </div>
    );
  }
}

export default CoreBox;