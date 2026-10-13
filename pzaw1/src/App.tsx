import './App.css';
import Movie from './Movie';
import Book from './Book';
import Album from './Album';
import angrybirds from './assets/The_Angry_Birds_Movie_poster.png';
import tomorrowland from './assets/Tomorrowland.png';
import angrybirds2 from './assets/The_Angry_Birds_Movie_2.png'; 
function App() {


  return (
  <>

    <section>
    <Movie movieName="The Angry Birds Movie" year={2018} poster={angrybirds} />
    <Movie movieName="Tomorrowland" year={2030} poster={tomorrowland} />
     <Movie movieName="The Angry Birds Movie 2" year={2025} poster={angrybirds2} />
     </section>
     <section>
      

     </section>
  </>
  )
}

export default App;
