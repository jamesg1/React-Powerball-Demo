/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from 'styled-components';
import { Props } from './NumberCircle';

const darkGrey = '#474747';
const grey = '#dddddd';
const silver = '#879bab';
const blue = '#3450a7';
const white = '#ffffff';

const getBackground = (number?: number, isPowerball?: boolean): string => {
  if (number && isPowerball) return silver;
  if (number) return blue;
  return white;
};

const getStyling = ({ number, isPowerball }: Props): any => {
  const backgroundColor = getBackground(number, isPowerball);
  const textColor = !number ? darkGrey : white;
  const borderColor = !number ? grey : backgroundColor;
  const boxShadow = !number ? `box-shadow: inset 0px 2px 2px ${grey}` : '';

  return css`
    background-color: ${backgroundColor};
    border: 2px solid ${borderColor};
    color: ${textColor};
    ${boxShadow};

    &:first-of-type {
      box-shadow: none;
      ${({ number }: Props): string => (!number ? `border: 2px solid ${blue}` : '')};
    }
  `;
};

const Circle = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-right: 3px;
  width: 22px;
  height: 22px;
  transition: ${props => props.theme.transitions.all};
  border-radius: 50%;

  @media (min-width: 321px) {
    width: 25px;
    height: 25px;
    margin-right: ${props => props.theme.spacing.xsmall};
  }

  ${props => getStyling(props)};
`;

const Label = styled.span``;

export { Circle, Label };
