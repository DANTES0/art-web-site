import { useState } from "react"
import Menu from "../Menu/Menu"
import NavBarLeftPanel from "../NavBarLeftPanel/NavBarLeftPanel"
import "./NavBar.css"
import NavBarRightPanel from "../NavBarRightPanel/NavBarRightPanel"
import ProfileDropDown from "../ProfileDropDown/ProfileDropDown"
import { Outlet } from "react-router-dom"

function NavBar() {
  //создаём состояние у родителя для дочернего компонента
  const [menuActive, setMenuActive] = useState(false)
  const [profileActive, setProfileActive] = useState(false)
  const items = [
    { value: "Главная", href: "/main", icon: "title" },
    { value: "Профиль", href: "/profile", icon: "title" },
    { value: "Галерея", href: "/gallery", icon: "title" },
  ]
  return (
    <div className="App">
      <div className="navmenu">
        {/*кидаем через пропсы состояние в активируемый компонент Menu а также в компонент, из которого будут выполняться действия NavBarLeftPanel, свойства у детей будут браться от родителя, тем самым соседние дети будут обмениваться свойствами для работоспособности */}
        <NavBarLeftPanel active={menuActive} setActive={setMenuActive} />
        <Menu
          active={menuActive}
          setActive={setMenuActive}
          header={"Меню"}
          items={items}
        />
        <NavBarRightPanel
          activeProfile={profileActive}
          setActiveProfile={setProfileActive}
        />
        <ProfileDropDown
          activeProfile={profileActive}
          setActiveProfile={setProfileActive}
        />
      </div>
      <Outlet />
    </div>
  )
}

export default NavBar
