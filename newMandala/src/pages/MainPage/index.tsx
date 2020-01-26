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
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-2 d-none d-md-block p-0">
              <SideBar />
            </div>
            <div className="col-8 col-md-7 p-0">
              <Mandala />
            </div>
            <div className="col-4 col-md-3 p-0">
              <SettingBar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;