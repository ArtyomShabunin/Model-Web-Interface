import React, {Component} from 'react'
import Draggable from 'react-draggable';
import { Resizable, ResizableBox } from 'react-resizable';

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
    const {windows, showBrowser, onSelectWindow, onShowVidList} = this.props

    const videograms = windows.map((item) => {
      const TagName = item.tag_name
      let titleBarClases = "title-bar"
      if (!item.select) {
        titleBarClases += " inactive"
      }
      return (
        <Draggable  handle="strong" onStart={() => onSelectWindow(item.id)}>
          <ResizableBox width={item.width}
                        maxConstraints={item.maxConstraints}
                        resizeHandles={['e', 'se']}
                        style={{ position: 'absolute',
                                 top: '200px',
                                 left: '0px',
                                 zIndex: item.zindex}}
                        className="window box no-cursor">
            <strong className="cursor">
              <div className={titleBarClases}>
                <div className="title-bar-text">
                  {item.titleBaText}
                </div>
                <div className="title-bar-controls">
                  {item.titleBarButtons.map((item) => {
                    return (
                      <button aria-label={item} />
                    )
                  })}
                </div>
              </div>
            </strong>
            <div style={{ margin: '2px',
                          resize: 'both'}}
                 className="window-body"
                 onMouseDown={() => onSelectWindow(item.id)}>
              {item.content.map((TagName) => {
                return (
                  <TagName />
                )
              })}
            </div>
          </ResizableBox>
        </Draggable>)
    })

    return (
      <div style={{ height: 'calc(100vh - 73px)', background: '#0078D7' }}>
        <Draggable>
          <div style={{ width: '1210px' }} className="window">
            <div className="title-bar">
              <div className="title-bar-text">
                DNAuse A101/ЭБ-8/Control Panel
              </div>
              <div className="title-bar-controls">
                <button aria-label="Minimize" />
                <button aria-label="Maximize" />
                <button aria-label="Close" />
              </div>
            </div>
            <div style={{ margin: '2px'}} className="window-body">
              <MetsoHeader onShowVidList={onShowVidList}/>
            </div>
          </div>
        </Draggable>
        {videograms}
      </div>
    )
  }
}

export default FramesSpace
