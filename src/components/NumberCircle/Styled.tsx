/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from 'styled-components';
import { Props } from './NumberCircle';

const darkGrey = '#474747';
const grey = '#dddddd';
const silver = '#879bab';
const blue = '#3450a7';
const white = '#ffffff';
const fontFamily = 'Muli, sans-serif';

const getBackground = (number?: number, powerballNumber?: boolean): string => {
  if (number && powerballNumber) return silver;
  if (number) return blue;
  return white;
};

const getStyling = ({ number, powerballNumber }: Props): any => {
  const backgroundColor = getBackground(number, powerballNumber);
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
  font-family: ${fontFamily};
  font-size: 12px;
  font-weight: bold;
  margin-right: 3px;
  width: 22px;
  height: 22px;
  transition: all 400ms ease-in;

  @media (min-width: 321px) {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }

  border-radius: 50%;
  ${(props: Props): any => getStyling(props)};
`;

const Label = styled.span``;

export { Circle, Label };
