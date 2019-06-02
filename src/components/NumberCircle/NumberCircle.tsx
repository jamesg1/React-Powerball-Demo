import React from 'react';
import { Circle, Label } from './Styled';

export interface Props {
  number?: number;
  powerballNumber?: boolean;
}

const powerBallLabel = 'PB';

const NumberCircle: React.FC<Props> = ({ number, powerballNumber }: Props) => {
  const label = !number && powerballNumber ? powerBallLabel : number;
  return (
    <Circle number={number} powerballNumber={powerballNumber}>
      <Label>{label}</Label>
    </Circle>
  );
};

export default NumberCircle;
