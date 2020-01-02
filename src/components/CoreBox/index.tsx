import React, { Component } from 'react';
import TextBox from '../TextBox';
import './style.scss'

interface stateInterface {
  coreText: string,
  sideVisible: Boolean,
  coreInCore: Boolean,
}

interface propsInterface {
  boxNum: number,
  coreBoxHandler: (boxNum: number) => void
}


class CoreBox extends Component<propsInterface, stateInterface> {
  constructor(props: propsInterface) {
    super(props);
  }

  handleTextChange = (e: React.FormEvent<HTMLInputElement>) => {
    //TODO : textChange : if that box is core
  };

  SideBox = () => {
    return(
        <div>
          <TextBox  boxNum={0} coreText={"something"}></TextBox>
          <TextBox  boxNum={1} coreText={"something"}></TextBox>
          <TextBox  boxNum={2} coreText={"something"}></TextBox>
          <TextBox  boxNum={3} coreText={"something"}></TextBox>
          <TextBox  boxNum={4} coreText={"something"}></TextBox>
          <TextBox  boxNum={5} coreText={"something"}></TextBox>
          <TextBox  boxNum={6} coreText={"something"}></TextBox>
          <TextBox  boxNum={7} coreText={"something"}></TextBox>
          <TextBox  boxNum={8} coreText={"something"}></TextBox>
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