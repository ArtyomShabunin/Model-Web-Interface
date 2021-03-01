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

  state = {
    show_browser: true,
    windows: [
      {id: 'browser', type: 'videogram-browser', tag_name: V80HAH00EN001,  zindex: 2, select: false},
      {id: '80HAH00EN001', type: 'videogram', tag_name: V80HAH00EN001,  zindex: 2, select: false},
      {id: '80LAB00EN001', type: 'videogram', tag_name: V80LAB00EN001,  zindex: 3, select: false},
    ],
  }

  onSelectWindow = (id) => {
    let windows = JSON.parse(JSON.stringify(this.state.windows))
    windows = windows.map((item) => {
      if (item.id == id) {
        item.select = true
        item.zindex = 10
      } else {
        item.select = false
        item.zindex = 5
      }
      return (item)
    })
    console.log(windows)
    this.setState(state => ({
      windows: windows
    }))
  }

  onShowVidList = () => {
    this.setState(state => ({
      show_browser: !state.show_browser
    }))
  }



  videograms = this.state.windows.map((item) => {
    const TagName = item.tag_name
    if (item.type == 'videogram') {
      return (
        <Draggable>
          <div id={item.id}
               style={{ position: 'absolute',
                        top: '0px',
                        left: '0px',
                        width: '1210px',
                        zIndex: item.zindex}}
               className="window"
               onClick={() => {
                 this.onSelectWindow(item.id)}}>
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
              <TagName />
            </div>
          </div>
        </Draggable>)
    }
  })

  browser = this.state.windows.map((item) => {
    const TagName = item.tag_name
    if (item.type == 'videogram-browser' & this.state.show_browser) {
      return (
        <Draggable>
          <div id={item.id} style={{ width: '350px' }} className="window">
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
      )
    }
  })


  render() {
    const {windows} = this.props

    return (
      <div style={{ height: 'calc(100vh - 73px)', background: '#0078D7' }}>
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
              <MetsoHeader onShowVidList={this.onShowVidList}/>
            </div>
          </div>
        </Draggable>
        {this.browser}
        {this.videograms}
      </div>
    )
  }
}

export default FramesSpace
