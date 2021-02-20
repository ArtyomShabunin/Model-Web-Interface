import React from 'react'
import AppHeader from '../app-header'
import ModelList from '../model-list'

const ControlPage = () => {
  return (
    <div>
      <AppHeader />
      <ModelList/>
      <span>Управление моделью. Просмотр архива сигналов модели.</span>
    </div>
  )
}

export default ControlPage
