
const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-[20%] px-20 absolute bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="font-bold text-base sm:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-red-600 font-sans">{title}</h1>
      <p className="hidden xl:block lg:block md:block sm:block text-lg text-white  w-[50%] mt-4">{overview}</p>
      <div className="sm:mt-4  flex-nowrap flex">
        <button className="hidden xl:block lg:block md:block sm:block text-black bg-white shadow-lg xl:px-8 lg:px-8 md:px-8 sm:px-8 xl:py-2 lg:py-2 md:py-2 sm:py-2 xl:font-bold lg:font-bold md:font-bold sm:font-bold xl:text-lg lg:text-lg md:text-lg sm:text-lg cursor-pointer mr-8 hover:bg-opacity-80">▷Play</button>
        <button className="bg-white hidden xl:block lg:block md:block shadow-lg text-black xl:font-bold lg: sm:font-bold sm:text-lg sm:px-8 sm:py-2 cursor-pointer mr-8 hover:bg-opacity-80">ℹ️More Info</button> 
        <button className="bg-white hidden xl:block lg:block md:block shadow-lg text-black xl:font-bold lg:font-bold md:font-bold sm:font-bold xl: sm:text-lg sm:px-8 sm:py-2 cursor-pointer mr-8 hover:bg-opacity-80">ℹ️More Info</button> 
        <button className="bg-white hidden xl:block lg:block md:block shadow-lg text-black xl:font-bold lg:font-bold md:font-bold sm:font-bold xl:text-lg lg:text-lg md:text-lg sm:text-lg xl:px-8 lg:px-8 md:px-8 sm:px-8 xl:py-2 lg:py-2 md:py-2 sm:py-2 cursor-pointer mr-8 hover:bg-opacity-80">ℹ️More Info</button> 
      </div>
    </div>
  )
}

export default VideoTitle
