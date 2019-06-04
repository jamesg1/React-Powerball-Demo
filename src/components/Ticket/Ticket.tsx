import React from 'react';
import { range } from '../../utils';
import NumberBox from '../NumberBox';
import { Container, Label, Numbers } from './Styled';

interface Props {
  label?: string;
  end: number;
  numbers: number[];
}

const Ticket: React.FC<Props> = ({ label, end, numbers }: Props) => {
  const numberRange = [...range(1, end)];
  const isPowerBall = numberRange.length === 20;
  return (
    <Container>
      {label && <Label data-cy="powerball-label">{label}</Label>}
      <Numbers>
        {numberRange.map(number => {
          const selected = numbers.includes(number);
          return (
            <NumberBox
              key={`box-${number}`}
              selected={selected}
              number={number}
              isPowerBall={isPowerBall}
            />
          );
        })}
      </Numbers>
    </Container>
  );
};

export default Ticket;
