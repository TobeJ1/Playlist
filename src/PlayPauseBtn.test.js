import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import {PlayPauseBtn} from './PlayPauseBtn';

describe('<PlayPauseBtn /> functionality', () => {
  test('it calls the onClick handler when <PlayPauseBtn/> is clicked', () => {
    const mockOnClick = jest.fn();
    render(<PlayPauseBtn CName="test-class" OnClick={mockOnClick} />);

    fireEvent.click(screen.getByText('Play/Pause'));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
