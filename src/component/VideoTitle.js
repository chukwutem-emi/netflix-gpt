
const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-[20%] px-20 absolute bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="font-bold text-3xl text-red-600 font-sans">{title}</h1>
      <p className="text-lg text-white  w-[50%] mt-4">{overview}</p>
      <div className="mt-4  w-[50%] flex-nowrap">
        <button className="text-black bg-white shadow-lg px-8 py-2 font-bold text-lg cursor-pointer mr-8 hover:bg-opacity-80">▷ Play</button>
        <button className="bg-white shadow-lg text-black font-bold text-lg px-8 py-2 cursor-pointer mr-8 hover:bg-opacity-80">ℹ️More Info</button> 
      </div>
    </div>
  )
}

export default VideoTitle
