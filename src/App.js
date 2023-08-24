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
          <MainPageArts />
          <MainPageArts />
          <MainPageArts />
          <MainPageArts />
          <MainPageArts />
          <MainPageArts />
          <MainPageArts />
          <MainPageArts />
          <MainPageArts />
          <MainPageArts />
        </div>
      </div>
    </div>
  )
}

export default App
