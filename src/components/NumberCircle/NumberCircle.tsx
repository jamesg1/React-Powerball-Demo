import React from 'react';
import { Circle, Label } from './Styled';

export interface Props {
  number?: number;
  isPowerball?: boolean;
}

const powerBallLabel = 'PB';

const NumberCircle: React.FC<Props> = ({ number, isPowerball }: Props) => {
  const label = isPowerball && powerBallLabel;
  const idLabel = isPowerball ? 'powerball' : 'primary';
  return (
    <Circle data-cy={`numberCircle__${idLabel}`} number={number} isPowerball={isPowerball}>
      <Label>{number || label}</Label>
    </Circle>
  );
};

export default NumberCircle;
