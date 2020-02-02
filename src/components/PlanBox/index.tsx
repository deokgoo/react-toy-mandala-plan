import React, { ReactComponentElement } from 'react';
import * as types from './types';
import {connect} from 'react-redux';
import './style.scss';

import BigBox from '../BigBox';
import { mapStateToProps } from './connectMap';

class PlanBox extends React.Component<types.propsInterface, types.propsInterface> {

  setBigBox() {
    let { coreBoxTexts } = this.props;
    let components:Array<ReactComponentElement<any>> = [];

    coreBoxTexts.forEach((content, idx) => {
      components.push(<BigBox bigBoxNum={idx} key={idx} coreBoxTexts={coreBoxTexts}/>)
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