import React, {Component} from 'react'
import Draggable from 'react-draggable';

import {Canvas} from '../svg'
import {Frame1} from '../frames'
import MetsoHeader from '../metso-header'
import VideogramList from '../videogram-list'
import VideogramHeader from '../videogram-header'
import {V80HAH00EN001, V80LAB00EN001} from '../videogram'

import './frames-space.css'
import '../../../node_modules/react-grid-layout/css/styles.css'
import '../../../node_modules/react-resizable/css/styles.css'

class FramesSpace extends Component {
  render() {
    return (
      <div style={{ background: '#0078D7' }}>
        <Draggable>
          <div style={{ width: '1210px' }} className="window">
            <div className="title-bar">
              <div className="title-bar-text">DNAuse A101/ЭБ-8/Control Panel</div>
              <div className="title-bar-controls">
                <button aria-label="Minimize" />
                <button aria-label="Maximize" />
                <button aria-label="Close" />
              </div>
            </div>
            <div style={{ margin: '2px'}} className="window-body">
              <MetsoHeader/>
            </div>
          </div>
        </Draggable>
        <Draggable>
          <div style={{ width: '350px' }} className="window">
            <div className="title-bar">
              <div className="title-bar-text">DNAuse A101/ЭБ-8</div>
              <div className="title-bar-controls">
                <button aria-label="Close" />
              </div>
            </div>
            <div style={{ margin: '2px'}} className="window-body">
              <VideogramList/>
            </div>
          </div>
        </Draggable>
        <Draggable>
          <div style={{ width: '1210px' }} className="window">
            <div className="title-bar">
              <div className="title-bar-text">DNAuse A101/ЭБ-8</div>
              <div className="title-bar-controls">
                <button aria-label="Minimize" />
                <button aria-label="Maximize" />
                <button aria-label="Close" />
              </div>
            </div>
            <div style={{ margin: '2px'}} className="window-body">
              <VideogramHeader/>
              <V80LAB00EN001/>
            </div>
          </div>
        </Draggable>
        <Draggable>
          <div style={{ width: '1210px' }} className="window">
            <div className="title-bar">
              <div className="title-bar-text">DNAuse A101/ЭБ-8</div>
              <div className="title-bar-controls">
                <button aria-label="Minimize" />
                <button aria-label="Maximize" />
                <button aria-label="Close" />
              </div>
            </div>
            <div style={{ margin: '2px'}} className="window-body">
              <VideogramHeader/>
              <V80HAH00EN001/>
            </div>
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
