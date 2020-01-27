import React from 'react';
import * as types from './types';
import './style.scss';

import BigBox from '../BigBox';

class PlanBox extends React.Component<types.propsInterface> {
  constructor(props: types.propsInterface) {
    super(props)
  }

  render() {
    return (
      <div className="PlanBox">
        <BigBox />
        <BigBox />
        <BigBox />
        <BigBox />
        <BigBox />
        <BigBox />
        <BigBox />
        <BigBox />
        <BigBox />
      </div>
    )
  }
}

export default PlanBox;