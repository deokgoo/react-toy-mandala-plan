import React, {ReactNode} from 'react';
import './style.scss';
import CoreBox from '../../components/CoreBox'
import SideBox from '../../components/SideBox';

const coreBoxNumber = 4;

class MainPage extends React.Component {
  boxComponents ():Array<ReactNode> {
    let component:Array<ReactNode> = [];

    Array.from({length: 9}).forEach( (_, idx: number) => {
      if(coreBoxNumber === idx) {
        component.push(<CoreBox boxNum={idx} />)
      }else {
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

export default MainPage;