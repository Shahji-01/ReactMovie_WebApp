import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Trending from "./Components/Trending.jsx";
import Popular from "./Components/Popular.jsx";
import Movie from "./Components/Movie.jsx";
import TvShow from "./Components/TvShows.jsx";
import People from "./Components/People.jsx";
import MovieDetails from "./Components/MovieDetails.jsx";
import TvDetails from "./Components/TvDetails.jsx";
import PersonDetails from "./Components/PersonDetails.jsx";
import Trailer from "./templates/Trailer.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
function App() {
  return (
    <div className="bg-[#1F1E24] w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<MovieDetails />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />}/>
        </Route>
        <Route path="/tvShow" element={<TvShow />} />
        <Route path="/tv/details/:id" element={<TvDetails />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer />}/>
        </Route>
        <Route path="/people" element={<People />} />
        <Route path="/person/details/:id" element={<PersonDetails />} />
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
