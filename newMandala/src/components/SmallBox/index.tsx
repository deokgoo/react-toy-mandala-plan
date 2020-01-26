import React from 'react';
import * as types from './types';
import './style.scss';

class SmallBox extends React.Component<types.propsInterface> {
  constructor(props: types.propsInterface) {
    super(props)
  }

  render() {
    return (
      <div className="SmallBox">

      </div>
    )
  }
}

export default SmallBox;