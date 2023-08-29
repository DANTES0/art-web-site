import { useState } from "react"
import "./App.css"
import MainPageArts from "./components/MainPageArts/MainPageArts"
import NavBar from "./components/NavBar/NavBar"
import SearchImage from "./components/SearchImage/SearchImage"
import MainPageArtsList from "./components/MainPageArtsList/MainPageArtsList"
import DescriptionArts from "./components/DescriptionArts/DescriptionArts"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Main from "./pages/Main"
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [
        {
          path: "main",
          element: <Main />,
        },
      ],
    },
    //Чтобы навбара небыло можно делать не в дочерние
    {
      path: "/test",
      element: <Main />,
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
