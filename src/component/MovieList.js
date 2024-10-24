import MovieCard from "./MovieCard"


const MovieList = ({title, movies}) => {
  return (
    <div className="px-4">
        <h1 className="text-base sm:text-xl xl:text-xl lg:text-xl md:text-xl font-bold p-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
            {movies && movies.length > 0 ? (movies.map(movie =>
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
            )):(
              <p>No movies available!. Search for movies</p>
            )}
        </div>
      </div>
    </div>
  )
}

export default MovieList
