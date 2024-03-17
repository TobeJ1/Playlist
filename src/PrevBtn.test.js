import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { PrevBtn } from './PrevBtn';

describe('<PrevBtn /> functionality', () => {
  test('it calls the onClick handler when <PrevBtn/> is clicked', () => {
    const mockOnClick = jest.fn();
    render(<PrevBtn CName="test-class" OnClick={mockOnClick} />);

    fireEvent.click(screen.getByText('Prev'));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
