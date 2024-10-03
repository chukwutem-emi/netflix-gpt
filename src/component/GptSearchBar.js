import { useSelector } from "react-redux"
import lang from "../utils/languegeConstants"


const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang)
  return (
    <div className="my-0 mx-auto w-[30rem] pt-[10%]">
      <form  className="bg-black w-[30rem] rounded-lg grid grid-cols-12">
        <input type="text" placeholder={lang[langKey].gptSearchPlaceHolder} className="mr-2 p-2 mb-4 ml-4 mt-4 outline-none hover:border-gray-500 border-2 col-span-9 rounded-lg" autoFocus/>
        <button type="button" className="mr-2 p-2 mb-4 mt-4 bg-red-700 text-white rounded-lg col-span-3">{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
