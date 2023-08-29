import { useState } from "react"
import "../NavBar/NavBar.css"
import { Link } from "react-router-dom"

function NavBarLeftPanel({ active, setActive }) {
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
      <div
        className="navmenu__burger"
        onClick={() => {
          setActive(!active)
        }}
      >
        <div
          className="navmenu__burger__line navmenu__burger__line__first"
          style={style}
        ></div>
        <div className="navmenu__burger__line"></div>
        <div className="navmenu__burger__line"></div>
        <div className="navmenu__burger__line" style={style}></div>
      </div>

      <div className="navmenu__title">
        <Link className="link" to={"main"}>
          <div className="navmenu__title__icon"></div>
          <div className="navmenu__title__name">ArtnIdustries</div>
        </Link>
      </div>
    </div>
  )
}

export default NavBarLeftPanel
