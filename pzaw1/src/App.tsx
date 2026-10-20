import './App.css';
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

const movies: MovieProps[]= [];
movies.push({movieName:"The Angry Birds Movie", year:2016, poster:angrybirds});
movies.push({movieName:"Tomorrowland", year:2015, poster:tomorrowland});
movies.push({movieName:"The Angry Birds Movie 2", year:2019, poster:angrybirds2});

const books: BookProps[] = [];
books.push({title:"Igrzyska śmierci", pages:374, year:2008, cover:"https://upload.wikimedia.org/wikipedia/en/4/42/HungerGamesPoster.jpg"});
books.push({title:"Więzień labirynntu", pages:368, year:2009, cover:"https://upload.wikimedia.org/wikipedia/en/c/c6/Maze_Runner_poster.jpg"});
books.push({title:"Divergent", pages:386, year:2011, cover:"https://upload.wikimedia.org/wikipedia/en/f/f4/Divergent.jpg"});

const albums:AlbumProps[] =[
  
]

const [moviesOpen, setMoviesOpen] = useState(false);
const [booksOpen, setBooksOpen] =useState(false);
const [albumsOpen, setAlbumsOpen] = useState(false);
  return (
  <>
    
    <section>
      <h2 onClick={() => {setMoviesOpen(!moviesOpen)}}>Filmy</h2>
      {moviesOpen && movies.map((movie, index) => (
        <Movie key={index} movieName={movie.movieName} year={movie.year} poster={movie.poster} />
      ))}
    </section>

    
     <section>
      <h2 onClick={() => {setBooksOpen(!booksOpen)}}>Książki</h2>
      {booksOpen && books.map((book,index) => (
        <Book key={index} title={book.title} pages={book.pages} year={book.year} cover = {book.cover} />

      ))}
      
    </section>

     <section>
      <h2 onClick={() => {setAlbumsOpen(!setAlbumsOpen)}}>Albumy</h2>
       {albumsOpen && albums.map((album,index) =>(
        <Album key={index} albumName={album.albumName} bandName={album.bandName} cover={album.cover} musicKind={album.musicKind} year={album.year} songs ={album.songs}  />

       ))}

     </section>
    
  </>
  )
}

export default App;
