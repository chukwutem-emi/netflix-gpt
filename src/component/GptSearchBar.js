import { useDispatch, useSelector } from "react-redux"
import lang from "../utils/languegeConstants"
import { useRef } from "react";
import { addSearchMovie } from "../utils/searchTextSlice";
import { API_OPTIONS } from "../utils/constants";



const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang)
  const movieList = useSelector((store) => store.movies)
  const dispatch = useDispatch()
  const searchText = useRef(null)
  const searchMovieTMDB = async (movieName) =>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movieName+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async() => {
    const searchTerm = searchText.current.value.toLowerCase();
    const allMovies = [
      ...movieList.nowPlayingMovies,
      ...movieList.popularMovies,
      ...movieList.upcomingMovies,
      ...movieList.topRatedMovies
    ];
    const filteredMovies = allMovies.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));
    console.log("FILTERED:",filteredMovies);
    // For each movie I will search TMDB API
    const promiseArray = filteredMovies.map((movieName) => searchMovieTMDB(movieName))
    // [promise, promise e.t.c]

    const tmdbResult = await Promise.all(promiseArray);
    dispatch(addSearchMovie({search:filteredMovies, otherResult:tmdbResult}))
    console.log("TMDB:", tmdbResult);

  };
  return (
    <div className="my-0 mx-auto w-[30rem] pt-[10%]">
      <form  className="bg-black w-[30rem] rounded-lg grid grid-cols-12" onSubmit={(e) =>e.preventDefault()}>
        <input ref={searchText} type="text" placeholder={lang[langKey].gptSearchPlaceHolder} className="mr-2 p-2 mb-4 ml-4 mt-4 outline-none hover:border-gray-500 border-2 col-span-9 rounded-lg" autoFocus/>
        <button type="button" className="mr-2 p-2 mb-4 mt-4 bg-red-700 text-white rounded-lg col-span-3" onClick={handleGptSearchClick}>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
