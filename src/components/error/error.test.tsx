import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from './error';

describe('Error', () => {
  it('renders the error component', () => {
    render(<Error />);
    expect(screen.getByTestId('error-component')).toBeInTheDocument();
  });
});