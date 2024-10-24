import { NETFLIX_IMG } from "../utils/constants"
import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"


const GptSearch = () => {
  return (
    <>
      <div className='fixed sm:fixed md:fixed lg:fixed xl:fixed -z-10 sm:-z-10 md:-z-10 lg:-z-10 xl:-z-10 inset-0 sm:inset-0 md:inset-0 lg:inset-0 xl:inset-0'>
      <img className="w-full sm:w-full md:w-full lg:w-full xl:w-full h-full sm:h-full md:h-full lg:h-full xl:h-full object-cover sm:object-cover md:object-cover lg:object-cover xl:object-cover" src={NETFLIX_IMG} alt='netflix-bg-img'/>
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch
