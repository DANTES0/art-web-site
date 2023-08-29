import React from "react"
import { createBrowserRouter } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"
import Main from "../pages/Main"
import Registration from "../pages/Registration"
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "main",
        element: <Main />,
      },
      {
        path: "registration",
        element: <Registration />,
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
