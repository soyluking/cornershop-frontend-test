import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from './utils/tests';
import App from './App';

describe('App', () => {
  test('should render Welcome page as default', () => {
    renderWithRouter(<App />);

    const title = screen.getByText('Welcome to Counters');
    const link = screen.getByText('Get started');

    expect(title).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(link.parentNode.getAttribute('href')).toBe('/counters');
  });

  test('should render Counters page when button clicked', () => {
    const { getByText } = renderWithRouter(<App />);

    fireEvent.click(getByText('Get started'));

    expect(location.pathname).toBe('/counters');
  });
});
