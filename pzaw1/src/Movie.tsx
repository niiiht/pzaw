import type {MovieProps}from './types.tsx';

function Movie({movieName, year, poster, rating, isGood}: MovieProps) {
    


  return (
    <>
      <div className="card" style={{width:'18rem'}}>
        <img src={poster} alt={movieName} />
      <div className="card-body">
         <h3 className="card-title">{movieName}</h3>
           
      <p className="card-text">Year: {year}</p>
      <p className="card-text">Rating: {rating}</p>
      {isGood && <strong className='card-text'>Polecany</strong>}


    </div>
    </div>
    
     


    
    

    
    

    </>
  )
}

export default Movie