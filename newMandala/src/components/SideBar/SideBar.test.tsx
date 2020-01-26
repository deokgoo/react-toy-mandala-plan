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

test('renders Text', () => {
  const { getByText } = render(<SideBar title={"testTitle"}/>);
  const titleElement = getByText(/2020 Plan/g);
  const subTitleElement1= getByText(/with/g);
  const subTitleElement2 = getByText(/Mandala/g);

  expect(titleElement).toBeVisible();
  expect(subTitleElement1).toBeVisible();
  expect(subTitleElement2).toBeVisible();
});

test('renders img & alt', () => {
  const { getByAltText } = render(<SideBar title={"testTitle"}/>, container);
  const imgElement = getByAltText(/logo/);

  expect(imgElement).toBeVisible();
});