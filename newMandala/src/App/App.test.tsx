import React from 'react';
import { render } from '@testing-library/react';
import App from './index';
import { act } from "react-dom/test-utils";

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
  // Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: 767})
  act(() => {
    render(<App />, container);
  });
  const SideBar = container.querySelector('.SideBar');
  // Change the viewport to 500px.
  expect(SideBar).toBeVisible();
  // Run your assertion.
});