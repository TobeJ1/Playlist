import React, { useState, useEffect } from "react"
import { Song } from "./Song";
import { Podcast } from "./Podcast";
import { Status } from "./Status";

import { NextBtn } from "./NextBtn";
import { PrevBtn } from "./PrevBtn";
import { PlayPauseBtn } from "./PlayPauseBtn";
import { ShuffleBtn } from "./ShuffleBtn";

export function Playlist(){
  
  const [audio, setAudio] = useState([])
  const [statusItem, setStatusItem] = useState("")
  const [statusPhrase, setStatusPhrase] = useState("")
  const [audioCurrentIndex, setAudioCurrentIndex] = useState(0);
  
 
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchURL = `${process.env.PUBLIC_URL}/audio_tracks.json`;
  
    fetch(fetchURL)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setAudio(data.tracks);
        if (data.tracks.length > 0) {
          // Assuming the first track is the initial state
          setStatusItem(data.tracks[0].title);
          setStatusPhrase("Playing: ");
        }
      })
      .catch(error => {
        console.error("Error loading tracks:", error);
        setError('Error loading tracks');
      });
  }, []);
  
  
  

  if (error) {
    return <div>{error}</div>;
  }
  
  
  
  


   
  const shuffleItem = () => {
    // Creating a shuffled copy of the data array
    
    const shuffle = [...audio].sort(() => Math.random() - 0.5);
    setAudio(shuffle);
    setAudioCurrentIndex(0);
    setStatusItem("");
    setStatusPhrase("");
  };

 

  const nextItem = () => {
    
    const nextIndex = (audioCurrentIndex + 1) % audio.length; // Loop back to 0 if at the end
    setAudioCurrentIndex(nextIndex); // Update the index
  
    const nextStatusItem = audio[nextIndex];
    const audioItemTitle = "title" in nextStatusItem ? nextStatusItem.title : nextStatusItem.episodeTitle;
    setStatusItem(audioItemTitle);
    setStatusPhrase("Playing: ");

  };

  const prevItem = () => {
   
    const prevIndex = audioCurrentIndex === 0 ? audio.length - 1 : audioCurrentIndex - 1;
    setAudioCurrentIndex(prevIndex); // Update the index

    const nextStatusItem = audio[prevIndex];
    const audioItemTitle = "title" in nextStatusItem ? nextStatusItem.title : nextStatusItem.episodeTitle;
    setStatusItem(audioItemTitle);
    setStatusPhrase("Playing: ");
    
  };
    
 
  const playOrPauseItem = () => {
    const currentItem = audio[audioCurrentIndex]
    ? ("title" in audio[audioCurrentIndex] ? audio[audioCurrentIndex].title : audio[audioCurrentIndex].episodeTitle)
    : '';

    if (!currentItem) {
      console.error('Current item is undefined.', { audioCurrentIndex, audioLength: audio.length });
      return; // Early return to avoid further execution
    }

    if (statusPhrase.includes("Playing: ")) {
      setStatusPhrase("Paused: ");
      setStatusItem("");
    } else {
      setStatusPhrase("Playing: ");
      setStatusItem(currentItem);
    }
  };

  return (
    <div>
      <div className="statusComponent">
        <Status phrase = {statusPhrase} audioTitle = {statusItem}/>
      </div>
      
      <div className = "playListContainer">
        
          
          <div className="playlistItems">
            
            {
             
            audio.map(function(item, i){
              return(
              <div key = {i}>

               {('episode' in item || 'season' in item || 'episodeTitle' in item) ? <Podcast {...item} setItem = {setStatusItem} setPhrase = {setStatusPhrase}  itemIndex = {i} setIndex = {setAudioCurrentIndex}/> : <Song {...item} setItem = {setStatusItem} setPhrase = {setStatusPhrase} itemIndex = {i} setIndex = {setAudioCurrentIndex}/>}
              </div>);
            }) 
          
            }      
         
        </div>
        <br></br>
        <div className = "buttonsDiv">

          <ShuffleBtn CName = "audioControls" OnClick={shuffleItem}/>
          <PlayPauseBtn CName = "audioControls" OnClick={playOrPauseItem}/> 
          <PrevBtn CName = "audioControls" OnClick={prevItem}/> 
          <NextBtn CName = "audioControls" OnClick={nextItem}/>

        </div>
      </div>
    </div>
  );
    
   
}




