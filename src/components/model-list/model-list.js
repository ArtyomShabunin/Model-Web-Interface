import React from 'react'

import ModelListItem from '../model-list-item'

import './model-list.css'

const ModelList = () => {
  return (
    <div>
      <ul class="list-group">
        <li class="list-group-item"><ModelListItem/></li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  )
}

export default ModelList
