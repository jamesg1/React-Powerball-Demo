import React from 'react';
import NumberBox from '../NumberBox';
import Icon from '../../Icon';
import renderWithTheme from 'styling/withTheme';
import 'jest-styled-components';

describe('<NumberBox />', () => {
  test('it renders when not selected', () => {
    const tree = renderWithTheme(<NumberBox number={25} />);
    const testInstance = tree.root;
    expect(testInstance.findByType('span').props.children).toBe(25);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('it renders cross icon when number is selected', () => {
    const tree = renderWithTheme(<NumberBox number={25} selected={true} />);
    const testInstance = tree.root;
    expect(testInstance.findByType(Icon).props.name).toBe('cross');
    expect(testInstance.findByType('span').props.children).toBe(25);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
