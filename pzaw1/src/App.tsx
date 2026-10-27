// import './App.css';
import type {MovieProps} from './types.tsx';
import type {BookProps} from './types.tsx';
import type { AlbumProps } from "./types";
import Movie from './Movie';
import Book from './Book';
import Album from './Album';
import angrybirds from './assets/The_Angry_Birds_Movie_poster.png';
import tomorrowland from './assets/Tomorrowland.png';
import angrybirds2 from './assets/The_Angry_Birds_Movie_2.png';
import { useState } from 'react';

function App() {

const movies: MovieProps[]= [
  {movieName:"The Angry Birds Movie", year:2016, poster:angrybirds, rating:10.0, isGood:true},
  {movieName:"Tomorrowland", year:2009, poster:tomorrowland, rating:7.5},
  {movieName:"Spirited Away", year:2001, poster:"https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg", rating:8.6},
  {movieName:"The Truman Show", year:1998, poster:"https://image.tmdb.org/t/p/w500/vuza0WqY239yBXOadKlGwJsZJFE.jpg", rating:8.2},
  {movieName:"Laputa: Castle in the Sky", year:1986, poster:"https://image.bilety24.pl/nf_repertoire_big/dealer-default/1501/laputa-podniebny-zamek.jpg", rating:8.0},
  {movieName:"The Angry Birds Movie 2", year:2019, poster:angrybirds2, rating:10.0, isGood:true}
];
const books: BookProps[] = [
  {title:"Misery", author:"Stephen King", pages:320, year:1987, cover:"https://covers.openlibrary.org/b/title/Misery-L.jpg"},
  {title:"Chrzest ognia", author:"Andrzej Sapkowski", pages:384, year:1996, cover:"https://covers.openlibrary.org/b/title/Chrzest%20ognia-L.jpg"},
  {title:"Kolor magii", author:"Terry Pratchett", pages:288, year:1983, cover:"https://covers.openlibrary.org/b/title/The%20Colour%20of%20Magic-L.jpg"}
];

const albums:AlbumProps[] =[
  {albumName:"Jarmark", bandName:"Taco Hemingway", cover:"https://cdn-images.dzcdn.net/images/cover/8d3755810f6c3cb58d6547850cf45804/500x500-000000-80-0-0.jpg", musicKind:"Rap", year:2020, songs:[], isSongless:true},
  {albumName:"Ready to Die", bandName:"The Notorious B.I.G.", cover:"https://muzikercdn.com/uploads/products/20446/2044619/main_d9651fc1.jpg", musicKind:"Hip-hop", year:1999, songs:[
    {name:"Intro", time:"3:24"},
    {name:"Things Done Changed", time:"3:58"},
    {name:"Gimme the Loot", time:"4:46"},
    {name:"Machine Gun Funk", time:"4:17"},
    {name:"Warning", time:"3:40"},
    {name:"Ready to Die", time:"4:24"},
    {name:"One More Chance", time:"4:43"},
    {name:"#!*@ Me (Interlude)", time:"1:31"},
    {name:"The What", time:"3:57"},
    {name:"Juicy", time:"5:02"},
    {name:"Everyday Struggle", time:"5:19"},
    {name:"Me & My Bitch", time:"4:00"},
    {name:"Big Poppa", time:"4:13"},
    {name:"Respect", time:"5:21"},
    {name:"Friend of Mine", time:"3:28"},
    {name:"Unbelievable", time:"3:43"},
    {name:"Suicidal Thoughts", time:"2:50"}
  ]},
  {albumName:"Who Really Cares", bandName:"TV Girl", cover:"https://citynoiserecords.com/cdn/shop/files/tvgirlWHO1_ac330ba2-3ae5-4bf3-8959-6bd692d889cc.jpg?v=1770187858&width=416", musicKind:"Indie pop", year:2016, songs:[
    {name:"Taking What's Not Yours", time:"3:25"},
    {name:"Song About Me", time:"3:20"},
    {name:"Cigarettes out the Window", time:"3:18"},
    {name:"Till You Tell Me to Leave", time:"3:06"},
    {name:"Not Allowed", time:"3:08"},
    {name:"(Do the) Act Like You Never Met Me", time:"2:44"},
    {name:"Safeword", time:"3:16"},
    {name:"For You", time:"3:00"},
    {name:"Loving Machine", time:"3:30"},
    {name:"Heaven Is a Bedroom", time:"4:08"}
  ]}
]
movies.sort((a, b) => a.movieName.localeCompare(b.movieName));
albums.sort((a, b) => a.albumName.localeCompare(b.albumName));
const [moviesOpen, setMoviesOpen] = useState(false);
const [moiviesAfter2010Open, setMoviesAfter2010Open] = useState(false);
const [booksOpen, setBooksOpen] =useState(false);
const [booksSortedByYearOpen, setBooksSortedByYearOpen] = useState(false);
const [albumsOpen, setAlbumsOpen] = useState(false);
const [albumWithMostSongsOpen, setAlbumWithMostSongsOpen] = useState(false);


const moviesAfter2010: MovieProps[] = movies.filter((movie) => movie.year > 2010); 
const booksSortedByTitle: BookProps[] = [...books].sort((a, b) => a.title.localeCompare(b.title));
const booksSortedByYear: BookProps[] = books.sort((a, b) => a.year - b.year);
let albumWithMostSongs = albums[0];
for (const album of albums) {
  if (album.songs.length > albumWithMostSongs.songs.length) {
    albumWithMostSongs = album;
  }
}


  return (
  <>
    <div className="container">

    <section>

      <h2 style={{cursor:'pointer'}} onClick={() => {setMoviesOpen(!moviesOpen)}}>{moviesOpen ? 'Filmy ⏷' : 'Filmy ▸'}</h2>


      {moviesOpen && (
        <>  <input type="text"className="form-control" placeholder="Wpisz tytuł"/>     
      <div className='row row-cols-3'>  
        {movies.map((movie, index) => (
        <div className='col'>
        <Movie key={index} {...movie} />
        </div>
      ))}  </div></>
      )}
    
    </section>
    <section >
      <h2 style={{cursor:'pointer'}} onClick={() => {setMoviesAfter2010Open(!moiviesAfter2010Open)}}>{moiviesAfter2010Open ? 'Filmy po 2010 roku ⏷' : 'Filmy po 2010 roku ▸'}</h2>
      <div className='row row-cols-3'>
             {moiviesAfter2010Open && moviesAfter2010.map((movie, index) => (
               <div className='col'>
        <Movie key={index}  {...movie} />
              </div>
      ))}
      </div>
 
    </section>

    
     <section >
      <h2 style={{cursor:'pointer'}} onClick={() => {setBooksOpen(!booksOpen)}}>{booksOpen ? 'Książki ⏷' : 'Książki ▸'}</h2>
          <div className='row row-cols-3'>
          {booksOpen && booksSortedByTitle.map((book,index) => (
            <div className='col'>
        <Book key={index}  {...book}/>
        </div>

      ))}
      
          </div>

    </section>
        <section >
      <h2 style={{cursor:'pointer'}} onClick={() => {setBooksSortedByYearOpen(!booksSortedByYearOpen)}}>{booksSortedByYearOpen ? 'Książki posortowane po roku ⏷' : 'Książki posortowane po roku ▸'}</h2>
      <div className='row row-cols-3'>
      {booksSortedByYearOpen && booksSortedByYear.map((book,index) => (
        <div className='col'>
        <Book key={index}  {...book}/>
        </div>

      ))}
      </div>
      
    </section>

     <section>
      <h2 style={{cursor:'pointer'}} onClick={() => {setAlbumsOpen(!albumsOpen)}}>{albumsOpen ? 'Albumy ⏷' : 'Albumy ▸'}</h2>
      <div className='row row-cols-3'>
        {albumsOpen && albums.map((album,index) => (
          <div className='col'>
            <Album key={index} {...album}/>
          </div>
        )) }

      </div>
    </section>
  
     <section>
      <h2 style={{cursor:"pointer"}} onClick={()=>{setAlbumWithMostSongsOpen(!albumWithMostSongsOpen)}}>{albumWithMostSongsOpen ? "Album z największą liczbą utworów ⏷" : "Album z największą liczbą utworów ▸"}</h2>
       {albumWithMostSongsOpen && <Album {...albumWithMostSongs}/>}
     </section>
     </div>
    
  </>
  )
}

export default App;
