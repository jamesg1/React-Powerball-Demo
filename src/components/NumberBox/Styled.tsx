import styled from 'styled-components';
import { Props } from './NumberBox';

const Box = styled.div<Props>`
  position: relative;
  color: ${props => props.theme.colors.purple};
  font-weight: ${props => props.theme.fontWeights.bold};
  background: ${props =>
    props.selected ? props.theme.colors.lighterPurple : props.theme.colors.white};
  padding: ${props => props.theme.spacing.small};
  width: 10%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${props => props.theme.transitions.all}
  border: 1px solid ${props => props.theme.colors.grey};
  margin: 0 -1px -1px 0;
  transition: ${props => props.theme.transitions.all};

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
    height: 75%;
    position: absolute;
    fill: white;
  }
`;
export { Box };
