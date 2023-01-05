import React, { useEffect, useState } from 'react'
import BlurImage from './components/Image';
import TV from './components/TV';
import axios from "axios";

function App() {
  const [topAnime, setTopAnime] = useState([]);

useEffect(() => {
    axios('https://api.jikan.moe/v4/top/anime?filter=movies')
    .then(response =>{
    setTopAnime(prev => {
      prev = response.data.data
      return prev
    });
  })
  }, []);

  return (
    <div className="mx-auto max-w-2xl py-16 sm:py-24 px-8 sm:px-8 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {topAnime.map((anime, index) => {
            return (
              <BlurImage key={index} trailer={anime.trailer.url} image={anime.images.webp.image_url} title={anime.title} aired={anime.aired.string}/>
            )
          })}
        </div>
    </div>
  )
}

export default App
