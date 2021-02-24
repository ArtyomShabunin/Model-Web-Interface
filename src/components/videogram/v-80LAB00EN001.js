import React from 'react'
import {Background, ElectrifiedValve} from '../svg'
import {viewBox,
        equipment,} from './constants'

import './videogram.css'

const V80LAB00EN001 = () => {
  return (
    <svg
      id="80LAB00EN001"
      preserveAspectRatio="xMaxYMax none"
      viewBox={viewBox}>

      <Background/>

      // Деаэратор
      <path d="M312.5 720 H 450 C 480 730 480 780 450 790 H 265 C 235 780 235 730 265 720 Z"
            style={equipment}/>
    </svg>
  )
}

export default V80LAB00EN001
