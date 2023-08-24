import React from "react"
import MainPageArts from "../MainPageArts/MainPageArts"
const MainPageArtsList = ({ arts }) => {
  return (
    <div className="container__MainPageArts">
      {arts.map((art) => (
        <MainPageArts artDescription={art} key={art.id} />
      ))}
    </div>
  )
}

export default MainPageArtsList
