import React from 'react';
import Icon from '../Icon';
import renderWithTheme from 'styling/withTheme';
import 'jest-styled-components';

describe('<Icon />', () => {
  const lightning = 'lightning';
  const trash = 'trash';
  const cross = 'cross';

  test('it renders correct icon svg based on name prop', () => {
    let tree = renderWithTheme(<Icon name={lightning} />).toJSON();
    expect(tree.props.id).toEqual(`${lightning}-icon`);
    expect(tree).toMatchSnapshot();
    tree = renderWithTheme(<Icon name={trash} />).toJSON();
    expect(tree.props.id).toEqual(`${trash}-icon`);
    expect(tree).toMatchSnapshot();
    tree = renderWithTheme(<Icon name={cross} />).toJSON();
    expect(tree.props.id).toEqual(`${cross}-icon`);
    expect(tree).toMatchSnapshot();
  });

  test('it renders null when name is not defined', () => {
    const tree = renderWithTheme(<Icon />).toJSON();
    expect(tree).toBeNull();
  });

  test('it changes size and color fill based on props', () => {
    const width = '25px';
    const fill = '#DDDDDD';
    const tree = renderWithTheme(<Icon name={lightning} width={width} fill={fill} />).toJSON();
    expect(tree.props.width).toEqual(width);
    expect(tree.props.height).toEqual(width);
    expect(tree).toMatchSnapshot();
  });
});
