import React from 'react';
import { PlayPage } from '../PlayPage';
import 'jest-styled-components';
import renderWithTheme from 'styling/withTheme';
import theme from 'styling';
import { mount } from 'enzyme';

describe('Play page', () => {
  test('it renders play page', () => {
    let tree = renderWithTheme(
      <PlayPage
        getResults={jest.fn()}
        clearResults={jest.fn()}
        loading={false}
        error={null}
        primaryNumbers={[1, 2, 3, 4, 5, 10, 20]}
        secondaryNumbers={[19]}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('it renders error message', () => {
    let tree = renderWithTheme(
      <PlayPage
        getResults={jest.fn()}
        clearResults={jest.fn()}
        loading={false}
        error={'An error has occurred'}
        primaryNumbers={[1, 2, 3, 4, 5, 10, 20]}
        secondaryNumbers={[19]}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
