import React from 'react';
import './style.scss';
import CoreBox from '../../components/CoreBox'

interface stateInterface {
  map: Array<number>
  mapText: Array<string>
}

interface propsInterface {

}

interface coreBoxInterface {
  row: number,
  col: number,
}

class MainPage extends React.Component<propsInterface, stateInterface> {
  constructor(props: propsInterface) {
    super(props);
    this.state = {
      map: [0,0,0,0,1,0,0,0,0],
      mapText: ["","","","","","","","",""]
    }
  }

  render(): JSX.Element {
    return (
      <div id="stageContainer">
        <CoreBox  boxNum={0} coreBoxHandler={()=>{}}></CoreBox>
        <CoreBox  boxNum={1} coreBoxHandler={()=>{}}></CoreBox>
        <CoreBox  boxNum={2} coreBoxHandler={()=>{}}></CoreBox>
        <CoreBox  boxNum={3} coreBoxHandler={()=>{}}></CoreBox>
        <CoreBox  boxNum={4} coreBoxHandler={()=>{}}></CoreBox>
        <CoreBox  boxNum={5} coreBoxHandler={()=>{}}></CoreBox>
        <CoreBox  boxNum={6} coreBoxHandler={()=>{}}></CoreBox>
        <CoreBox  boxNum={7} coreBoxHandler={()=>{}}></CoreBox>
        <CoreBox  boxNum={8} coreBoxHandler={()=>{}}></CoreBox>
      </div>
    );
  }
}

export default MainPage;