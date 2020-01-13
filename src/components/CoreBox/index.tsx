import React, {ReactNode} from 'react';
import TextBox from '../TextBox';
import { connect } from 'react-redux';
import { mapStateToProps } from './connectMaps';
import { basePropsInterface, mapStateToPropsInterface } from './types';
import './style.scss'

type propsInterface = basePropsInterface & mapStateToPropsInterface

class CoreBox extends React.Component<propsInterface> {
  constructor(props: propsInterface) {
    super(props);
  }

  createTextBoxComponents():Array<ReactNode> {
    if(!this.props.textColors) return [];
    if(!this.props.sideBoxColors) return [];
    if(!this.props.textContents) return [];

    const elements: Array<ReactNode> = [];
    let { textColors, sideBoxColors, textContents, boxNum } = this.props;

    for (let i=0;i<3;i++){
      for(let j=0;j<3;j++){
        let insideBoxNum = i*3+j;
        elements.push(
          <TextBox
            boxNum={this.props.boxNum}
            row={i}
            col={j}
            boxTextColor={textColors[insideBoxNum]}
            boxColor={sideBoxColors[insideBoxNum]}
            boxText={textContents[boxNum][insideBoxNum]}
            key={insideBoxNum} />
        )
      }
    }

    return elements;
  };

  render(): JSX.Element {
    const { boxNum } = this.props;

    return (
      <div className={`CoreBox coreBoxPos${boxNum}`} >
        { this.createTextBoxComponents() }
      </div>
    );
  }
}

export default connect<mapStateToPropsInterface, null>(
    mapStateToProps,
    null
)(CoreBox);