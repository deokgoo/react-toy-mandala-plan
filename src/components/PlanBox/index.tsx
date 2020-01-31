import React from 'react';
import * as types from './types';
import './style.scss';

import { FillBigBox, EmptyBigBox } from '../BigBox';

class PlanBox extends React.Component<types.propsInterface> {
  constructor(props: types.propsInterface) {
    super(props)
  }

  render() {
    return (
      <div className="PlanBox">
        <EmptyBigBox />
        <EmptyBigBox />
        <EmptyBigBox />
        <EmptyBigBox />
        <FillBigBox />
        <EmptyBigBox />
        <EmptyBigBox />
        <EmptyBigBox />
        <EmptyBigBox />
      </div>
    )
  }
}

export default PlanBox;