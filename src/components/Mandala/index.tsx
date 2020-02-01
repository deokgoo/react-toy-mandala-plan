import React from 'react';
import * as types from './types';
import './style.scss';

import PlanBox from '../PlanBox';

class Mandala extends React.Component<types.propsInterface> {
  render() {
    return (
      <div className="Mandala">
        <PlanBox />
      </div>
    )
  }
}

export default Mandala;