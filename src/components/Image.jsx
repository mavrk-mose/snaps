import { useState } from "react";
import { StarRounded } from "@material-ui/icons";

function cn(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  
function BlurImage({image, title, aired, score, trailer}) {
    const [isLoading, setLoading] = useState(true);

    
  return (
    <a href={trailer} title="watch trailer">
        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                alt="Anime Image"
                src={image} 
                layout="fill"
                objectfit = "cover"
                className={cn('group-hover:opacity-75 duration-700 ease-in-out',
                isLoading ? 'grayscale blur-2xl scale-110' : 'grayscale-0 blur-0 scale-100')}
              onLoad={() => setLoading(false)}
              />    
        </div>
          <h3 className="mt-4 text-sm text-yellow-700">{title}</h3>
        <div className="flex text-yellow-700">
          <StarRounded/> {score}
        </div>
        <p className="mt-1 text-lg font-small text-yellow-900">{aired}</p>
    </a>
  );
}
export default BlurImage;

