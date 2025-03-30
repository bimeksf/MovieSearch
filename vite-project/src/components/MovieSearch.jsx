import { useState, useEffect, useCallback } from "react";

import Movie from "./Movie";
export default function MovieSearch() {
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const apikey = import.meta.env.VITE_API_KEY;

  const searchMovie = useCallback(async () => {
    if (query.length < 3) {
      setMovie([]);

      return;
    }
    setLoading(true);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const response = await fetch(url);

      const data = await response.json();

      setMovie(data.results || []);

      console.log(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [query, apikey]);
  useEffect(() => {
    const debounce = setTimeout(() => {
      searchMovie();
    }, 500);

    return () => clearTimeout(debounce);
  }, [query, searchMovie]);

  const movies = movie
    .filter((movie) => movie.poster_path)
    .map((movie) => <Movie key={movie.id} movie={movie} />);

  function handleSubmit(e) {
    e.preventDefault();
    searchMovie();
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center p-4 gap-1"
      >
        <input
          type="text"
          placeholder="Search for a Movie.."
          className="p-3 border-1 border-stone-500 bg-stone-800   outline-none rounded-md focus:outline-4 outline-white  text-white "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button
          type="submit"
          className="bg-red-600 text-white rounded-lg p-4 mx-2 capitalize font-bold hover:bg-red-800 transition-all delay-100 tracking-wide "
        >
          search
        </button>
      </form>
      <div className="flex  justify-center items-center gap-4 flex-wrap">
        {loading ? (
          <p className="text-lg text-white mt-7">Loading...</p> // Pokud se filmy načítají
        ) : movies.length > 0 ? (
          movies
        ) : (
          <p className="text-lg text-white mt-7">No Movie Found</p> // Pokud nejsou žádné filmy
        )}
      </div>
    </>
  );
}
