import React, { CSSProperties } from 'react';
import { connect } from 'react-redux';
import * as types from './types';
import './style.scss';
import { mapDispatchToProps, mapStateToProps } from './connectMap';

class SmallBox extends React.Component<types.propsInterface, types.stateInterface> {
  constructor(props: types.propsInterface) {
    super(props);
    let { bgColor, textColor, boxContent } = props.box;
    this.state = {
      bgColor,
      textColor,
      boxContent
    }
  }

  render() {
    const smallBoxStyle:CSSProperties = {
      backgroundColor: this.state.bgColor,
      color: this.state.textColor
    };
    return (
      <div className="FillSmallBox" style={smallBoxStyle}>
        <div className="FillSmallBox__content-box">
          {this.state.boxContent}
        </div>
      </div>
    )
  }
}

export const FillSmallBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(SmallBox);