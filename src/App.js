import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import FilterType from "./components/FilterType";
import Movies from "./components/Movies";
import CartOffCanvas from "./components/CartOffCanvas";

import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [favouriteMovies, setfavouriteMovies] = useState([]);
  const [searchInput, setsearchInput] = useState("");
  const [filterType, setfilterType] = useState("");
  const [dependencies, setdependencies] = useState("");

  async function getMovie() {
    const req = await fetch(
      `https://www.omdbapi.com?s=${searchInput}&type=${filterType}&apikey=91385d99`
    );

    // with id you can fetch detailed information http://www.omdbapi.com/?i=tt3896198&apikey=1c558c7a
    const res = await req.json();
    if (res.Search) {
      setMovies(res.Search);
    }
  }

  useEffect(() => {
    getMovie();

    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-watchList")
    );

    if (movieFavourites) {
      setfavouriteMovies(movieFavourites);
    }
  }, [searchInput, setsearchInput]);

  useEffect(() => {}, [favouriteMovies]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-watchList", JSON.stringify(items));
  };

  return (
    <div className="App container">
      <h3>Movies App</h3>
      <div className="header">
        <Search searchInput={searchInput} setsearchInput={setsearchInput} />
        <FilterType filterType={filterType} setfilterType={setfilterType} />
        <CartOffCanvas
          movies={movies}
          favouriteMovies={favouriteMovies}
          setfavouriteMovies={setfavouriteMovies}
          saveToLocalStorage={saveToLocalStorage}
        />
      </div>

      <div className="row">
        <Movies
          movies={movies}
          setMovies={setMovies}
          setfavouriteMovies={setfavouriteMovies}
          saveToLocalStorage={saveToLocalStorage}
        />
      </div>
    </div>
  );
}

export default App;
