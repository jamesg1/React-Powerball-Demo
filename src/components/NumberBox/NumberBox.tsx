import React from 'react';
import Icon from '../Icon';
import { Theme } from '../../styling';
import { Box } from './Styled';

export interface Props {
  selected?: boolean;
  number: number;
}

const NumberBox: React.FC<Props> = ({ selected, number }: Props) => (
  <Box selected={selected} number={number}>
    {selected && <Icon name="cross" fill={Theme.colors.lightPurple} />}
    <span>{number}</span>
  </Box>
);

export default NumberBox;
