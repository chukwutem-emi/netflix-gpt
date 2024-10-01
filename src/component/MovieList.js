import MovieCard from "./MovieCard"


const MovieList = ({title, movies}) => {
    console.log(movies)
  return (
    <div className="px-4">
        <h1 className="text-xl font-bold p-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
            {movies && movies.length > 0 ? (movies.map(movie =>
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
            )):(
              <p>No movies available</p>
            )}
        </div>
      </div>
    </div>
  )
}

export default MovieList
