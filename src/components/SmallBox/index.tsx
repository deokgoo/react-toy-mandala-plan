import React, { CSSProperties } from 'react';
import { connect } from 'react-redux';
import * as types from './types';
import './style.scss';
import { mapDispatchToProps, mapStateToProps } from './connectMaps';
import {color} from "../../redux/boxStore/reducer/type";

type totalPropsInterface = types.propsInterface & types.mapDispatchToPropsInterface & types.stateInterface;

class SmallBox extends React.Component<totalPropsInterface, types.stateInterface> {
  constructor(props: totalPropsInterface) {
    super(props);
  }

  render() {
    let boxColor:color = this.props.boxColor;
    let textColor:color = this.props.textColor;
    let content:string = this.props.boxContent;
    const smallBoxStyle:CSSProperties = {
      backgroundColor: boxColor.toString(),
      color: textColor.toString()
    };
    return (
      <div className="FillSmallBox" style={smallBoxStyle}>
        <div className="FillSmallBox__content-box">
          {content}
        </div>
      </div>
    )
  }
}

export const FillSmallBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(SmallBox);

export const EmptySmallBox = () => <div className="EmptySmallBox" />;