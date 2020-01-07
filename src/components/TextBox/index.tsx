import React, { Component } from 'react';
import './style.scss'

interface stateInterface {
  boxText: string,
  visible: boolean,
}

interface propsInterface {
  boxNum: number,
  coreText: string,
  color: string,
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

export default CoreBox;