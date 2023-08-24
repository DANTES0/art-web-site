import { useState } from "react"
import "./App.css"
import MainPageArts from "./components/MainPageArts/MainPageArts"
import NavBar from "./components/NavBar/NavBar"
import SearchImage from "./components/SearchImage/SearchImage"
import MainPageArtsList from "./components/MainPageArtsList/MainPageArtsList"
import DescriptionArts from "./components/DescriptionArts/DescriptionArts"
function App() {
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
  const [open, setOpen] = useState(false)
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <SearchImage />
        <MainPageArtsList active={open} isActive={setOpen} arts={arts} />
        <DescriptionArts active={open} isActive={setOpen} />
      </div>
    </div>
  )
}

export default App
