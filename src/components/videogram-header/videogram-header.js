import React from 'react'

import './videogram-header.css'

const VideogramHeader = () => {
  return (
    <div style={{ height: '40px', position: 'relative'}}>
      <div style={{ zIndex: 1 }} className="background-videogram-header">
        <div style={{ zIndex: 1 }} className="right-background-videogram-header"></div>
      </div>
      <div style={{ position: 'relative', zIndex: 1, height: '100%' }} className="d-flex bd-highlight">
        <span style={{ color: 'white', 'font-size': '15px'}} className="p-2 flex-fill bd-highlight">80LAB00EN001.Питательная вода.ПЭН-А,Б</span>
        <div style={{ height: '28px', width: '100px', border: '2px inset'}} className="bd-highlight">
          1.3.4
        </div>
        <button style={{ 'min-width': '10px', width: '28px', height: '28px', 'padding': '0 4px', 'padding-top': '9px', margin: '2px' }} className="bd-highlight">
          <i style={{ 'font-size': '20px' }} className="fa fa-sort-asc" aria-hidden="true"/>
        </button>
      </div>
    </div>

  )
}

export default VideogramHeader
