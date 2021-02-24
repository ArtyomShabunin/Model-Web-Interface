import React from 'react'

import ModelListItem from '../model-list-item'

import './model-list.css'

const ModelList = ({models}) => {

  const elements = models.map((item) => {
    const {id, ...itemProps} = item
    return (
      <li key={id} className="list-group-item">
        <ModelListItem {...itemProps}/>
      </li>
    )
  })

  return (
    <div>
      <ul class="list-group">
        {elements}
      </ul>
    </div>
  )
}

export default ModelList
