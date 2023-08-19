import "./NavBar.css"

function NavBar() {
  return (
    <div className="navmenu">
      <div className="navmenu__left__panel">
        <div className="navmenu__burger">
          <div className="navmenu__burger__line navmenu__burger__line__first"></div>
          <div className="navmenu__burger__line"></div>
          <div className="navmenu__burger__line"></div>
          <div className="navmenu__burger__line"></div>
        </div>
        <div className="navmenu__title">
          <div className="navmenu__title__icon"></div>
          <div className="navmenu__title__name">ArtnIdustries</div>
        </div>
      </div>
      <div className="navmenu__right__panel">
        <button className="navmenu__btn">+</button>
        <input type="text" className="navmenu__search" placeholder="Поиск..." />
      </div>
    </div>
  )
}

export default NavBar
