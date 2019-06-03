import React from 'react';
import NumberCircle from '../NumberCircle';
import renderWithTheme from 'styling/withTheme';
import 'jest-styled-components';

describe('<NumberCircle />', () => {
  test('it renders primary number circle', () => {
    const numbers = [22, 31];
    const tree = renderWithTheme(<NumberCircle number={numbers[1]} />);
    const testInstance = tree.root;
    expect(testInstance.findByType('span').props.children).toBe(31);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('it renders powerball number circle', () => {
    const numbers = [19];
    const tree = renderWithTheme(<NumberCircle number={numbers[0]} isPowerball={true} />);
    const testInstance = tree.root;
    expect(testInstance.findByType('span').props.children).toBe(19);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('it renders secondary number circle with powerball label', () => {
    const tree = renderWithTheme(<NumberCircle isPowerball={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
