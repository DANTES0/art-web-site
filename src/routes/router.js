import React from "react"
import { createBrowserRouter } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"
import Main from "../pages/Main"
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

export default router
