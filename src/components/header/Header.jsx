import React from 'react'

const Header = () => {
  return (
    <div>
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-5 animate__animated animate__backInLeft">
                        <img src="лого.png" alt="" />
                    </div>
                    <div className="col-7 animate__animated animate__backInRight">
                        <ul>
                            <li><a href="">Главная</a></li>
                            <li><a href="">Технология</a></li>
                            <li><a href="">График полетов</a></li>
                            <li><a href="">О компании</a></li>
                            <li><a href="">Контакты</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header