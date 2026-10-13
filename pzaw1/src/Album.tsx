interface AlbumProps{
    cover:string;
    albumName:string;
    bandName:string;
    musicKind:string;
    year:number;

}
function Album({cover, albumName, bandName, musicKind, year}:AlbumProps){

    return(
        <> 
        <h1>{albumName}</h1>
        <img src={cover}/>
        <p>Wydany przez: {bandName}</p>
        <p>Gatunek muzyczny: {musicKind}</p>
        <p>Rok wydania: {year}</p> 
        </>
    )
}

export default Album;