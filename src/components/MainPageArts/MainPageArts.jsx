import React from "react"
import "./MainPageArts.css"
import MainPageArtsTags from "../MainPageArtsTags/MainPageArtsTags"
const MainPageArts = (props) => {
  const img = require(`../../utils/images/${props.artDescription.picture}`)
  return (
    <div className="MainPageArts">
      <img className="MainPageArts__Image" src={img} />
      <div className="MainPageArts__tags">
        <MainPageArtsTags />
        <MainPageArtsTags />
        <MainPageArtsTags />
      </div>
    </div>
  )
}

export default MainPageArts
