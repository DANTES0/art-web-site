import "./App.css"
import MainPageArts from "./components/MainPageArts/MainPageArts"
import NavBar from "./components/NavBar/NavBar"
import SearchImage from "./components/SearchImage/SearchImage"
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <SearchImage />
        <div className="container__MainPageArts">
          <MainPageArts
            artDescription={{
              id: 1,
              title: "Хина Амано",
              picture: "firstArt.jpg",
            }}
          />
          <MainPageArts
            artDescription={{
              id: 2,
              title: "Хина Амано",
              picture: "secondArt.jpg",
            }}
          />
          <MainPageArts
            artDescription={{
              id: 3,
              title: "Хина Амано",
              picture: "thirdArt.png",
            }}
          />
          <MainPageArts
            artDescription={{
              id: 4,
              title: "Хина Амано",
              picture: "fourthArt.jpg",
            }}
          />
          <MainPageArts
            artDescription={{
              id: 5,
              title: "Хина Амано",
              picture: "fifthArt.jpg",
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default App
