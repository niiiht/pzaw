
import type { AlbumProps } from "./types";
function Album({cover, albumName, bandName, musicKind, year, songs,isSongless}:AlbumProps){
    // const handleSongClick = (title:string) =>{
    //     console.log(title)

    // }
    function handleSongClick(title:string,albumName:string){
        console.log("Wybrano utwór: "+title + " z " + albumName  );
    }

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
                        <td onClick={()=>handleSongClick(song.name,albumName)}>{song.name}</td> {/* tu trzeba napisać tak, bo jakby się by zapisało onClick=handleSongClick(song.name) to funkcja wywołałą by się przy renderowaniu, a byłaby pusta. Więc taki zapis jest potrzebny żeby nie wyskoczył błąd :))) */}
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