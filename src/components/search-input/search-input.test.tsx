import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchInput from './search-input';
import {vi} from 'vitest';

describe('SearchInput', () => {
  it('render the element', () => {
    const { container } = render(<SearchInput />);
    expect(container.querySelector('input')).toBeInTheDocument();
  });

  it('calls the onSearch function with the correct search text when input changes', () => {
    const mockOnSearch = vi.fn();
    render(<SearchInput onSearch={mockOnSearch} />);
    const inputElement = screen.getByPlaceholderText('Search...');
    fireEvent.change(inputElement, { target: { value: 'Harry Potter' } });
    expect(mockOnSearch).toHaveBeenCalledWith('Harry Potter');
  });
});