import React from "react"

const NavBarRightPanel = ({ activeProfile, setActiveProfile }) => {
  return (
    <div className="navmenu__right__panel">
      <div
        className="profile"
        onClick={() => setActiveProfile(!activeProfile)}
      ></div>
      {/* <button className="navmenu__btn">+</button>
      <input type="text" className="navmenu__search" placeholder="Поиск..." /> */}
    </div>
  )
}

export default NavBarRightPanel
