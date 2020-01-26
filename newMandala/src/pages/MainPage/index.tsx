import React from 'react';

import SideBar from '../../components/SideBar';
import Manadala from '../../components/Mandala';
import SettingBar from "../../components/SettingBar";

import './style.scss';
import Mandala from "../../components/Mandala";

class MainPage extends React.Component {
  render(): JSX.Element {
    return (
      <div className="MainPage">
        <SideBar />
        <Mandala />
        <SettingBar />
      </div>
    );
  }
}

export default MainPage;