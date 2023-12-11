import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from "./pages/home/Home";
import MovieList from "./pages/movieList/MovieList";
import Movie from "./pages/movieDetails/Movie";
//import Footer from './components/footer/Footer';



function App() {
  return (
    <div>
      
      <Router>
      <Header />
      <div>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
        </div>
      </Router>
      
    </div>
  )
};

export default App;
