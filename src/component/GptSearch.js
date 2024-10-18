import { NETFLIX_IMG } from "../utils/constants"
import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"


const GptSearch = () => {
  return (
    <div className="">
        <div className='fixed -z-10'>
        <img src={NETFLIX_IMG} alt='netflix-bg-img'/>
        </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch
