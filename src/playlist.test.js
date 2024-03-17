import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Playlist from './Playlist'; // Adjust the import path as necessary
import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

const mockTracks = {
  "tracks": [
    {"title": "Billie Jean", "artist": "Michael Jackson", "year": 1983},
    {"title": "Smells Like Teen Spirit", "artist": "Nirvana", "year": 1991},
    {"artist": "Rick Astley", "year": 1987, "title": "Never Gonna Give You Up"},
    {"episode": 360, "episodeTitle": "Switched at Birth"},
    {"season": 7, "episode": 2, "episodeTitle": "How to Fail: Malcolm Gladwell"},
    {"episode": 5, "season": 1, "episodeTitle": "Route Talk"},
    {"artist": "Nathan Evans", "year": 2021, "title": "Wellerman", "genre": "Folk"},
    {"artist": "John D. Smith", "year": 2003, "title": "Podcasts Are Overrated"},
    {"podcast": "The Moth", "episodeTitle": "The Moth Presents Anthony Griffith"},
    {"episode": 7, "episodeTitle": "Vocational Wheel"},
    {"artist": "Rebecca Black", "year": 2011, "title": "Friday"},
    {"season": 1, "episode": 2, "episodeTitle": "John D. Smith is a Subpar Musician", "year": 2004},
    {"episode": 1169, "episodeTitle": "The Joe Rogan Experience- #1169: Elon Musk"},
    {"artist": "Taylor Swift", "year": 2023, "title": "Cruel Summer"}
  ]
};

describe('Playlist component', () => {
  beforeEach(() => {
    fetch.resetMocks();
    fetch.mockResponseOnce(JSON.stringify(mockTracks));
    render(<Playlist />);
  });

  it('displays the first track after fetching data', async () => {
    await waitFor(() => expect(screen.getByText("Billie Jean")).toBeInTheDocument());
  });

  // Example for Next button click test
  it('goes to next track when Next button is clicked', async () => {
    const nextButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);
    await waitFor(() => expect(screen.getByText("Smells Like Teen Spirit")).toBeInTheDocument());
  });

  
});

// Continuing from the previous test suite...

// Test for Previous button functionality
it('goes to the previous track when Prev button is clicked', async () => {
  // Assuming "Next" moves to the second track
  fireEvent.click(screen.getByRole('button', { name: /next/i }));
  await waitFor(() => expect(screen.getByText("Smells Like Teen Spirit")).toBeInTheDocument());

  // Click "Prev" to go back to the first track
  fireEvent.click(screen.getByRole('button', { name: /prev/i }));
  await waitFor(() => expect(screen.getByText("Billie Jean")).toBeInTheDocument());
});

// Test for Shuffle button functionality
it('shuffles tracks when Shuffle button is clicked', async () => {
  // This test is trickier because shuffle can result in the same track playing again.
  // You might test if shuffle function was called, or if after multiple clicks the track changes.
  // This is a basic example to conceptually test shuffle, may require adjustment based on your implementation.
  const initialTrack = await screen.findByText("Billie Jean");
  fireEvent.click(screen.getByRole('button', { name: /shuffle/i }));

  // Wait for any track to appear; in a real test, consider a more robust approach
  await waitFor(() => expect(screen.getByText(/.+/)).toBeInTheDocument());
  const shuffledTrack = await screen.findByText(/.+/);

  expect(shuffledTrack).not.toEqual(initialTrack);
});

// Test for PlayPause button functionality
it('toggles play and pause when PlayPause button is clicked', async () => {
  // Initial state expected to be playing, adjust based on your implementation
  await waitFor(() => expect(screen.getByText("Playing: Billie Jean")).toBeInTheDocument());

  // Simulate clicking PlayPause to pause
  fireEvent.click(screen.getByRole('button', { name: /playpause/i }));
  await waitFor(() => expect(screen.getByText("Paused:")).toBeInTheDocument());

  // Simulate clicking PlayPause again to play
  fireEvent.click(screen.getByRole('button', { name: /playpause/i }));
  await waitFor(() => expect(screen.getByText("Playing: Billie Jean")).toBeInTheDocument());
});
