import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { NextBtn } from './NextBtn';

describe('<NextBtn /> functionality', () => {
  test('it calls the onClick handler when clicked', () => {
    const mockOnClick = jest.fn();
    render(<NextBtn CName="test-class" OnClick={mockOnClick} />);

    fireEvent.click(screen.getByText('Next'));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
