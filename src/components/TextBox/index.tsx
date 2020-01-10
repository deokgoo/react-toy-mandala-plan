import React, {Component} from 'react';
import './style.scss'
import {color} from '../../redux/reducers/boxStoreType';

interface stateInterface {
  boxText: string,
  visible: boolean,
}

interface propsInterface {
  row: number,
  col: number,
  boxText: string,
  boxTextColor: color,
  boxColor: color,
}

class TextBox extends Component<propsInterface, stateInterface> {
  constructor(props: propsInterface) {
    super(props);
    this.state = {
      boxText: this.props.boxText,
      visible: false
    }
  }

  render(): JSX.Element {
    let { boxText, boxColor, boxTextColor} = this.props;
    const boxPos = this.props.row*3+this.props.col;
    return (
      <div className={`TextBox boxPos${boxPos} bg-${boxColor} text-${boxTextColor}`} key={"test"}>
        <div className={`textContent`}> {boxText} </div>
      </div>
    );
  }
}

export default TextBox;