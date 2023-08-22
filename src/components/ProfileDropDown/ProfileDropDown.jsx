import React from "react"
import "../ProfileDropDown/ProfileDropDown.css"

const ProfileDropDown = ({ activeProfile, setActiveProfile }) => {
  return (
    <div
      className={activeProfile ? "profileDropDown active" : "profileDropDown"}
    >
      <div className="profileDropDown__content">
        <div className="name">Авторизация</div>
        <input className="input login" type="text" placeholder="Логин..." />
        <input className="input password" type="text" placeholder="Пароль..." />
        <div className="btns">
          <button className="enterProfile">Подтвердить</button>
          <a className="notProfile">Не могу войти</a>
        </div>
      </div>
    </div>
  )
}

export default ProfileDropDown
