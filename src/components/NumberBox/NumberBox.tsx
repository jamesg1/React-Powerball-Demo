import React from 'react';
import Icon from '../Icon';
import { Theme } from '../../styling';
import { Box } from './Styled';

export interface Props {
  selected?: boolean;
  number: number;
  isPowerBall?: boolean;
}

const NumberBox: React.FC<Props> = ({ selected, number, isPowerBall }: Props) => {
  const id = selected ? `box__selected` : 'box';
  return (
    <Box data-cy={isPowerBall ? `${id}__powerball` : id} selected={selected} number={number}>
      {selected && <Icon name="cross" fill={Theme.colors.lightPurple} />}
      <span>{number}</span>
    </Box>
  );
};

export default NumberBox;
