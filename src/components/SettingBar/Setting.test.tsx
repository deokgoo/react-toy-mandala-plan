import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import SideBar from './index';
import {act} from "react-dom/test-utils";

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);

});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('hoge',() => {

});