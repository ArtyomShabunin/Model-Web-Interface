import React from 'react'

import './metso-header.css'

const MetsoHeader = () => {
  return (
    <div className="panel">

      <div className="background">
        <div className="right-background"></div>
      </div>

      <div style={{ padding: 0 }} className="container-fluid">
        <div style={{ margin: 0 }} className="row">

          <div style={{ padding: '2px'}} className="col">

            <div className="btn-pannel">
              <div style = {{ margin: 0 }} className="row">
                <button style={{margin: '2px', 'background-color': 'rgba(192,192,192,0.1)', color: 'white'}} className="">Boiler</button>
                <button style={{margin: '2px', 'background-color': 'rgba(192,192,192,0.1)', color: 'white'}} class="">Turbine</button>
                <button style={{margin: '2px', 'background-color': 'rgba(192,192,192,0.1)', color: 'white'}} class="">FW Pump</button>
              </div>

              <div style = {{ margin: 0 }} className="row">
                <button style={{margin: '2px', 'background-color': 'rgba(192,192,192,0.1)', color: 'white'}} className="">Boiler</button>
                <button style={{margin: '2px', 'background-color': 'rgba(192,192,192,0.1)', color: 'white'}} class="">Turbine</button>
                <button style={{margin: '2px', 'background-color': 'rgba(192,192,192,0.1)', color: 'white'}} class="">FW Pump</button>
              </div>

              <div style = {{ margin: 0 }} className="row">
                <button style={{margin: '2px', 'background-color': 'rgba(192,192,192,0.1)', color: 'white'}}  className="">Boiler</button>
                <button style={{margin: '2px', 'background-color': 'rgba(192,192,192,0.1)', color: 'white'}}  class="">Turbine</button>
                <button style={{margin: '2px', 'background-color': 'rgba(192,192,192,0.1)', color: 'white'}}  class="">FW Pump</button>
              </div>

              <div style = {{ margin: 0 }} className="row">
                <button style={{margin: '2px', 'background-color': 'rgba(192,192,192,0.1)', color: 'white'}}  className="">Boiler</button>
                <button style={{margin: '2px', 'background-color': 'rgba(192,192,192,0.1)', color: 'white'}}  class="">Turbine</button>
                <button style={{margin: '2px', 'background-color': 'rgba(192,192,192,0.1)', color: 'white'}}  class="">FW Pump</button>
              </div>
            </div>

          </div>

          <div style={{ padding: 0}} className="col">
            <div style={{ 'background-color': 'blue', height: '100%' }}/>
          </div>

          <div style={{ 'padding-left': '60px', margin: '5px' }} className="col-7">
            <div className="row">
              <button style={{ padding: 0, 'background-color': 'red', color: 'white' }} className="">Area_5 52</button>
              <div style={{ padding: 0, width: '100px'}} className="col-7">
                <div style={{ margin: 0 }} className="row">
                  <div style={{ 'margin-left': '2px', padding: 0, height: '23px', width: '100px', border: '1px solid' }} className="col"/>
                  <div style={{ 'margin-left': '2px', padding: 0, height: '23px', width: '100px', border: '1px solid' }} className="col"/>
                  <div style={{ 'margin-left': '2px', padding: 0, height: '23px', width: '100px', border: '1px solid' }} className="col"/>
                  <div style={{ 'margin-left': '2px', padding: 0, height: '23px', width: '100px', border: '1px solid' }} className="col"/>
                </div>
              </div>
              <div style={{ 'margin-left': '2px', padding: 0, width: '100px' }} className="col-1">
                <span>стрелки</span>
              </div>
              <div style={{ padding: 0, width: '100px' }} className="col">
                <span>17.02.2021 01:18:15</span>
              </div>

            </div>

            <div style={{ 'margin-top': '5px' }} className="row">
              <div style={{ padding: 0, height: '20px', width: '100px', border: '1px solid', display: 'flex' }} className="col-2">
                <div style={{ margin: '1px', height: '15px', width: '15px', border: '2px inset'}}/>
                <div style={{ 'border-left': '1px solid', width: 'inherit', height: '19px' }}>
                  <span>22:40:32:553</span>
                </div>
              </div>
              <div style={{ padding: 0, width: '100px', border: '1px solid', 'border-left': 0 }} className="col-2">
                <span>^^^^^</span>
              </div>
              <div style={{ padding: 0, width: '100px', border: '1px solid', 'border-left': 0 }} className="col-3">
                <span>80HFE31AA001_ZB50</span>
              </div>
              <div style={{ padding: 0, width: '100px', border: '1px solid', 'border-left': 0 }} className="col-3">
                <span>РК ХВЗД МЕЛ 11</span>
              </div>
              <div style={{ padding: 0, width: '100px', border: '1px solid', 'border-left': 0 }} className="col-2">
                <span>НИСП</span>
              </div>

            </div>

            <div style={{ 'margin-top': '10px' }} className="row">
              <div class="btn-group" role="group" aria-label="Second group">
                <button style={{ padding: 0, 'min-width': '45px', height: '32px' }} type="button" class="">
                  <img src={require('./icons/open_ctrlpanel.png')} alt="open_ctrlpanel"/>
                </button>
                <button style={{ padding: 0, 'min-width': '32px', height: '32px' }} type="button" class="">
                  <img src={require('./icons/open_pict_icon.png')} alt="open_pict_icon"/>
                </button>
                <button style={{ padding: 0, 'min-width': '32px', height: '32px' }} type="button" class="">
                  <img src={require('./icons/fav_list_icon.png')} alt="fav_list_icon"/>
                </button>
                <button style={{ padding: 0, 'min-width': '32px', height: '32px' }} type="button" class="">
                  <img src={require('./icons/open_pbrowser_i.png')} alt="open_pbrowser_i"/>
                </button>
                <button style={{ padding: 0, 'min-width': '32px', height: '32px' }} type="button" class="">
                  <img src={require('./icons/print_icon.png')} alt="print_icon"/>
                </button>
                <button style={{ padding: 0, 'min-width': '32px', height: '32px' }} type="button" class="">
                  <img src={require('./icons/logging_icon.png')} alt="logging_icon"/>
                </button>
                <button style={{ padding: 0, 'min-width': '32px', height: '32px' }} type="button" class="">
                  <img src={require('./icons/ackn_sign_i.png')} alt="ackn_sign_i"/>
                </button>
                <button style={{ padding: 0, 'min-width': '32px', height: '32px' }} type="button" class="">
                  <img src={require('./icons/ackn_all_i.png')} alt="ackn_all_i"/>
                </button>
                <button style={{ padding: 0, 'min-width': '32px', height: '32px' }} type="button" class="">
                  <img src={require('./icons/browser_forw_i.png')} alt="browser_forw_i"/>
                </button>
                <button style={{ padding: 0, 'min-width': '32px', height: '32px' }} type="button" class="">
                  <img src={require('./icons/browser_backw_i.png')} alt="browser_backw_i"/>
                </button>
                <button style={{ padding: 0, 'min-width': '32px', height: '32px' }} type="button" class="">
                  <img src={require('./icons/ev_brows_icon.png')} alt="ev_brows_icon"/>
                </button>
                <button style={{ padding: 0, 'min-width': '32px', height: '32px' }} type="button" class="">
                  <img src={require('./icons/trd_anal_icon.png')} alt="trd_anal_icon"/>
                </button>
                <button style={{ padding: 0, 'min-width': '32px', height: '32px' }} type="button" class="">
                  <img src={require('./icons/open_pic_i.png')} alt="open_pic_i"/>
                </button>
                <button style={{ padding: 0, 'min-width': '32px', height: '32px' }} type="button" class="">
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

// <div className="container-fluid">
//   <div className="row">
//     <div className="col">

//           <div className="btn-pannel">
//             <div className="row">
//               <div className="col">
//                 <button className="btn btn-primary btn-block">Boiler</button>
//               </div>
//               <div className="col">
//                 <button class="btn btn-primary btn-block">Turbine</button>
//               </div>
//               <div className="col">
//                 <button class="btn btn-primary btn-block">FW Pump</button>
//               </div>
//             </div>
//
//             <div className="row">
//               <div className="col">
//                 <button className="btn btn-primary btn-block">Boiler</button>
//               </div>
//               <div className="col">
//                 <button className="btn btn-primary btn-block">Turbine</button>
//               </div>
//               <div className="col">
//                 <button className="btn btn-primary btn-block">FW Pump</button>
//               </div>
//             </div>
//
//             <div className="row">
//               <div className="col">
//                 <button className="btn btn-primary btn-block">Boiler</button>
//               </div>
//               <div className="col">
//                 <button className="btn btn-primary btn-block">Turbine</button>
//               </div>
//               <div className="col">
//                 <button className="btn btn-primary btn-block">FW Pump</button>
//               </div>
//             </div>
//
//             <div className="row">
//               <div className="col">
//                 <button className="btn btn-primary btn-block">Boiler</button>
//               </div>
//               <div className="col">
//                 <button class="btn btn-primary btn-block">Turbine</button>
//               </div>
//               <div className="col">
//                 <button className="btn btn-primary btn-block">FW Pump</button>
//               </div>
//             </div>
//
//           </div>
//         </div>
//
//         <div className="col">
//           <div className="overview-videogramm">
//
//           </div>
//         </div>
//
//         <div className="col-7 alarms">
//           <div className="row">
//             <div className="col-2">
//               <button className="btn btn-primary btn-block">FW Pump</button>
//             </div>
//           </div>
//
//           <div className="row first-alarm">
//           </div>
//
//           <div className="row">
//             <div class="btn-group" role="group" aria-label="Second group">
//               <button type="button" class="winCl-btn">
//                 <img src={require('./icons/open_ctrlpanel.png')} alt="open_ctrlpanel"/>
//               </button>
//               <button type="button" class="btn btn-light">
//                 <img src={require('./icons/open_pict_icon.png')} alt="open_pict_icon"/>
//               </button>
//               <button type="button" class="btn btn-light">
//                 <img src={require('./icons/fav_list_icon.png')} alt="fav_list_icon"/>
//               </button>
//               <button type="button" class="btn btn-light">
//                 <img src={require('./icons/open_pbrowser_i.png')} alt="open_pbrowser_i"/>
//               </button>
//               <button type="button" class="btn btn-light">
//                 <img src={require('./icons/print_icon.png')} alt="print_icon"/>
//               </button>
//               <button type="button" class="btn btn-light">
//                 <img src={require('./icons/logging_icon.png')} alt="logging_icon"/>
//               </button>
//               <button type="button" class="btn btn-light">
//                 <img src={require('./icons/ackn_sign_i.png')} alt="ackn_sign_i"/>
//               </button>
//               <button type="button" class="btn btn-light">
//                 <img src={require('./icons/ackn_all_i.png')} alt="ackn_all_i"/>
//               </button>
//               <button type="button" class="btn btn-light">
//                 <img src={require('./icons/browser_forw_i.png')} alt="browser_forw_i"/>
//               </button>
//               <button type="button" class="btn btn-light">
//                 <img src={require('./icons/browser_backw_i.png')} alt="browser_backw_i"/>
//               </button>
//               <button type="button" class="btn btn-light">
//                 <img src={require('./icons/ev_brows_icon.png')} alt="ev_brows_icon"/>
//               </button>
//               <button type="button" class="btn btn-light">
//                 <img src={require('./icons/trd_anal_icon.png')} alt="trd_anal_icon"/>
//               </button>
//               <button type="button" class="btn btn-light">
//                 <img src={require('./icons/open_pic_i.png')} alt="open_pic_i"/>
//               </button>
//               <button type="button" class="btn btn-light">
//                 <img src={require('./icons/open_diary_i.png')} alt="open_diary_i"/>
//               </button>
//               <button type="button" class="btn btn-light">
//                 <img src={require('./icons/portal_btt.jpg')} alt="portal_btt"/>
//               </button>
//
//             </div>
//           </div>
//         </div>
//
//     </div>
//
//     </div>
// </div>
