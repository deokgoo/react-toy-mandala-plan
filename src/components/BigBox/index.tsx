import React, {ReactComponentElement} from 'react';
import * as types from './types';
import './style.scss';

import { FillSmallBox } from '../SmallBox/index';
import { connect } from 'react-redux';
import { mapStateToProps } from './connectMap';

class BigBox extends React.Component<types.propsInterface> {

  setSmallBox() {
    let { bigBoxNum, coreBoxTexts } = this.props;
    let components:Array<ReactComponentElement<any>> = [];

    coreBoxTexts.forEach((content, idx) => {
      let row = Math.floor(idx/3);
      let col = idx%3;
      components.push(<FillSmallBox bigBoxNum={bigBoxNum} row={row} col={col} key={idx}/>)
    });

    return components;
  }

  render() {
    return (
      <div className="FillBigBox">
        {this.setSmallBox()}
      </div>
    );
  }
}

export const FillBigBox = connect(
  mapStateToProps
)(BigBox);

export const EmptyBigBox = () => <div className="EmptyBigBox" />;