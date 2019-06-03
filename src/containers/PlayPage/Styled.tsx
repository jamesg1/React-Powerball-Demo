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

export { SelectedNumbers, TicketContainer, Container, Draw, Error };
