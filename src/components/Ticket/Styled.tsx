import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: center;
  width: 100%;
`;

const Label = styled.div`
  width: 98%;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.xsmall};
  padding: ${props => props.theme.spacing.xsmall} 0;
  background-color: ${props => props.theme.colors.silver};
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  margin-top: 1px;
`;

const Numbers = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  width: 100%;
`;

export { Container, Label, Numbers };
