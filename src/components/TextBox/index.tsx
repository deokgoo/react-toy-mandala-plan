import React, { Component } from 'react';
import './style.scss'
import { color } from '../../redux/boxStore/reducer/type';
import { updateBoxSelector } from "../../redux/settingStore/action";
import { connect } from 'react-redux'
import {getBoxSelector} from "../../redux/settingStore/selector";

interface stateInterface {
  boxText: string,
  visible: boolean,
}

interface propsInterface {
  row: number,
  col: number,
  boxNum: number,
  boxText: string,
  boxTextColor: color,
  boxColor: color,
}

interface propActions {
  updateBoxSelector?: (data: {boxNum:number , row: number, col: number}) => void
  boxSelector?: any
}

class TextBox extends Component<propsInterface & propActions, stateInterface> {
  constructor(props: propsInterface & propActions) {
    super(props);
    const {boxNum, row, col} = this.props;
    const {boxSelector} = this.props;
    this.state = {
      boxText: this.props.boxText,
      visible: false,
    }
  }
  isSelected = ():boolean => {
    const { boxNum, row, col } = this.props;
    const { boxSelector } = this.props;
    return boxNum === boxSelector.boxNum && row === boxSelector.row && col === boxSelector.col
  }
  render(): JSX.Element {
    let { boxText, boxColor, boxTextColor} = this.props;
    let { row, col } = this.props;
    let { boxNum } = this.props;

    const boxPos = row*3 + col;
    return (
      <div className={`TextBox boxPos${boxPos} bg-${boxColor} text-${boxTextColor}`+(this.isSelected()?" selectedBox":"")} key={"test"} onClick={()=>{if(this.props.updateBoxSelector) this.props.updateBoxSelector({boxNum, row, col});}}>
        <div className={`textContent`}> {boxText} </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const boxSelector = getBoxSelector(state.settingStore);

  return { boxSelector };
};

export default connect<{}, propActions, propsInterface>(
  mapStateToProps,
  { updateBoxSelector }
)(TextBox);
