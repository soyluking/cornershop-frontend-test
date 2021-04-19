import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRouter } from './utils/tests';

import App from './App';

describe('<App />', () => {
  test('should render Welcome page as default', () => {
    renderWithRouter(<App />);

    const title = screen.getByText('Welcome to Counters');
    const button = screen.getByText('Get started');

    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button.parentNode.getAttribute('href')).toBe('/counters');
  });

  test('should render Counters page when button clicked', () => {
    renderWithRouter(<App />);

    const button = screen.getByText('Get started');

    userEvent.click(button);

    expect(location.pathname).toBe('/counters');
  });
});
