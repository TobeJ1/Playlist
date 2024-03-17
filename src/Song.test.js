import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Song } from './Song'; // Adjust the import path according to your project structure

describe('Song Component', () => {
  test('renders Song component with valid title, artist, and year props', () => {
    
    // Provide valid inputs for title, artist, and year
    const title =  "Cruel Summer";
    const artist = "Taylor Swift";
    const year = 2023;
    const setItem = title; 
    const setPhrase= "Playing: " 
    const itemIndex= 0; 
    const setIndex = itemIndex; 
    render(<Song 
      title={title} 
      artist={artist} 
      year={year} 
      setItem = {setItem} 
      setPhrase={setPhrase} 
      itemIndex={itemIndex} 
      setIndex={setIndex} 
    />);

    // Verify that the component correctly displays the title, artist, and year
    expect(screen.getByText(`Song: ${title} Artist: ${artist} Year: ${year}`)).toBeInTheDocument();
  });
});

describe('Song Component', () => {
  test('throws an error when year prop is a string', () => {
    
    // Provide valid inputs for title, artist, and year
    const title =  "Friday";
    const artist = "Rebecca Black";
    const year = "2011"; // Year as a string to simulate an invalid type scenario
    const setItem = title; 
    const setPhrase= "Playing: " 
    const itemIndex= 0; 
    const setIndex = itemIndex; 

    // Function to render the component, expecting it to throw due to the string year
    const renderComponentWithInvalidYear = () => {
    render(<Song 
      title={title} 
      artist={artist} 
      year={year} 
      setItem = {setItem} 
      setPhrase={setPhrase} 
      itemIndex={itemIndex} 
      setIndex={setIndex} 
    />);
    };

   // Expect the component render function to throw an error
   expect(renderComponentWithInvalidYear).toThrow();
  });
});
