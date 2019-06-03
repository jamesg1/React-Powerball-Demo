import React from 'react';
import { Circle, Label } from './Styled';

export interface Props {
  number?: number;
  isPowerball?: boolean;
}

const powerBallLabel = 'PB';

const NumberCircle: React.FC<Props> = ({ number, isPowerball }: Props) => {
  const label = isPowerball && powerBallLabel;
  return (
    <Circle number={number} isPowerball={isPowerball}>
      <Label>{number || label}</Label>
    </Circle>
  );
};

export default NumberCircle;
