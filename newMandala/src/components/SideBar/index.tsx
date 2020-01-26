import React from 'react';
import * as types from './types';
import './style.scss';

class SideBar extends React.Component<types.propsInterface> {
  constructor(props: types.propsInterface) {
    super(props)
  }

  render() {
    return (
      <div className={"SideBar container-fluid"}>
        <div className="row justify-content-center">
          <div className="col-6 mt-3">
            <img className={"w-100"} src="/logo192.png" alt="logo"/>
          </div>
        </div>
        <div className="row justify-content-center">
          <h3 className="col-12 mt-3 text-center text-white font-weight-bold">
            2020 Plan
          </h3>
        </div>
        <div className="row justify-content-center">
          <h5 className="col-12 text-center text-white font-weight-bold">
            with
          </h5>
        </div>
        <div className="row justify-content-center">
          <h3 className="col-12 text-center text-white font-weight-bold">
            Mandala
          </h3>
        </div>
      </div>
    )
  }
}

export default SideBar;