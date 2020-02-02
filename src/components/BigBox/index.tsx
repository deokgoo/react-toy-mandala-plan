import React, {ReactComponentElement} from 'react';
import * as types from './types';
import './style.scss';

import { FillSmallBox } from '../SmallBox/index';

class BigBox extends React.Component<types.propsInterface, types.propsInterface> {
  constructor(props: types.propsInterface) {
    super(props);

    this.state = {
      ...this.props
    }
  }

  componentDidUpdate(prevProps: any, prevState: any): void {
    console.log("hoho2")
    if(this.state.coreBoxTexts != this.props.coreBoxTexts)
    this.setState(() => {
      return {
        ...this.props
      }
    })
  }

  setSmallBox() {
    let { bigBoxNum, coreBoxTexts } = this.state;
    if(!coreBoxTexts || !coreBoxTexts[bigBoxNum])
      if(bigBoxNum!==4 || !coreBoxTexts) return;
    let components:Array<ReactComponentElement<any>> = [];

    coreBoxTexts.forEach((_, idx) => {
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

export default BigBox;