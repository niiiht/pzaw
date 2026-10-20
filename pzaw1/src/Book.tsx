import type {BookProps} from './types.tsx';
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