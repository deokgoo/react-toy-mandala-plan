import React from 'react';
import './style.scss';
import CoreBox from '../../components/CoreBox'
import SideBox from '../../components/SideBox';
import { connect } from 'react-redux';

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
        <SideBox boxNum={0}></SideBox>
        <SideBox boxNum={1}></SideBox>
        <SideBox boxNum={2}></SideBox>
        <SideBox boxNum={3}></SideBox>
        <CoreBox  boxNum={4}></CoreBox>
        <SideBox boxNum={5}></SideBox>
        <SideBox boxNum={6}></SideBox>
        <SideBox boxNum={7}></SideBox>
        <SideBox boxNum={8}></SideBox>
      </div>
    );
  }
}

export default MainPage;