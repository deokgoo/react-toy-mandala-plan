import React, {ReactNode} from 'react';
import { connect } from 'react-redux';
import CoreBox from '../../components/CoreBox'
import SideBox from '../../components/SideBox';
import { mapStateToProps } from './connectMap';
import './style.scss';

const coreBoxNumber = 4;

class MainPage extends React.Component<mapToProps> {
  constructor(props: mapToProps) {
    super(props);
    console.log(props.coreAllText);
  }
  boxComponents ():Array<ReactNode> {
    let component:Array<ReactNode> = [];

    Array.from({length: 9}).forEach( (_, idx: number) => {
      if(coreBoxNumber === idx) {
        component.push(<CoreBox boxNum={idx} />)
      }else if(this.props.coreAllText[idx]) {
        component.push(<SideBox boxNum={idx} />)
      }
    });

    return component;
  }

  render(): JSX.Element {
    return (
      <div id="stageContainer">
        { this.boxComponents() }
      </div>
    );
  }
}

interface mapToProps {
  coreAllText: Array<string>;
}

export default connect<mapToProps, {}>(
    mapStateToProps,
    {},
)(MainPage);