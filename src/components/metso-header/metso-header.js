import React from 'react'

import './metso-header.css'

const MetsoHeader = ({onShowVidList}) => {
  return (
    <div className="panel">

      <div className="background">
        <div className="right-background"></div>
      </div>

      <div style={{ padding: 0 }} className="container-fluid">
        <div style={{ margin: 0 }} className="row">

          <div style={{ padding: '2px' }} className="col">

            <div className="btn-pannel">
              <div style = {{ margin: 0 }} className="row">
                <button style={{margin: '2px',
                                'backgroundColor': 'rgba(192,192,192,0.1)',
                                color: 'white'}}
                        className="">
                     Boiler
                </button>
                <button style={{margin: '2px', 'backgroundColor': 'rgba(192,192,192,0.1)', color: 'white'}} className="">Turbine</button>
                <button style={{margin: '2px', 'backgroundColor': 'rgba(192,192,192,0.1)', color: 'white'}} className="">FW Pump</button>
              </div>

              <div style = {{ margin: 0 }} className="row">
                <button style={{margin: '2px', 'backgroundColor': 'rgba(192,192,192,0.1)', color: 'white'}} className="">Boiler</button>
                <button style={{margin: '2px', 'backgroundColor': 'rgba(192,192,192,0.1)', color: 'white'}} className="">Turbine</button>
                <button style={{margin: '2px', 'backgroundColor': 'rgba(192,192,192,0.1)', color: 'white'}} className="">FW Pump</button>
              </div>

              <div style = {{ margin: 0 }} className="row">
                <button style={{margin: '2px', 'backgroundColor': 'rgba(192,192,192,0.1)', color: 'white'}}  className="">Boiler</button>
                <button style={{margin: '2px', 'backgroundColor': 'rgba(192,192,192,0.1)', color: 'white'}}  className="">Turbine</button>
                <button style={{margin: '2px', 'backgroundColor': 'rgba(192,192,192,0.1)', color: 'white'}}  className="">FW Pump</button>
              </div>

              <div style = {{ margin: 0 }} className="row">
                <button style={{margin: '2px', backgroundColor: 'rgba(192,192,192,0.1)', color: 'white'}}  className="">Boiler</button>
                <button style={{margin: '2px', backgroundColor: 'rgba(192,192,192,0.1)', color: 'white'}}  className="">Turbine</button>
                <button style={{margin: '2px', backgroundColor: 'rgba(192,192,192,0.1)', color: 'white'}}  className="">FW Pump</button>
              </div>
            </div>

          </div>

          <div style={{ padding: 0}} className="col">
            <div style={{ backgroundColor: 'blue', height: '100%' }}/>
          </div>

          <div style={{ paddingLeft: '60px', margin: '5px' }} className="col-7">
            <div className="row">
              <button style={{ padding: 0, backgroundColor: 'red', color: 'white' }} className="">Area_5 52</button>
              <div style={{ padding: 0, width: '100px'}} className="col-7">
                <div style={{ margin: 0 }} className="row">
                  <div style={{ marginLeft: '2px', padding: 0, height: '23px', width: '100px', border: '1px solid' }} className="col"/>
                  <div style={{ marginLeft: '2px', padding: 0, height: '23px', width: '100px', border: '1px solid' }} className="col"/>
                  <div style={{ marginLeft: '2px', padding: 0, height: '23px', width: '100px', border: '1px solid' }} className="col"/>
                  <div style={{ marginLeft: '2px', padding: 0, height: '23px', width: '100px', border: '1px solid' }} className="col"/>
                </div>
              </div>
              <div style={{ marginLeft: '2px', padding: 0, width: '100px' }} className="col-1">
                <span>стрелки</span>
              </div>
              <div style={{ padding: 0, width: '100px' }} className="col">
                <span>17.02.2021 01:18:15</span>
              </div>

            </div>

            <div style={{ marginTop: '5px' }} className="row">
              <div style={{ padding: 0, height: '20px', width: '100px', border: '1px solid', display: 'flex' }} className="col-2">
                <div style={{ margin: '1px', height: '15px', width: '15px', border: '2px inset'}}/>
                <div style={{ borderLeft: '1px solid', width: 'inherit', height: '19px' }}>
                  <span>22:40:32:553</span>
                </div>
              </div>
              <div style={{ padding: 0, width: '100px', border: '1px solid', borderLeft: 0 }} className="col-2">
                <span>^^^^^</span>
              </div>
              <div style={{ padding: 0, width: '100px', border: '1px solid', borderLeft: 0 }} className="col-3">
                <span>80HFE31AA001_ZB50</span>
              </div>
              <div style={{ padding: 0, width: '100px', border: '1px solid', borderLeft: 0 }} className="col-3">
                <span>РК ХВЗД МЕЛ 11</span>
              </div>
              <div style={{ padding: 0, width: '100px', border: '1px solid', borderLeft: 0 }} className="col-2">
                <span>НИСП</span>
              </div>

            </div>

            <div style={{ marginTop: '10px' }} className="row">
              <div className="btn-group" role="group" aria-label="Second group">
                <button style={{ padding: 0, minWidth: '45px', height: '32px' }} type="button">
                  <img src={require('./icons/open_ctrlpanel.png')} alt="open_ctrlpanel"/>
                </button>
                <button style={{ padding: 0, minWidth: '32px', height: '32px' }} type="button">
                  <img src={require('./icons/open_pict_icon.png')} alt="open_pict_icon"/>
                </button>
                <button style={{ padding: 0, minWidth: '32px', height: '32px' }} type="button">
                  <img src={require('./icons/fav_list_icon.png')} alt="fav_list_icon"/>
                </button>
                <button style={{ padding: 0, minWidth: '32px', height: '32px' }}
                        type="button"
                        className=""
                        onClick={() => {onShowVidList()}}>
                  <img src={require('./icons/open_pbrowser_i.png')} alt="open_pbrowser_i"/>
                </button>
                <button style={{ padding: 0, minWidth: '32px', height: '32px' }} type="button">
                  <img src={require('./icons/print_icon.png')} alt="print_icon"/>
                </button>
                <button style={{ padding: 0, minWidth: '32px', height: '32px' }} type="button">
                  <img src={require('./icons/logging_icon.png')} alt="logging_icon"/>
                </button>
                <button style={{ padding: 0, minWidth: '32px', height: '32px' }} type="button">
                  <img src={require('./icons/ackn_sign_i.png')} alt="ackn_sign_i"/>
                </button>
                <button style={{ padding: 0, minWidth: '32px', height: '32px' }} type="button">
                  <img src={require('./icons/ackn_all_i.png')} alt="ackn_all_i"/>
                </button>
                <button style={{ padding: 0, minWidth: '32px', height: '32px' }} type="button">
                  <img src={require('./icons/browser_forw_i.png')} alt="browser_forw_i"/>
                </button>
                <button style={{ padding: 0, minWidth: '32px', height: '32px' }} type="button">
                  <img src={require('./icons/browser_backw_i.png')} alt="browser_backw_i"/>
                </button>
                <button style={{ padding: 0, minWidth: '32px', height: '32px' }} type="button">
                  <img src={require('./icons/ev_brows_icon.png')} alt="ev_brows_icon"/>
                </button>
                <button style={{ padding: 0, minWidth: '32px', height: '32px' }} type="button">
                  <img src={require('./icons/trd_anal_icon.png')} alt="trd_anal_icon"/>
                </button>
                <button style={{ padding: 0, minWidth: '32px', height: '32px' }} type="button">
                  <img src={require('./icons/open_pic_i.png')} alt="open_pic_i"/>
                </button>
                <button style={{ padding: 0, minWidth: '32px', height: '32px' }} type="button">
                  <img src={require('./icons/open_diary_i.png')} alt="open_diary_i"/>
                </button>
              </div>
            </div>


          </div>






        </div>
      </div>

    </div>




  )
}

export default MetsoHeader
