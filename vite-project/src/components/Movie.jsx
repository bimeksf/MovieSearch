export default function Movie({ movie }) {
    return (
      <div className="flex justify-center items-stretch max-w-[600px] min-h-[400px] p-4 bg-slate-200 w-5/6 gap-4 rounded-lg shadow-lg text-black font-serif max-sm:flex-col max-sm:mb-4 max-sm:mt-4">
        {/* Obrázek s pevnou výškou */}
        <img
          className="rounded-md object-cover w-[185px] h-[278px] flex-shrink-0"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={movie.title}
        />
        {/* Obsah se rovnoměrně roztáhne */}
        <div className="text-left m-2 ">
          <div>
            <h2 className="text-xl font-bold">{movie.title}</h2>
            <p className="mt-1">Release Date: {movie.release_date}</p>
            <p className="">Rating: {movie.vote_average}</p>
          </div>
          {/* Popis s omezenou výškou */}
          <p className="mt-10 line-clamp-4 overflow-hidden">{movie.overview}</p>
        </div>
      </div>
    );
  }
  