import React from "react"
import "../ProfileDropDown/ProfileDropDown.css"
import { Link } from "react-router-dom"

const ProfileDropDown = ({ activeProfile, setActiveProfile }) => {
  return (
    <div
      className={activeProfile ? "profileDropDown active" : "profileDropDown"}
    >
      <div className="profileDropDown__content">
        <div className="name">Авторизация</div>
        <input className="input login" type="text" placeholder="Логин..." />
        <input
          className="input password"
          type="password"
          placeholder="Пароль..."
        />
        <div className="btns">
          <button className="enterProfile">Подтвердить</button>
          <Link
            to={"registration"}
            className="notProfile"
            onClick={() => setActiveProfile(false)}
          >
            Не могу войти
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProfileDropDown
