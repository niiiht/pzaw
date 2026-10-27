import type {MovieProps}from './types.tsx';

function Movie({movieName, year, poster, rating, isGood}: MovieProps) {
  function logMovie(title:string) {
  console.log("Wybrano: "+ title);
}
function details(title:string,event:React.MouseEvent<HTMLButtonElement>){
  event.stopPropagation();
  console.log("Pokaż szczegóły dla: "+ movieName);

}



  return (
    <>

    
      <div onClick={()=>logMovie(movieName)} className="card" style={{width:'18rem'}}>
        <img src={poster} alt={movieName} />
      <div className="card-body">
         <h3 className="card-title" id="title">{movieName}</h3>
           
      <p className="card-text">Year: {year}</p>
      <button onClick={(event)=>details(movieName,event)}>Pokaż szczegóły</button>
      <p className="card-text">Rating: {rating}</p>
      {isGood && <strong className='card-text'>Polecany</strong>}


    </div>
    </div>
    
     


    
    

    
    

    </>
  )
}

export default Movie