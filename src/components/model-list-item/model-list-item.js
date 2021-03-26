import React, {Component} from 'react'
import { Button } from 'reactstrap'
import { ModelService } from '../../services'

import './model-list-item.css'

export default class ModelListItem extends Component {

  state = {
    showInfo: false,
    status: ''
  }

  showInfo = () => {
    this.setState(state => ({
      showInfo: !state.showInfo
    }))
  }

  render () {
    const {name, prototype, description, name_in_db} = this.props

    const mymodel = new ModelService()

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
            <div className='d-flex'>
              <span style={{'padding-right': '3px'}}>Статус:</span>
              <span>{this.state.status}</span>
            </div>
          </div>
          <div class="btn-group-vertical">
            <Button outline color="primary"
                    style={{'min-width': 0, 'box-shadow': 'none', padding: '0px 5px'}}
                    onClick={()=>mymodel.startSimulation(name_in_db)}>
              <i style={{ 'font-size': '20px', 'color': 'green'}}
                 className="fa fa-power-off"
                 aria-hidden="true"/>
            </Button>
            <Button outline color="primary"
                    style={{'min-width': 0, 'box-shadow': 'none', padding: '0px 5px'}}
                    onClick={()=>mymodel.stopSimulation()}>
              <i style={{ 'font-size': '20px', 'color': 'red'}}
                 className="fa fa-power-off"
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

  componentDidMount() {
    const mymodel = new ModelService()
    this.interval = setInterval(async () => {
                                      const {status} = await mymodel.getData()
                                      this.setState({ status: status })
                                      },
                                1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }
}
