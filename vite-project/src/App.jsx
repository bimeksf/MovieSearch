import React from "react";
import Movie from "./components/Movie";

import MovieSearch from "./components/MovieSearch";
function App() {

  //const apiKey = process.env.REACT_APP_API_KEY;

  return (
    <div className="min-h-screen  text-center bg-slate-950 p-4 font-serif sm:p-10 ">

      <h1 className="text-3xl font-bold text-red-500">Movie Search</h1>
      <MovieSearch/>
      


    </div>
  );
}

export default App;
