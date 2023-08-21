import { useState } from "react"
import Menu from "../Menu/Menu"
import NavBarLeftPanel from "../NavBarLeftPanel/NavBarLeftPanel"
import "./NavBar.css"

function NavBar() {
  //создаём состояние у родителя для дочернего компонента
  const [menuActive, setMenuActive] = useState(false)
  const items = [
    { value: "Главная", href: "/main", icon: "title" },
    { value: "Профиль", href: "/profile", icon: "title" },
    { value: "Галлерея", href: "/gallery", icon: "title" },
  ]
  return (
    <div className="navmenu">
      {/*кидаем через пропсы состояние в активируемый компонент Menu а также в компонент, из которого будут выполняться действия NavBarLeftPanel, свойства у детей будут браться от родителя, тем самым соседние дети будут обмениваться свойствами для работоспособности */}
      <NavBarLeftPanel active={menuActive} setActive={setMenuActive} />
      <Menu
        active={menuActive}
        setActive={setMenuActive}
        header={"Бургер меню"}
        items={items}
      />
      <div className="navmenu__right__panel">
        <button className="navmenu__btn">+</button>
        <input type="text" className="navmenu__search" placeholder="Поиск..." />
      </div>
    </div>
  )
}

export default NavBar
