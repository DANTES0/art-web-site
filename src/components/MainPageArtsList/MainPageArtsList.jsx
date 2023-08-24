import React, { useState } from "react"
import MainPageArts from "../MainPageArts/MainPageArts"
const MainPageArtsList = ({ arts, active, isActive }) => {
  return (
    <div className="container__MainPageArts">
      {arts.map((art) => (
        <MainPageArts
          active={active}
          isActive={isActive}
          artDescription={art}
          key={art.id}
        />
      ))}
    </div>
  )
}

export default MainPageArtsList
