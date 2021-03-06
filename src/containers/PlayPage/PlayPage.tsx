import React from 'react';
import { connect } from 'react-redux';

import { Actions, NumberCircle, Ticket } from 'components';

import {
  selectEntities,
  selectApi,
  getResults,
  clearResults,
  ResultsRequest,
  ResultsActionTypes,
  APIError
} from '../../state/ducks/results';
import { AppState } from '../../state/store';
import { range } from '../../utils';
import { SelectedNumbers, TicketContainer, Container, Draw, Error } from './Styled';

export interface Button {
  variant: string;
}

interface Props {
  getResults: (resultsRequest: ResultsRequest) => ResultsActionTypes;
  clearResults: () => ResultsActionTypes;
  loading: boolean;
  error?: APIError | null;
  primaryNumbers: number[];
  secondaryNumbers: number[];
}

const query = {
  CompanyId: 'GoldenCasket',
  MaxDrawCountPerProduct: 1,
  OptionalProductFilter: ['Powerball']
};

export class PlayPage extends React.PureComponent<Props> {
  primaryRange = [...range(0, 6)];

  getResults = () => {
    this.props.getResults(query);
  };

  clearResults = () => {
    this.props.clearResults();
  };

  render() {
    const { loading, error, primaryNumbers, secondaryNumbers } = this.props;
    return (
      <Container>
        <Draw id="draw">1</Draw>
        <TicketContainer id="ticket-container">
          <SelectedNumbers id="selected-numbers">
            {this.primaryRange.map((value, index) => (
              <NumberCircle key={`p-${value}`} number={primaryNumbers[index]} />
            ))}
            <NumberCircle
              key={`s-${secondaryNumbers[0]}`}
              number={secondaryNumbers[0]}
              isPowerball={true}
            />
          </SelectedNumbers>
          <Ticket numbers={primaryNumbers} end={35} />
          <Ticket numbers={secondaryNumbers} end={20} label="Select your powerball" />
          {error && (
            <Error>{`An error has occured fetching the latest results, please try again.`}</Error>
          )}
        </TicketContainer>
        <Actions
          loading={loading}
          getResultsOnClick={this.getResults}
          clearOnClick={this.clearResults}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  loading: selectApi(state).getResults.loading,
  error: selectApi(state).getResults.error,
  primaryNumbers: selectEntities(state).primaryNumbers || [],
  secondaryNumbers: selectEntities(state).secondaryNumbers || []
});

const actions = {
  getResults,
  clearResults
};

export default connect(mapStateToProps, actions)(PlayPage);
