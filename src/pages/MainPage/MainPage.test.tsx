import {act} from "react-dom/test-utils";
import ReactDOM from "react-dom";
import React from "react";
import MainPage from "./index";

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test('Test something when the viewport changes.', () => {
  Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: 767});
  act(() => {
    ReactDOM.render(<MainPage />, container);
  });

  const SideBarElement = container.querySelector('.SideBar');
  // Change the viewport to 500px.
  expect(SideBarElement).toBeVisible();
  // Run your assertion.
});