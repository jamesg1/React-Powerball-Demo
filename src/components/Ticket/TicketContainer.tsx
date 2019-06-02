import React from 'react';
import styled from 'styled-components';
import { range } from 'utils';
import { Icon } from 'components';

const fontFamily = 'Muli, sans-serif';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  text-align: center;
`;

const Label = styled.div`
  width: 98%;
  font-family: ${fontFamily};
  font-weight: bold;
  font-size: 10px;
  background-color: #879bab;
  color: white;
  text-transform: uppercase;
  margin-top: 1px;
`;

const Numbers = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-wrap: wrap;
`;

const purple = '#6C4796';

interface TextNumberProps {
  selected: boolean;
}

const TextNumber = styled.div<TextNumberProps>`
  position: relative;
  color: ${purple};
  font-family: ${fontFamily};
  font-weight: bold;
  background: ${props => (props.selected ? '#e9e4f1' : 'white')};
  padding: 10px;
  width: 10%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 400ms ease-in;
  border: 1px solid #cdcdcd;
  margin: 0 -1px -1px 0;

  > span {
    z-index: 5;
  }

  > svg {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 75%;
    height: 750%;
    position: absolute;
    fill: white;
  }
`;

interface Props {
  label?: string;
  end: number;
  numbers: number[];
}

const TicketContainer: React.FC<Props> = ({ label, end, numbers }: Props) => {
  const steps = [...range(1, end)];
  return (
    <Container>
      <Label>{label}</Label>
      <Numbers>
        {steps.map(item => {
          const selected = numbers.includes(item);
          return (
            <TextNumber selected={selected} key={item}>
              {selected && <Icon name="cross" fill="#d6cde4" />}
              <span>{item}</span>
            </TextNumber>
          );
        })}
      </Numbers>
    </Container>
  );
};

export default TicketContainer;
