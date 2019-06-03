import styled from 'styled-components';

export interface ButtonProps {
  variant: string;
}

const Container = styled.div`
  display: flex;
  flex-grow: 1;
`;

const StyledButton = styled.button<ButtonProps>`
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
    ${props =>
      props.variant === 'prefill' ? props.theme.colors.prefill : props.theme.colors.delete};
  background-color: ${props =>
    props.variant === 'prefill' ? props.theme.colors.prefill : props.theme.colors.delete};
`;

export { Container, StyledButton };
