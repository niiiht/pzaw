interface BookProps{
    cover:string;
    title:string;
    year:number;
    pages:number;
}
function Book({cover, title, year, pages}:BookProps){

    return(
        <>  
        <h1>{title}</h1>
        <img src={cover}/>
        <p>Rok wydania: {year}</p>
        <p>Ilośc stron: {pages}</p>
        </>
    )
}

export default Book;