import React from 'react'
import AppHeader from '../app-header'
import ModelList from '../model-list'

const ControlPage = () => {

  const models = [
    {
      id: 1,
      name: 'Модель энергоблока',
      prototype: 'Энергоблоки №8 и 9 Черепетской ГРЭС',
      description: 'Модель всего энергоблока 220 МВт',
      name_in_db: 'boiler_model'

    },
    {
      id: 2,
      name: 'Модель котла',
      prototype: 'Энергоблоки №8 и 9 Черепетской ГРЭС',
      description: 'Только котел',
      name_in_db: '...'
    }
  ]

  return (
    <div>
      <AppHeader />
      <ModelList models={models}/>
      <span>Управление моделью. Просмотр архива сигналов модели.</span>
    </div>
  )
}

export default ControlPage
