import React, { ReactComponentElement } from 'react';
import * as types from './types';
import {connect} from 'react-redux';
import './style.scss';

import {EmptyBigBox, FillBigBox} from '../BigBox';
import { mapStateToProps } from './connectMap';

const CORE_BOX_NUM = 4;

class PlanBox extends React.Component<types.propsInterface> {
  setBigBox() {
    let { coreBoxTexts } = this.props;
    let components:Array<ReactComponentElement<any>> = [];

    coreBoxTexts.forEach((content, idx) => {
      components.push(content||idx===CORE_BOX_NUM ? <FillBigBox bigBoxNum={idx} key={idx}/> : <EmptyBigBox key={idx}/>)
    });

    return components;
  }

  render() {
    return (
      <div className="PlanBox">
        {this.setBigBox()}
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(PlanBox);