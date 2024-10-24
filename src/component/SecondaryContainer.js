import { useSelector } from "react-redux"
import MovieList from "./MovieList"


const SecondaryContainer = () => {
  const movie =  useSelector(store => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-10 sm:-mt-52 relative z-30">
        <MovieList title={"Now Playing"} movies={movie.nowPlayingMovies}/>
        <MovieList title={"Trending"} movies={movie.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movie.popularMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movie.upcomingMovies}/>
        <MovieList title={"Top Rated"} movies={movie.topRatedMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer
