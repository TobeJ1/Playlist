import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Podcast } from './Podcast'; 

describe('Podcast Component', () => {
  test('renders Podcast component with all props', () => {
    
    
    const season = 1;
    const episode = 5;
    const episodeTitle = "Route Talk";
    const setItem = episodeTitle; 
    const setPhrase= "Playing: " 
    const itemIndex= 0; 
    const setIndex = itemIndex; 
    render(<Podcast 
      season = {season} 
      episode = {episode} 
      episodeTitle={episodeTitle} 
      setItem = {setItem} 
      setPhrase={setPhrase} 
      itemIndex={itemIndex} 
      setIndex={setIndex} 
    />);

    // Verify that the component correctly displays the title, artist, and year
    expect(screen.getByText(`Season: ${season} Episode: ${episode} Title: ${episodeTitle}`)).toBeInTheDocument();
  });
});

describe('Podcast Component', () => {
  test('renders Podcast component without season attribute', () => {
    
    const episode = 2;
    const episodeTitle = "How to Fail: Malcolm Gladwell";
    const setItem = episodeTitle; 
    const setPhrase= "Playing: " 
    const itemIndex= 0; 
    const setIndex = itemIndex; 
    render(<Podcast 
      episode = {episode} 
      episodeTitle={episodeTitle} 
      setItem = {setItem} 
      setPhrase={setPhrase} 
      itemIndex={itemIndex} 
      setIndex={setIndex} 
    />);

    // Verify that the component correctly displays the title, artist, and year
    expect(screen.getByText(`Episode: ${episode} Title: ${episodeTitle}`)).toBeInTheDocument();
  });
});

describe('Podcast Component', () => {
  test('renders Podcast component without season and episode attributes', () => {
    
    const episodeTitle = "The Moth Presents Anthony Griffith";
    const setItem = episodeTitle; 
    const setPhrase= "Playing: " 
    const itemIndex= 0; 
    const setIndex = itemIndex; 
    render(<Podcast 
      episodeTitle={episodeTitle} 
      setItem = {setItem} 
      setPhrase={setPhrase} 
      itemIndex={itemIndex} 
      setIndex={setIndex} 
    />);

    // Verify that the component correctly displays the title, artist, and year
    expect(screen.getByText(`Title: ${episodeTitle}`)).toBeInTheDocument();
  });
});