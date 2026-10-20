import type {MovieProps}from './types.tsx';

function Movie({movieName, year, poster}: MovieProps) {
    


  return (
    <>
    
      <h3>{movieName}</h3>
      <img src={poster} alt={movieName} />
      <p>Year: {year}</p>

    
    

    
    

    </>
  )
}

export default Movie