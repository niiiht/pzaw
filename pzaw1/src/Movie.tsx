interface FilmProps {
    movieName: string;
    year: number;
    poster: string;
  }

function Movie({movieName, year, poster}: FilmProps) {
    


  return (
    <>
    
      <h1>{movieName}</h1>
      <img src={poster} alt={movieName} />
      <p>Year: {year}</p>

    
    

    
    

    </>
  )
}

export default Movie