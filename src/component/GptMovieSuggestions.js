import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const text = useSelector((store)=>store.text?.search);
  const removeDuplicate = (movies = []) => {
    const uniqueMovies = [];
    const movieIds = new Set();

    Array.isArray(movies) && movies.forEach((movie) => {
      !movieIds.has(movie.id) && 
        uniqueMovies.push(movie) &&
        movieIds.add(movie.id)  
    });
    return uniqueMovies;
  };
  const unique = removeDuplicate(text)
  console.log("unique:", unique)
  if (!text) {
    return <p className="font-bold text-lg text-red-500 bg-white w-[30rem] my-2 mx-auto text-center p-4 rounded-lg">movie not found!</p>;
  }

  return (
    <div className="bg-gray-600 bg-opacity-95  text-white my-8">
      <div> 
          <MovieList title={unique.title} movies={unique}/>
      </div>
    </div>
  )
}

export default GptMovieSuggestions
