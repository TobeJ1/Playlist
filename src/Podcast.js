

export function Podcast ({season,episode,episodeTitle,setItem,setPhrase,itemIndex,setIndex}){
 
 
  if (!season && !episode){
    return (
   
      <p>
          <button className = "audioButton" onDoubleClick={() => {setItem(episodeTitle) ; setPhrase("Playing: ");setIndex(itemIndex)}}>Title: {episodeTitle ? episodeTitle:"None"}</button>
      </p>
      
    );
  }
  if(!season && episode){
    return (
   
      <p>
         <button className = "audioButton" onDoubleClick={() => {setItem(episodeTitle) ; setPhrase("Playing: ");setIndex(itemIndex)}}>Episode: {episode ? episode : "None"} Title: {episodeTitle ? episodeTitle:"None"}</button>
      </p>
      
    );
  }
  return (
   
    <p>
      <button className = "audioButton" onDoubleClick={() => {setItem(episodeTitle) ; setPhrase("Playing: ");setIndex(itemIndex)}}> Season: {season ? season : "None"} Episode: {episode ? episode : "None"} Title: {episodeTitle ? episodeTitle : "None"}</button>
    </p>
    
  );
}