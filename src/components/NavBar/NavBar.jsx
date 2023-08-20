import NavBarLeftPanel from "../NavBarLeftPanel/NavBarLeftPanel"
import "./NavBar.css"

function NavBar() {
  return (
    <div className="navmenu">
      <NavBarLeftPanel />
      <div className="navmenu__right__panel">
        <button className="navmenu__btn">+</button>
        <input type="text" className="navmenu__search" placeholder="Поиск..." />
      </div>
    </div>
  )
}

export default NavBar
