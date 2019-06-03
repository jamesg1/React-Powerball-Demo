import 'jsdom-global/register';
import React from 'react';
import { PlayPage } from '../PlayPage';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import renderWithTheme from 'styling/withTheme';
import Theme from 'styling/theme';
import { mount } from 'enzyme';

describe('Play page', () => {
  test('it renders play page', () => {
    let tree = renderWithTheme(
      <PlayPage
        getResults={jest.fn()}
        clearResults={jest.fn()}
        loading={false}
        error={null}
        primaryNumbers={[1, 2, 3, 4, 5, 10, 20]}
        secondaryNumbers={[19]}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('it renders error message', () => {
    let tree = renderWithTheme(
      <PlayPage
        getResults={jest.fn()}
        clearResults={jest.fn()}
        loading={false}
        error={{
          ErrorInfo: {
            ContactSupport: true,
            DisplayMessage: 'Error Message example',
            ErrorNo: 123,
            SupportErrorReference: 'ABC1',
            SystemId: 1
          },
          Success: false
        }}
        primaryNumbers={[1, 2, 3, 4, 5, 10, 20]}
        secondaryNumbers={[19]}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
    tree = renderWithTheme(
      <PlayPage
        getResults={jest.fn()}
        clearResults={jest.fn()}
        loading={false}
        error={'An error has occurred'}
        primaryNumbers={[1, 2, 3, 4, 5, 10, 20]}
        secondaryNumbers={[19]}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should call props.onChange when button is clicked', () => {
    const getResultMockFn = jest.fn();
    const clearResults = jest.fn();
    const component = mount(
      <ThemeProvider theme={Theme}>
        <PlayPage
          getResults={getResultMockFn}
          clearResults={clearResults}
          loading={false}
          error={null}
          primaryNumbers={[1, 2, 3, 4, 5, 10, 20]}
          secondaryNumbers={[19]}
        />
      </ThemeProvider>
    );

    expect(getResultMockFn).not.toHaveBeenCalled();
    expect(clearResults).not.toHaveBeenCalled();

    component.find('button#prefill').simulate('click');
    expect(getResultMockFn).toHaveBeenCalled();

    component.find('button#delete').simulate('click');
    expect(clearResults).toHaveBeenCalled();
  });
});
