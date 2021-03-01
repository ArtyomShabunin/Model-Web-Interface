import React from 'react'

import './videogram-header.css'

const VideogramHeader = () => {
  return (
    <div style={{ height: '40px', position: 'relative'}}>
      <div style={{ zIndex: 1 }} className="background-videogram-header">
        <div style={{ zIndex: 1 }}
             className="right-background-videogram-header"/>
      </div>
      <div style={{ padding: '5px',
                    position: 'relative',
                    zIndex: 1,
                    height: '100%' }}
           className="d-flex">
        <span style={{ color: 'white', fontSize: '15px'}}
              className="flex-fill">
          80LAB00EN001.Питательная вода.ПЭН-А,Б</span>
        <div style={{ height: '28px', width: '100px', border: '2px inset'}}>
          1.3.4
        </div>
        <div className="flex-fill">
          <div className="float-right">
            <button style={{ minWidth: '10px',
                             width: '28px',
                             height: '28px',
                             padding: '0 4px',
                             margin: '2px' }}>
              <i style={{ fontSize: '20px' }}
                 className="fa fa-arrow-left"
                 aria-hidden="true"/>
            </button>
            <button style={{ minWidth: '10px',
                             width: '28px',
                             height: '28px',
                             padding: '0 4px',
                             margin: '2px' }}>
              <i style={{ fontSize: '20px' }}
                 className="fa fa-arrow-right"
                 aria-hidden="true"/>
            </button>
            <button style={{ minWidth: '10px',
                             width: '28px',
                             height: '28px',
                             padding: '0 4px',
                             margin: '2px' }}>
              <i style={{ fontSize: '20px' }}
                 className="fa fa-arrow-up"
                 aria-hidden="true"/>
            </button>
            <button style={{ minWidth: '10px',
                             width: '28px',
                             height: '28px',
                             padding: '0 4px',
                             margin: '2px' }}>
              <i style={{ fontSize: '20px' }}
                 className="fa fa-arrow-down"
                 aria-hidden="true"/>
            </button>
            <button style={{ minWidth: '10px',
                             width: '28px',
                             height: '28px',
                             padding: '0 4px',
                             margin: '2px',
                             position: 'relative' }}>
              <i style={{ fontSize: '15px',
                          position: 'absolute',
                          bottom: '14px',
                          left: '0px' }}
                 className="fa fa-long-arrow-left"
                 aria-hidden="true"/>
              <i style={{ fontSize: '20px' }}
                 className="fa fa-clock-o"
                 aria-hidden="true"/>
            </button>
            <button style={{ minWidth: '10px',
                             width: '28px',
                             height: '28px',
                             padding: '0 4px',
                             margin: '2px',
                             position: 'relative'}}>
              <i style={{ fontSize: '15px',
                          position: 'absolute',
                          bottom: '14px',
                          right: '0px'}}
                 className="fa fa-long-arrow-right"
                 aria-hidden="true"/>
              <i style={{ fontSize: '20px' }}
                 className="fa fa-clock-o"
                 aria-hidden="true"/>
            </button>
            <button style={{ minWidth: '10px',
                             width: '28px',
                             height: '28px',
                             padding: '0 4px',
                             margin: '2px' }}>
              <i style={{ fontSize: '20px' }}
                 className="fa fa-print"
                 aria-hidden="true"/>
            </button>
            <button style={{ minWidth: '10px',
                             width: '28px',
                             height: '28px',
                             padding: '0 4px',
                             margin: '2px' }}>
              <i style={{ fontSize: '20px' }}
                 className="fa fa-camera-retro"
                 aria-hidden="true"/>
            </button>
            <button style={{ minWidth: '10px',
                             width: '28px',
                             height: '28px',
                             padding: '0 4px',
                             margin: '2px' }}>
              <i style={{ fontSize: '20px' }}
                 className="fa fa-arrows-h"
                 aria-hidden="true"/>
            </button>
            <button style={{ minWidth: '10px',
                             width: '28px',
                             height: '28px',
                             padding: '0 4px',
                             margin: '2px' }}>
              <i style={{ fontSize: '20px' }}
                 className="fa fa-search"
                 aria-hidden="true"/>
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default VideogramHeader
