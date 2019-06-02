import React from 'react';
import styled from 'styled-components';
import { NumberCircle, Icon } from 'components';

const fontFamily = 'Muli, sans-serif';

const SelectedNumbers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Draw = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 2;
  font-family: ${fontFamily};
  font-weight: bold;
  font-size: 14px;
`;

const Actions = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Container = styled.div`
  max-width: 500px;
  display: flex;
`;

const TicketNumbers = styled.div`
  display: flex;
  flex-grow: 2;
`;

interface Button {
  variant: string;
}

const Button = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  font-family: ${fontFamily};
  font-size: 12px;
  font-weight: bold;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  border: 2px solid
    ${({ variant }: Button): string => (variant === 'prefill' ? '#6c4398' : '#757575')};
  background-color: ${({ variant }: Button): string =>
    variant === 'prefill' ? '#6c4398' : '#757575'};
`;

const PlayPage: React.FC<{}> = () => (
  <Container>
    <Draw>1</Draw>
    <TicketNumbers>
      <SelectedNumbers>
        <NumberCircle />
        <NumberCircle />
        <NumberCircle number={1} />
        <NumberCircle number={21} />
        <NumberCircle number={5} />
        <NumberCircle number={35} powerballNumber={true} />
        <NumberCircle />
        <NumberCircle powerballNumber={true} />
      </SelectedNumbers>
    </TicketNumbers>
    <Actions>
      <Button variant="prefill">
        <Icon name="lightning" width="60%" />
      </Button>
      <Button variant="clear">
        <Icon name="trash" width="60%" />
      </Button>
    </Actions>
  </Container>
);

export default PlayPage;
