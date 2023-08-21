import { useState } from "react"
import Menu from "../Menu/Menu"
import NavBarLeftPanel from "../NavBarLeftPanel/NavBarLeftPanel"
import "./NavBar.css"

function NavBar() {
  const [menuActive, setMenuActive] = useState(false)
  const items = [
    { value: "Главная", href: "/main", icon: "title" },
    { value: "Профиль", href: "/profile", icon: "title" },
    { value: "Галлерея", href: "/gallery", icon: "title" },
  ]
  return (
    <div className="navmenu">
      <NavBarLeftPanel />
      <div className="navmenu__right__panel">
        <button
          className="navmenu__btn"
          onClick={() => setMenuActive(!menuActive)}
        >
          +
        </button>
        <input type="text" className="navmenu__search" placeholder="Поиск..." />
      </div>
      <Menu
        active={menuActive}
        setActive={setMenuActive}
        header={"Бургер меню"}
        items={items}
      />
    </div>
  )
}

export default NavBar
