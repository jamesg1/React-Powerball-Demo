import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { NumberCircle, Icon } from 'components';
import { getResults, ResultsRequest, ResultsActionTypes } from 'state/ducks/results';

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

const Button = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${fontFamily};
  font-size: 12px;
  font-weight: bold;
  margin-right: 3px;
  width: 22px;
  height: 22px;

  @media (min-width: 321px) {
    width: 25px;
    height: 25px;
    margin-right: 5px;
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

interface Button {
  variant: string;
}

interface Props {
  getResults: (resultsRequest: ResultsRequest) => ResultsActionTypes;
  loading: boolean;
}

const query = {
  CompanyId: 'GoldenCasket',
  MaxDrawCountPerProduct: 1,
  OptionalProductFilter: ['Powerball']
};

class PlayPage extends React.PureComponent<Props> {
  getResults = () => {
    this.props.getResults(query);
  };

  render() {
    const { loading } = this.props;
    return (
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
          <Button type="submit" onClick={this.getResults} variant="prefill" disabled={loading}>
            <Icon name="lightning" width="60%" />
          </Button>
          <Button type="submit" variant="clear">
            <Icon name="trash" width="60%" />
          </Button>
        </Actions>
      </Container>
    );
  }
}

const mapStateToProps = (state: any, props: any) => ({
  loading: state.results.api.getResults.loading
});

const actions = {
  getResults
};

export default connect(
  mapStateToProps,
  actions
)(PlayPage);
