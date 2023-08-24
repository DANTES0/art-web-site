import { useState } from "react"
import "./App.css"
import MainPageArts from "./components/MainPageArts/MainPageArts"
import NavBar from "./components/NavBar/NavBar"
import SearchImage from "./components/SearchImage/SearchImage"
import MainPageArtsList from "./components/MainPageArtsList/MainPageArtsList"
function App() {
  const [arts, setArts] = useState([
    { id: 1, title: "Хина Амано", picture: "firstArt.jpg" },
    { id: 2, title: "Хина Амано", picture: "secondArt.jpg" },
    { id: 3, title: "Хина Амано", picture: "thirdArt.png" },
    { id: 4, title: "Хина Амано", picture: "fourthArt.jpg" },
    { id: 5, title: "Хина Амано", picture: "fifthArt.jpg" },
  ])
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <SearchImage />
        <MainPageArtsList arts={arts} />
      </div>
    </div>
  )
}

export default App
