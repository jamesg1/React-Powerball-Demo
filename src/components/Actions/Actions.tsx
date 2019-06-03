import React from 'react';
import Icon from '../Icon';
import { Container, StyledButton } from './Styled';

export interface Props {
  getResultsOnClick: () => void;
  clearOnClick: () => void;
  loading?: boolean;
}

const Actions: React.FC<Props> = ({ getResultsOnClick, clearOnClick, loading }: Props) => (
  <Container>
    <StyledButton
      id="prefill"
      type="submit"
      onClick={getResultsOnClick}
      variant="prefill"
      disabled={loading}>
      <Icon name="lightning" width="60%" />
    </StyledButton>
    <StyledButton id="delete" type="submit" onClick={clearOnClick} variant="clear">
      <Icon name="trash" width="60%" />
    </StyledButton>
  </Container>
);

export default Actions;
