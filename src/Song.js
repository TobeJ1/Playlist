



export function Song ({title,artist,year,setItem,setPhrase,itemIndex,setIndex}){

  if (typeof year !== 'number') {
    throw new Error('Year prop must be a number');
  }
  return (

    <p>
      <button className = "audioButton" onDoubleClick={() => {setItem(title) ; setPhrase("Playing: "); setIndex(itemIndex)} }>Song: {title ? title: "None"} Artist: {artist ? artist : "None"} Year: {year ? year: "None"}</button>
    </p>
    
  );
}