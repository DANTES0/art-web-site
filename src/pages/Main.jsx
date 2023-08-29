import React, { useState } from "react"
import SearchImage from "../components/SearchImage/SearchImage"
import MainPageArtsList from "../components/MainPageArtsList/MainPageArtsList"
import "../App.css"
const Main = () => {
  const [arts, setArts] = useState([
    { id: 1, title: "Хина Амано", picture: "firstArt.jpg" },
    { id: 2, title: "Хина Амано", picture: "secondArt.jpg" },
    { id: 3, title: "Хина Амано", picture: "thirdArt.png" },
    { id: 4, title: "Хина Амано", picture: "fourthArt.jpg" },
    { id: 5, title: "Хина Амано", picture: "fifthArt.jpg" },
    { id: 6, title: "You lie in april", picture: "sixArt.jpg" },
    { id: 7, title: "You lie in april", picture: "sevenArt.jpg" },
    { id: 8, title: "Horomiya", picture: "eightArt.jpg" },
  ])
  return (
    <div className="container">
      <SearchImage />
      <MainPageArtsList arts={arts} />
    </div>
  )
}

export default Main
