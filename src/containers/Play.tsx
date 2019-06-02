import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { NumberCircle, Icon, TicketContainer } from 'components';
import {
  selectEntities,
  selectApi,
  getResults,
  clearResults,
  ResultsRequest,
  ResultsActionTypes,
  APIError
} from 'state/ducks/results';
import { AppState } from '../state/store';
import { range } from 'utils';

const fontFamily = 'Muli, sans-serif';

const SelectedNumbers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

const Draw = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
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
  margin: 0 auto;
  max-width: 500px;
  display: flex;
`;

const TicketNumbers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  transition: all 400ms ease-in;

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

const Error = styled.div`
  padding: 15px 0;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${fontFamily};
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`;

interface Button {
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

class PlayPage extends React.PureComponent<Props> {
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
        <Draw>1</Draw>
        <TicketNumbers>
          <SelectedNumbers>
            {this.primaryRange.map((value, index) => (
              <NumberCircle key={`p-${value}`} number={primaryNumbers[index]} />
            ))}
            <NumberCircle
              key={`s-${secondaryNumbers[0]}`}
              number={secondaryNumbers[0]}
              powerballNumber={true}
            />
          </SelectedNumbers>
          <TicketContainer numbers={primaryNumbers} end={35} />
          <TicketContainer numbers={secondaryNumbers} end={20} label="Select your powerball" />
          {error && error.ErrorInfo && (
            <Error>
              {`An error has occured fetching the latest results, please try again. ${
                error.ErrorInfo.DisplayMessage
              }`}
            </Error>
          )}
        </TicketNumbers>
        <Actions>
          <Button type="submit" onClick={this.getResults} variant="prefill" disabled={loading}>
            <Icon name="lightning" width="60%" />
          </Button>
          <Button type="submit" onClick={this.clearResults} variant="clear">
            <Icon name="trash" width="60%" />
          </Button>
        </Actions>
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

export default connect(
  mapStateToProps,
  actions
)(PlayPage);
