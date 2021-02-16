import React, {Component} from 'react'
import Draggable from 'react-draggable';

import {Canvas} from '../svg'
import {CanvasTest} from '../svg'
import {Frame1} from '../frames'
import MetsoHeader from '../metso-header'
import WindowHeader from '../window-header'

import './frames-space.css'
import '../../../node_modules/react-grid-layout/css/styles.css'
import '../../../node_modules/react-resizable/css/styles.css'

class FramesSpace extends Component {
  render() {
    return (
      <div className='work-space'>
        <Draggable>
          <div className='block button-block'>
            <div className='title'>Hello!</div>
            <div className='content'>
              <button>Push</button>
            </div>
          </div>
        </Draggable>
        <Draggable>
          <div className='window'>
              <WindowHeader/>
              <MetsoHeader/>
          </div>
        </Draggable>
      </div>
    )
  }
}

export default FramesSpace


// <div key="a" className='block'>
//   <div className='MyDragHandle title d-flex justify-content-between'>
//     Window 1
//     <div className='btn-group'>
//       <button className='btn btn-outline-secondary'>_</button>
//       <button className='btn btn-outline-secondary'>O</button>
//       <button className='btn btn-outline-secondary'>X</button>
//     </div>
//   </div>
//   <div className='content'>
//     <Frame1/>
//   </div>
// </div>
