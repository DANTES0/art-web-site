import React, { useState } from "react"
import "./MainPageArts.css"
import MainPageArtsTags from "../MainPageArtsTags/MainPageArtsTags"
import DescriptionArts from "../DescriptionArts/DescriptionArts"
const MainPageArts = (props) => {
  const img = require(`../../utils/images/${props.artDescription.picture}`)
  const [open, setOpen] = useState(false)
  return (
    <div
      onClick={() => {
        setOpen(!open)
      }}
      className={open ? "MainPageArts" : "MainPageArts_none MainPageArts"}
    >
      <img className="MainPageArts__Image" src={img} />
      <div className="MainPageArts__tags">
        <MainPageArtsTags />
        <MainPageArtsTags />
        <MainPageArtsTags />
      </div>
      <DescriptionArts
        active={open}
        isActive={setOpen}
        art={props.artDescription}
      />
    </div>
  )
}

export default MainPageArts
