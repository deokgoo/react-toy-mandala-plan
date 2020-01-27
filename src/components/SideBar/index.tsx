import React from 'react';
import * as types from './types';
import './style.scss';

class SideBar extends React.Component<types.propsInterface> {
  constructor(props: types.propsInterface) {
    super(props)
  }
  render() {
    return (
      <div className={"SideBar"}>
        <div className="container">
          <div className="row justify-content-center">
            <h3 className="col-12 mt-3 text-center text-white font-weight-bold p-0">
              2020 Plan
            </h3>
          </div>
          <div className="row justify-content-center">
            <h5 className="col-12 text-center text-white font-weight-bold">
              with
            </h5>
          </div>
          <div className="row justify-content-center mt-4">
            <h5 className="col-12 text-center text-white font-weight-bold p-0">  M </h5>
            <h5 className="col-12 text-center text-white font-weight-bold p-0">  a </h5>
            <h5 className="col-12 text-center text-white font-weight-bold p-0">  n </h5>
            <h5 className="col-12 text-center text-white font-weight-bold p-0">  d </h5>
            <h5 className="col-12 text-center text-white font-weight-bold p-0">  a </h5>
            <h5 className="col-12 text-center text-white font-weight-bold p-0">  l </h5>
            <h5 className="col-12 text-center text-white font-weight-bold p-0">  a </h5>
          </div>
        </div>
      </div>
    )
  }
}

export default SideBar;