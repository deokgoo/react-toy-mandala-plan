import React, { Component } from 'react';
import './style.scss'

interface stateInterface {
  boxText: string,
  visible: boolean,
}

interface propsInterface {
  boxNum: number,
  coreText: string,
}


class CoreBox extends Component<propsInterface, stateInterface> {
  constructor(props: propsInterface) {
    super(props);
    this.state = {
      boxText: 'test',
      visible: false,
    }
  }

  render(): JSX.Element {
    return (
      <input className={`TextBox bg-primary boxPos${this.props.boxNum}`} key={"test"} value={this.state.boxText} />
    );
  }
}

export default CoreBox;