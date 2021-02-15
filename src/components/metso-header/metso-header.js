import React from 'react'

import './metso-header.css'

const MetsoHeader = () => {
  return (
    <div>
      <div className="panel">
        <div className="left">
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col">

              <div className="btn-pannel">
                <div className="row">
                  <div className="col">
                    <button className="btn btn-primary btn-block">Boiler</button>
                  </div>
                  <div className="col">
                    <button class="btn btn-primary btn-block">Turbine</button>
                  </div>
                  <div className="col">
                    <button class="btn btn-primary btn-block">FW Pump</button>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <button className="btn btn-primary btn-block">Boiler</button>
                  </div>
                  <div className="col">
                    <button className="btn btn-primary btn-block">Turbine</button>
                  </div>
                  <div className="col">
                    <button className="btn btn-primary btn-block">FW Pump</button>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <button className="btn btn-primary btn-block">Boiler</button>
                  </div>
                  <div className="col">
                    <button className="btn btn-primary btn-block">Turbine</button>
                  </div>
                  <div className="col">
                    <button className="btn btn-primary btn-block">FW Pump</button>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <button className="btn btn-primary btn-block">Boiler</button>
                  </div>
                  <div className="col">
                    <button class="btn btn-primary btn-block">Turbine</button>
                  </div>
                  <div className="col">
                    <button className="btn btn-primary btn-block">FW Pump</button>
                  </div>
                </div>

              </div>
            </div>

            <div className="col">
              <div className="overview-videogramm">

              </div>
            </div>

            <div className="col-7 alarms">
              <div className="row">
                <div className="col-2">
                  <button className="btn btn-primary btn-block">FW Pump</button>
                </div>
              </div>

              <div className="row first-alarm">
              </div>

              <div className="row">
                <div class="btn-group" role="group" aria-label="Second group">
                  <button type="button" class="winCl-btn">
                    <img src={require('./icons/open_ctrlpanel.png')} alt="open_ctrlpanel"/>
                  </button>
                  <button type="button" class="btn btn-light">
                    <img src={require('./icons/open_pict_icon.png')} alt="open_pict_icon"/>
                  </button>
                  <button type="button" class="btn btn-light">
                    <img src={require('./icons/fav_list_icon.png')} alt="fav_list_icon"/>
                  </button>
                  <button type="button" class="btn btn-light">
                    <img src={require('./icons/open_pbrowser_i.png')} alt="open_pbrowser_i"/>
                  </button>
                  <button type="button" class="btn btn-light">
                    <img src={require('./icons/print_icon.png')} alt="print_icon"/>
                  </button>
                  <button type="button" class="btn btn-light">
                    <img src={require('./icons/logging_icon.png')} alt="logging_icon"/>
                  </button>
                  <button type="button" class="btn btn-light">
                    <img src={require('./icons/ackn_sign_i.png')} alt="ackn_sign_i"/>
                  </button>
                  <button type="button" class="btn btn-light">
                    <img src={require('./icons/ackn_all_i.png')} alt="ackn_all_i"/>
                  </button>
                  <button type="button" class="btn btn-light">
                    <img src={require('./icons/browser_forw_i.png')} alt="browser_forw_i"/>
                  </button>
                  <button type="button" class="btn btn-light">
                    <img src={require('./icons/browser_backw_i.png')} alt="browser_backw_i"/>
                  </button>
                  <button type="button" class="btn btn-light">
                    <img src={require('./icons/ev_brows_icon.png')} alt="ev_brows_icon"/>
                  </button>
                  <button type="button" class="btn btn-light">
                    <img src={require('./icons/trd_anal_icon.png')} alt="trd_anal_icon"/>
                  </button>
                  <button type="button" class="btn btn-light">
                    <img src={require('./icons/open_pic_i.png')} alt="open_pic_i"/>
                  </button>
                  <button type="button" class="btn btn-light">
                    <img src={require('./icons/open_diary_i.png')} alt="open_diary_i"/>
                  </button>
                  <button type="button" class="btn btn-light">
                    <img src={require('./icons/portal_btt.jpg')} alt="portal_btt"/>
                  </button>

                </div>
              </div>
            </div>

        </div>

        </div>
      </div>
    </div>
  )
}

export default MetsoHeader
