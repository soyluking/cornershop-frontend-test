import { screen, fireEvent, prettyDOM } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';

import { renderWithReactQuery } from '../../utils/tests';

import CreateCounter from '.';

describe('<CreateCounter />', () => {
  test('should render component correctly', () => {
    renderWithReactQuery(<CreateCounter />);

    const button = screen.getByTestId('add-counter');

    expect(button).toBeInTheDocument();
  });

  test('should render create modal on Add Button click', () => {
    renderWithReactQuery(<CreateCounter />);

    const button = screen.getByTestId('add-counter');

    UserEvent.click(button);

    const title = screen.getByText('Create Counter');

    expect(title).toBeInTheDocument();
  });
});
