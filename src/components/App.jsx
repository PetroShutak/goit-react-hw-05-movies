import { Routes, Route } from "react-router-dom";
import Home from 'pages/Home'
import Movies from 'pages/Movies'
import MovieDetails from 'pages/MovieDetails'
import Header from 'components/Header/Header'

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Route>
      </Routes>
    </div>
  );
};





