import React, {Component} from 'react'

import AppHeader from '../app-header'
import TopToolbox from '../top-toolbox'
import BottomToolbox from '../bottom-toolbox'
import FramesSpace from '../frames-space'
import MetsoHeader from '../metso-header'
import {V80HAH00EN001, V80LAB00EN001} from '../videogram'
import VideogramList from '../videogram-list'
import VideogramHeader from '../videogram-header'

import './dashboard.css'

class Dashboard extends Component {

  state = {
    showBrowser: true,
    windows: [
      {id: 'browser',
       tag_name: VideogramList,
       content: [VideogramList],
       zindex: 5,
       select: true,
       titleBarButtons: ["Close"],
       titleBaText: 'DNAuse A101/ЭБ-8',
       width: 350,
       maxConstraints: [350, 844]},

      {id: '80HAH00EN001',
       tag_name: V80HAH00EN001,
       content: [VideogramHeader, V80HAH00EN001],
       zindex: 2,
       select: false,
       titleBarButtons: ["Minimize", "Maximize", "Close"],
       titleBaText: 'DNAuse A101/ЭБ-8',
       width: 1210,
       maxConstraints: [1210, 844]},

      {id: '80LAB00EN001',
       tag_name: V80LAB00EN001,
       content: [VideogramHeader, V80LAB00EN001],
       zindex: 3,
       select: false,
       titleBarButtons: ["Minimize", "Maximize", "Close"],
       titleBaText: 'DNAuse A101/ЭБ-8',
       width: 1210,
       maxConstraints: [1210, 844]},
    ],
  }

  onSelectWindow = (id) => {
    // let windows = JSON.parse(JSON.stringify(this.state.windows))
    let windows = [...this.state.windows]
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
    console.log(id)
    console.log(windows)
    this.setState(state => ({
      windows: windows
    }))
  }

  onShowVidList = () => {
    this.setState(state => ({
      showBrowser: !state.showBrowser
    }))
  }

  render() {

    return (
      <div className="app">
        <AppHeader />
        <FramesSpace windows={ this.state.windows }
                     showBrowser={ this.state.showBrowser }
                     onSelectWindow={ this.onSelectWindow }
                     onShowVidList={ this.onShowVidList } />
      </div>
    )
  }
}

export default Dashboard
