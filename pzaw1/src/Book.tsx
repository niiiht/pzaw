import type {BookProps} from './types.tsx';
function Book({cover, title, author, year, pages,isClassic}:BookProps){

    return(
        <> 
        <div className='card' style={{width:'18rem'}}>
             <img src={cover}/>
             <div className='card-body'>
                  <h1 className='card-title'>{title}</h1>
                  <div className="card-text">
                    <p>Autor: {author}</p>
                    <p>Rok wydania: {year}</p>
                    <p>Ilośc stron: {pages}</p>
                    {isClassic && <strong>Klasyk</strong>}

                  </div>
                    



             </div>

        </div> 
      
      
        </>
    )
}

export default Book;