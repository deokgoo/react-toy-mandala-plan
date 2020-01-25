import React from 'react';
import {connect} from 'react-redux';
import './style.scss';
import {color} from '../../redux/boxStore/reducer/type';
import {mapStateToProps} from './maptStateToProps';
import {EnumValues} from 'enum-values';
import { updateText } from '../../redux/boxStore/action';

export interface propsInterface {
  boxNum?: number,
  row?: number,
  col?: number,
  isSelect?: boolean,
  boxText?: string,
  boxColor?: color,
  coreBoxTextColorList?: Array<color>,
  sideBoxTextColorList?: Array<color>,
  updateText?: any
}

class Setting extends React.Component<propsInterface, propsInterface> {
  constructor(props: propsInterface) {
    super(props);
    this.state = {
      ...props
    }
  }
  getTextColor(): string {
    if (this.props.row === undefined) return "";
    if (this.props.col === undefined) return "";
    if (this.props.coreBoxTextColorList === undefined) return "";
    if (this.props.sideBoxTextColorList === undefined) return "";
    if (this.props.boxNum === undefined) return "";

    const {boxNum, coreBoxTextColorList, sideBoxTextColorList} = this.props;
    const {row, col} = this.props;
    const insideBoxNum = row * 3 + col;

    if (boxNum === 4) {
      return coreBoxTextColorList[insideBoxNum];
    } else {
      if (insideBoxNum === 4) {
        return coreBoxTextColorList[boxNum];
      } else {
        return insideBoxNum > 4 ? sideBoxTextColorList[boxNum - 1] : sideBoxTextColorList[boxNum];
      }
    }
  }

  componentWillReceiveProps(nextProps: propsInterface) {
    this.setState({
      ...nextProps
    })
  }

  save() {
    let {boxNum, row, col, boxText, boxColor} = this.state;
    this.props.updateText(boxText, boxNum, row, col);
  }

  render(): JSX.Element {
    const { boxText, boxColor } = this.state;
    return (
        <div className="Setting container-fluid h-100">
          <div className="row w-100 justify-content-center m-0">
            <div className="col-10 mt-5">
              <div className={`boxPresent bg-${boxColor} text-${this.getTextColor()}`}>
                <div className="boxPresent__text">{boxText}</div>
              </div>
            </div>
          </div>
          <div className="row w-100 justify-content-center m-0 mt-3">
            <input type="text" className="form-control col-9" placeholder="Title" value={boxText}
                   onChange={(e)=>{this.setState({boxText: e.target.value})}}
                   onKeyDown={(e)=>{}} />
          </div>
          <div className="row w-100 justify-content-center m-0 mt-3">
            <input type="text" className="form-control col-9" placeholder="Title"
                   value={ EnumValues.getNameFromValue(color, this.getTextColor()) !== null ? this.getTextColor() : "" } />
          </div>
          <div className="row w-100 justify-content-center mt-3">
            <div className="col-11">
              box-color
              : {boxColor !== undefined ? EnumValues.getNameFromValue(color, boxColor) : ""}
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="btn btn-info" onClick={()=>this.save()}>save</div>
          </div>
        </div>
    )
  }
}
export default connect(
    mapStateToProps,
    { updateText }
)(Setting)