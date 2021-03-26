import React from 'react'
import {Link} from "react-router-dom";
import { ModelService } from '../../services'

import './app-header.css'

const AppHeader = () => {
  const mymodel = new ModelService()
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

      <div class="">
        <button type="button"
                class=""
                onClick={()=>mymodel.stopModel()}>
          <i class="fa fa-stop"></i>
        </button>
        <button type="button"
                class=""
                onClick={()=>mymodel.pauseModel()}>
          <i class="fa fa-pause"></i>
        </button>
        <button type="button"
                class=""
                onClick={()=>mymodel.startModel()}>
          <i class="fa fa-play"></i>
        </button>
        <button type="button"
                class=""
                onClick={async ()=>console.log(await mymodel.getData())}>
          <i class="fa fa-forward"></i>
        </button>
      </div>

    </nav>
  )
}

export default AppHeader
