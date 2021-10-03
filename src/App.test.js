import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './config/store';
import App from './App';

describe('App', () => {
  it('renders NavBar and Home view by default', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByText(/Home/i)).toBeInTheDocument();
    expect(getByText(/About/i)).toBeInTheDocument();
    expect(getByText(/Cat-alog/i)).toBeInTheDocument();
    expect(getByText(/Bubbles/i)).toBeInTheDocument();
    expect(getByText(/The alpha cat/i)).toBeInTheDocument();
  });
});
