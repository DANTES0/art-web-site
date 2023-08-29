import React from "react"
import "../RegistrationForm/RegistrationForm.css"
const RegistrationForm = () => {
  return (
    <div className="registration__container">
      <div className="registration__content">
        <div className="reg_text">Регистрация</div>
        <div className="text email_text">Введите электронную почту</div>
        <input type="text" className="email" placeholder="Электронная почта" />
        <div className="text password_text">Введите пароль</div>
        <input type="password" className="password" placeholder="Пароль" />
        <div className="text username_text">Придумайте псевдоним</div>
        <input type="text" className="username" placeholder="Псевдоним" />
        <button className="enter">Подтвердить</button>
      </div>
    </div>
  )
}

export default RegistrationForm
