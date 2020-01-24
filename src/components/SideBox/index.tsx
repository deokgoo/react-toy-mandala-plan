import React, {ReactNode} from 'react';
import TextBox from '../TextBox';
import { connect } from 'react-redux';
import { mapStateToProps} from './connectMaps';
import { basePropsInterface, mapStateToPropsInterface, stateInterface } from './types';
import './style.scss'

type propsInterface = basePropsInterface & mapStateToPropsInterface;

class SideBox extends React.Component<propsInterface, stateInterface> {
  constructor(props: propsInterface) {
    super(props);
  }
  createTextBoxComponents(): Array<ReactNode> {
    if (!this.props.sideTextColor) return [];
    if (!this.props.sideBoxColors) return [];
    if (!this.props.allBoxTexts) return [];
    if (!this.props.coreBoxColor) return [];
    if (!this.props.coreTextColor) return [];
    if (this.props.coreText === undefined) return [];

    let { sideTextColor, sideBoxColors, allBoxTexts, boxNum } = this.props;
    let { coreBoxColor, coreTextColor, coreText } = this.props;
    const coreNumber = 4;
    const elements: Array<ReactNode> = [];

    const createTextBoxFromCore = (i: number, j: number) => <TextBox
                                    boxNum={boxNum}
                                    row={i}
                                    col={j}
                                    boxTextColor={coreTextColor}
                                    boxColor={coreBoxColor}
                                    boxText={coreText}
                                    key={i * 3 + j}
                                  />;

    const createTextBoxFromSideBox = (i: number, j: number) => <TextBox
                                            boxNum={boxNum}
                                            row={i}
                                            col={j}
                                            boxTextColor={sideTextColor}
                                            boxColor={sideBoxColors}
                                            boxText={allBoxTexts[boxNum][i * 3 + j]}
                                            key={i * 3 + j}
                                          />;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        elements.push(
          i*3+j === coreNumber ? createTextBoxFromCore(i, j) : createTextBoxFromSideBox(i, j)
        )
      }
    }

    return elements;
  };

  render(): JSX.Element {
    const { boxNum } = this.props;

    return (
      <div className={`CoreBox coreBoxPos${boxNum}`}>
        { this.createTextBoxComponents() }
      </div>
    );
  }
}

export default connect<mapStateToPropsInterface, null, basePropsInterface>(
  mapStateToProps,
  null
)(SideBox);