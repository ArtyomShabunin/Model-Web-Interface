import React, {Component} from 'react'
import { Button } from 'reactstrap';

import './model-list-item.css'

export default class ModelListItem extends Component {

  state = {
    showInfo: false
  }

  showInfo = () => {
    this.setState(state => ({
      showInfo: !state.showInfo
    }))
  }

  render () {
    const {name, prototype, description} = this.props
    return (
      <>
        <div style={{width: '100%'}} className='d-flex'>
          <div className='flex-fill'>
            <img src={require('./icons/sit.jpg')} alt="SimInTech_icon"/>
          </div>
          <div className='flex-fill'>
            <div>
              <span>{name}</span>
            </div>
            <div className='d-flex'>
              <span style={{'padding-right': '3px'}}>Прототип:</span>
              <span>{prototype}</span>
            </div>
          </div>
          <div class="btn-group-vertical">
            <Button outline color="primary"
                    style={{'min-width': 0, 'box-shadow': 'none', padding: '0px 5px'}}>
              <i style={{ 'font-size': '20px' }}
                 className="fa fa-play-circle"
                 aria-hidden="true"/>
            </Button>
            <Button outline color="secondary"
                    style={{'min-width': 0, 'box-shadow': 'none', padding: 0}}>
              <i style={{ 'font-size': '20px' }}
                 className="fa fa-cog"
                 aria-hidden="true"/>
            </Button>
            <Button outline color="info"
                    style={{'min-width': 0, 'box-shadow': 'none', padding: 0}}
                    onClick={this.showInfo}>
              <i style={{ 'font-size': '20px' }}
                 className="fa fa-info-circle"
                 aria-hidden="true"/>
            </Button>
          </div>
        </div>
        {this.state.showInfo ? <span>{description}</span> : null}
      </>
    )
  }
}
