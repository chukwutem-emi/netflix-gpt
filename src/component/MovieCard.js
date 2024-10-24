import { IMG_CDN_URL } from "../utils/constants"


const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="w-28 mb-8 xl:w-48 lg:w-48 md:w-48 sm:w-36 pr-4">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
  )
}

export default MovieCard
