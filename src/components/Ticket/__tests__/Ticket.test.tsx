import React from 'react';
import Ticket from '../Ticket';
import renderWithTheme from 'styling/withTheme';
import 'jest-styled-components';

describe('<Ticket />', () => {
  test('it renders primary numbers', () => {
    const primaryNumbers = [2, 3, 10, 15, 20, 31, 35];
    const tree = renderWithTheme(<Ticket numbers={primaryNumbers} end={35} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('it renders powerball numbers', () => {
    const secondaryNumbers = [2];
    const tree = renderWithTheme(
      <Ticket numbers={secondaryNumbers} end={20} label="Select your powerball" />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
