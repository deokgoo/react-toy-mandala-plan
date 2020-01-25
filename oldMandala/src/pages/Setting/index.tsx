import React from 'react';
import { connect } from 'react-redux';
import './style.scss';
import { color } from '../../redux/boxStore/reducer/type';
import { mapStateToProps } from './maptStateToProps';
import { EnumValues } from 'enum-values';

export interface propsInterface {
  boxNum?: number,
  row?: number,
  col?: number,
  isSelect?: boolean,
  boxText?: string,
  boxColor?: color,
  coreBoxTextColorList?: Array<color>,
  sideBoxTextColorList?: Array<color>,
}

class Setting extends React.Component<propsInterface>{
  getTextColor(): string {
    if(this.props.row===undefined) return "";
    if(this.props.col===undefined) return "";
    if(this.props.coreBoxTextColorList===undefined) return "";
    if(this.props.sideBoxTextColorList===undefined) return "";
    if(this.props.boxNum===undefined) return "";

    const { boxNum, coreBoxTextColorList, sideBoxTextColorList } = this.props;
    const { row, col } = this.props;
    const insideBoxNum = row*3 + col;

    if(boxNum === 4) {
      return coreBoxTextColorList[insideBoxNum];
    }else {
      if(insideBoxNum === 4){
        return coreBoxTextColorList[boxNum];
      }else {
        return insideBoxNum>4 ? sideBoxTextColorList[boxNum-1] : sideBoxTextColorList[boxNum];
      }
    }
  }
  render(): JSX.Element{
    const { boxText, boxColor } = this.props;
    return (
      <div className="Setting container-fluid h-100">
        <div className="row w-100 justify-content-center">
          <div className="col-10 mt-5">
            <div className={`boxPresent bg-${boxColor} text-${this.getTextColor()}`}>
              <div className="boxPresent__text">{ boxText }</div>
            </div>
          </div>
        </div>
        <div className="row w-100 justify-content-center mt-3" >
          <div className="col-11">
            text : { boxText }
          </div>
        </div>
        <div className="row w-100 justify-content-center mt-3" >
          <div className="col-11">
            text-color : { boxColor!==undefined? EnumValues.getNameFromValue(color, this.getTextColor()) : "" }
          </div>
        </div>
        <div className="row w-100 justify-content-center mt-3" >
          <div className="col-11">
            box-color : { boxColor!==undefined? EnumValues.getNameFromValue(color, boxColor) : "" }
          </div>
        </div>
      </div>
  )}
}

export default connect(
  mapStateToProps,
  null
)(Setting)