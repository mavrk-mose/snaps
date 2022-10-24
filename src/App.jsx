import React, { useEffect, useState } from 'react'
import BlurImage from './components/Image';
import axios from "axios";

function App() {
  const [search, setSearch] = useState([]);
  const [topAnime, setTopAnime] = useState([]);

  useEffect(() => {
    axios('https://api.jikan.moe/v4/top/anime')
    .then(response =>{
    setTopAnime(prev => {
      prev = response.data.data
      return prev
    });
    console.log(response.data.data)
  })
  }, []);
  return (
    <div className="max-w-2xl mx-auto py-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {topAnime.map((anime, index) => {
            return (
              <BlurImage key={index} image={anime.images.webp.image_url}/>
            )
          })}
        </div>
    </div>
  )
}

export default App
