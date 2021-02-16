import React from 'react'

import './window-header.css'
import '../../../node_modules/react-resizable/css/styles.css'

const WindowHeader = () => {
  return (
    <div>
      <div className='title d-flex justify-content-between'>
        Привет
        <div className='btn-group'>
          <button className='btn btn-outline-secondary'>_</button>
          <button className='btn btn-outline-secondary'>O</button>
          <button className='btn btn-outline-secondary'>X</button>
        </div>
      </div>
    </div>
  )
}

export default WindowHeader
