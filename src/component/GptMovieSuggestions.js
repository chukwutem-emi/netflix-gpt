import { useSelector } from "react-redux"
import MovieList from "./MovieList";


const GptMovieSuggestions = () => {
  const text = useSelector((store)=>store.text);
  const {search, otherResult} = text;
  console.log("search data:",search)
  if (!search || search.length === 0) {
    return null;
  }


  return (
    <div className="bg-black bg-opacity-80  text-white">
      <div> 
        {search.map((movie, index) =>(
            <MovieList key={search.title} title={movie.title} movies={otherResult[index]}/>
        ))};
      </div>
    </div>
  )
}

export default GptMovieSuggestions
