
function BlurImage({image}) {
  return (
    <a href="#" className="group">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img
            alt="Anime Image"
            src={image} 
            layout="fill"
            objectfit = "cover"
            className='group-hover:opacity-75 duration-700 ease-in-out'   
          />
        
      </div>
      <h3 className="mt-4 text-sm text-gray-700">ger</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">@leeerob</p>
    </a>
  );
}
export default BlurImage;

