import React from 'react'
import {Link} from "react-router-dom";

import './app-header.css'

const AppHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">ТЭС симулятор</Link>
      <button className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link"
                  to="/models">
               Модели
               <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/control">
              Управление симуляцией
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">Видеокадры</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/info">Справка</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default AppHeader
