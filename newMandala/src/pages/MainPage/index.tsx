import React from 'react';
import './style.scss';

class MainPage extends React.Component {
  render(): JSX.Element {
    return (
      <div className="MainPage">
        <div className="container-fluid p-0">
          <div className="row p-0">
            <div className="col-1 d-none d-sm-block">
              a
            </div>
            <div className="col-8">
              b
            </div>
            <div className="col-3">
              c
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;