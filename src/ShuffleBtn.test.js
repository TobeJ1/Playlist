import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { ShuffleBtn } from './ShuffleBtn';

describe('<ShuffleBtn /> functionality', () => {
  test('it calls the onClick handler when <ShuffleBtn/> is clicked', () => {
    const mockOnClick = jest.fn();
    render(<ShuffleBtn CName="test-class" OnClick={mockOnClick} />);

    fireEvent.click(screen.getByText('Shuffle'));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
