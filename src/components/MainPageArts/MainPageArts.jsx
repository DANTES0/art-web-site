import React from "react"
import "./MainPageArts.css"
import MainPageArtsTags from "../MainPageArtsTags/MainPageArtsTags"
const MainPageArts = () => {
  return (
    <div className="MainPageArts">
      <div className="MainPageArts__Image"></div>
      <div className="MainPageArts__tags">
        <MainPageArtsTags />
        <MainPageArtsTags />
        <MainPageArtsTags />
      </div>
    </div>
  )
}

export default MainPageArts
