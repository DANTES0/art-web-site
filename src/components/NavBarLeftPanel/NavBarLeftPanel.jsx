import { useState } from "react"
import "../NavBar/NavBar.css"

function NavBarLeftPanel() {
  //Использование хука useState, где hideLine переменная, которую надо менять функцией setHideLine
  const [hideLine, setHideLine] = useState("")

  //Функция, которая меняет стиль элемента css
  function hide() {
    if (style.display === "none") {
      setHideLine("")
    } else {
      setHideLine("none")
    }
  }
  //Объект, который содержит стили для изменения
  const style = { display: hideLine }

  return (
    <div className="navmenu__left__panel">
      <div className="navmenu__burger" onClick={hide}>
        <div
          className="navmenu__burger__line navmenu__burger__line__first"
          style={style}
        ></div>
        <div className="navmenu__burger__line"></div>
        <div className="navmenu__burger__line"></div>
        <div className="navmenu__burger__line" style={style}></div>
      </div>
      <div className="navmenu__title">
        <div className="navmenu__title__icon"></div>
        <div className="navmenu__title__name">ArtnIdustries</div>
      </div>
    </div>
  )
}

export default NavBarLeftPanel
