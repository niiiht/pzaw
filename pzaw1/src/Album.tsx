
import type { AlbumProps } from "./types";
function Album({cover, albumName, bandName, musicKind, year, songs}:AlbumProps){

    return(
        <> 
        <h1>{albumName}</h1>
        <img src={cover}/>
        <p>Wydany przez: {bandName}</p>
        <p>Gatunek muzyczny: {musicKind}</p>
        <p>Rok wydania: {year}</p>
        {songs.map((song,index)=>{
            return(
                <div key={index}>
                    <p>{song.name} - {song.time}</p>
                </div>
            )
        })}


        </>
    )
}

export default Album;