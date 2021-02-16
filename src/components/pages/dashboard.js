import React, {Component} from 'react'

import AppHeader from '../app-header'
import TopToolbox from '../top-toolbox'
import BottomToolbox from '../bottom-toolbox'
import FramesSpace from '../frames-space'
import MetsoHeader from '../metso-header'

import './dashboard.css'

class Dashboard extends Component {
  render() {


    return (
      <div className="app">
        <AppHeader />
        <FramesSpace />

      </div>
    )
  }
}

export default Dashboard
