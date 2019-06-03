import { Button } from './Play';
import styled from 'styled-components';

const SelectedNumbers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => props.theme.spacing.medium};
`;

const Draw = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  flex-grow: 2;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.base};
`;

const Actions = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 500px;
  display: flex;
`;

const TicketContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 2;
`;

const StyledButton = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-right: 3px;
  width: 22px;
  height: 22px;
  transition: ${props => props.theme.transitions.all};

  @media (min-width: 321px) {
    width: 25px;
    height: 25px;
    margin-right: ${props => props.theme.spacing.xsmall};
  }

  border-radius: 50%;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  border: 2px solid
    ${({ variant }: Button): string => (variant === 'prefill' ? '#6c4398' : '#757575')};
  background-color: ${({ variant }: Button): string =>
    variant === 'prefill' ? '#6c4398' : '#757575'};
`;

const Error = styled.div`
  padding: ${props => props.theme.spacing.medium} 0;
  color: ${props => props.theme.fontSizes.xsmall};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.fontSizes.xsmall};
  font-weight: ${props => props.theme.fontWeights.bold};
  text-align: center;
`;

export { SelectedNumbers, Actions, TicketContainer, StyledButton, Container, Draw, Error };
