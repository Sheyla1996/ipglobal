import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from './loading';

describe('Loading', () => {
  it('renders the loading component', () => {
    render(<Loading />);
    expect(screen.getByTestId('loading-component')).toBeInTheDocument();
  });
});