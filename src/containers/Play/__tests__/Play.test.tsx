import React from 'react';
import { Play } from '../Play';
import 'jest-styled-components';
import renderWithTheme from 'styling/withTheme';

describe('Play page', () => {
  test('it renders the Play page', () => {
    let tree = renderWithTheme(
      <Play
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
});
