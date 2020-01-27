import React from 'react';
import * as types from './types';
import './style.scss';

import SmallBox from '../SmallBox';

class BigBox extends React.Component<types.propsInterface> {
  constructor(props: types.propsInterface) {
    super(props)
  }

  render() {
    return (
      <div className="BigBox">
        <SmallBox />
        <SmallBox />
        <SmallBox />
        <SmallBox />
        <SmallBox />
        <SmallBox />
        <SmallBox />
        <SmallBox />
        <SmallBox />
      </div>
    )
  }
}

export default BigBox;