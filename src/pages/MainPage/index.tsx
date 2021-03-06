import React from 'react';
import './style.scss';

import SideBar from '../../components/SideBar';
import SettingBar from '../../components/SettingBar';
import Mandala from '../../components/Mandala';

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