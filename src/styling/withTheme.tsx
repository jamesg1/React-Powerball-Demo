/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import renderer from 'react-test-renderer';
import Theme from './theme';
import { ThemeProvider } from 'styled-components';

export function renderWithTheme(component: any) {
  return renderer.create(<ThemeProvider theme={Theme}>{component}</ThemeProvider>);
}

export default renderWithTheme;
