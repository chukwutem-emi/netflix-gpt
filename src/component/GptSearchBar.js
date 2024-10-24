import { useDispatch, useSelector } from "react-redux"
import lang from "../utils/languegeConstants"
import { useRef, useState } from "react";
import { addSearchMovie } from "../utils/searchTextSlice";


const GptSearchBar = () => {
  const [isLoading, setIsLoading] = useState(false)
  const langKey = useSelector((store) => store.config.lang)
  const movieList = useSelector((store) => store.movies)
  const dispatch = useDispatch()
  const searchText = useRef(null)

  const handleGptSearchClick = () => { 
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false)
    },500);
    const searchTerm = searchText.current.value.toLowerCase();
    const allMovies = [
      ...movieList.nowPlayingMovies,
      ...movieList.popularMovies,
      ...movieList.upcomingMovies,
      ...movieList.topRatedMovies
    ];
    const filteredMovies = allMovies.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));
    dispatch(addSearchMovie(filteredMovies));

  };
  return (
    <div className="my-0 mx-auto xl:w-[30rem] lg:w-[30rem] md:w-[30rem] sm:w-[30rem] pt-[10%]">
      <form  className="bg-black md:w-[30rem] rounded-lg grid grid-cols-6 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 xl:mt-24 lg:mt-24 mt-24 sm:mt-24 md:mt-24 mx-1" onSubmit={(e) =>e.preventDefault()}>
        <input ref={searchText} type="text" placeholder={lang[langKey].gptSearchPlaceHolder} className="mr-1 xl:mr-2 lg:mr-2 md:mr-2 sm:mr-2 xl:p-2 lg:p-2 md:p-2 sm:p-2 xl:my-4 lg:my-4 md:my-4 sm:my-4 mb-1 xl:ml-4 lg:ml-4 md:ml-4 sm:ml-4 ml-1 mt-1 outline-none hover:border-gray-500 border-2 col-span-4 xl:col-span-9 lg:col-span-9 md:col-span-9 sm:col-span-9 rounded-lg text-sm p-1" autoFocus/>
        <button type="button" className="mr-1 xl:mr-2 lg:mr-2 md:mr-2 sm:mr-2 p-1 xl:p-2 lg:p-2 md:p-2 sm:p-2 mt-1 mb-1 xl:my-4 lg:my-4 md:my-4 sm:my-4 bg-red-700 text-white rounded-lg col-span-2 xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-3" onClick={handleGptSearchClick} disabled={isLoading}>{isLoading ? lang[langKey].processing : lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
