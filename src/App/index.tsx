import React from 'react';
import Main from '../pages/Main';
import Header from '../pages/Header'
import './style.scss'
import Setting from '../pages/Setting';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-1 bg-dark h-100">
            <Header />
          </div>
          <div className="col-7"><Main /></div>
          <div className="col-4 bg-secondary h-100">
            <Setting />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
