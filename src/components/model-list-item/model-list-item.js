import React from 'react'

import './model-list-item.css'

const ModelListItem = () => {
  return (
    <div style={{width: '1000px'}} className='d-flex'>
      <div>
        <img src={require('./icons/sit.jpg')} alt="SimInTech_icon"/>
      </div>
      <div className='flex-fill'>
        <div>
          <span>Модель энергоблока</span>
        </div>
        <div className='d-flex'>
          <span style={{'padding-right': '3px'}}>Прототип:</span>
          <span>Энергоблоки №8 и 9 Черепетской ГРЭС</span>
        </div>
      </div>
      <div class="btn-group-vertical">
        <button>Выбрать модель</button>
        <button>Информация</button>
      </div>
    </div>
  )
}

export default ModelListItem
