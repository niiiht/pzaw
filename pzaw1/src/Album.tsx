
import type { AlbumProps } from "./types";
function Album({cover, albumName, bandName, musicKind, year, songs,isSongless}:AlbumProps){

    return(
        <> 
        <div className="card" style={{width:'18rem'}}>
            <img src={cover}/>
            <div className="card-body">
                 <h1 className="card-title">{albumName}</h1>
                 <div className="card-text">
                    <p>Wydany przez: {bandName}</p>
                    <p>Gatunek muzyczny: {musicKind}</p>
                    <p>Rok wydania: {year}</p>
                    <table className="table table-primary table-striped table-hover">
                        <tbody>
                    {songs.map((song,index)=>{
                        return(
                            <tr key={index}>
                        <td>{song.name}</td>
                        <td className=" text-end">{song.time}</td>
                        
                        </tr>
                    )
                     })}
                     </tbody>
                     </table>
                {isSongless && <div className="alert alert-info">Brak utworów</div>}

                 </div>


            </div>


        </div>
       
    



        </>
    )
}

export default Album;