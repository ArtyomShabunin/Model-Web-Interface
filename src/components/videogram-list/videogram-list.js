import React from 'react'

import './videogram-list.css'

const VideogramList = () => {
  return (
    <div>
      <div style={{ 'margin-top': '5px' }} className="d-flex bd-highlight">
        <span className="p-2 flex-fill bd-highlight">Обновить выбранную обрасть</span>
        <button style={{ margin: '2px' }} className="flex-fill bd-highlight">Обновить</button>
        <button style={{ 'min-width': '10px', width: '18px', margin: '2px', padding: '0px'}} className="bd-highlight">
          <i style={{ 'margin-bottom': '7px' }} class="fa fa-sort-desc" aria-hidden="true"/>
        </button>
      </div>

      <div style={{ 'margin-top': '5px' }} className="d-flex bd-highlight">
        <span className="p-2 flex-fill bd-highlight">Открыть уровни</span>
        <button style={{ 'min-width': '10px', margin: '2px' }} className="bd-highlight">1</button>
        <button style={{ 'min-width': '10px', margin: '2px' }} className="bd-highlight">2</button>
        <button style={{ 'min-width': '10px', margin: '2px' }} className="bd-highlight">3</button>
        <button style={{ 'min-width': '10px', margin: '2px' }} className="bd-highlight">4</button>
        <button style={{ 'min-width': '10px', margin: '2px', 'margin-left': '15px',  width: '28px', height: '28px', 'padding': '0 4px' }} className="bd-highlight">
          <i style={{ 'font-size': '20px' }} class="fa fa-binoculars" aria-hidden="true"></i>
        </button>
      </div>

      <div style={{ 'margin-top': '10px', border: '1px solid black' }}>
        <h2 style={{ 'font-family': '"Pixelated MS Sans Serif",Arial',
                       'font-size': '11px',
                       'padding-left': '4px',
                       'margin-top': '-10px',
                       'margin-left': '5px',
                       background: 'silver',
                       width: '60px' }}>
          Find picture
        </h2>
        <div className="d-flex bd-highlight">
          <div className="field-row flex-fill bd-highlight">
            <input style={{ width: 170 }} type="text" />
          </div>
          <span className="p-2 flex-fill bd-highlight">8 ч {"{0/0?}"}</span>
          <button style={{ 'min-width': '10px', width: '28px', height: '28px', 'padding': '0 4px', 'padding-bottom': '9px', margin: '2px' }} className="bd-highlight">
            <i style={{ 'font-size': '20px' }} className="fa fa-sort-desc" aria-hidden="true"/>
          </button>
          <button style={{ 'min-width': '10px', width: '28px', height: '28px', 'padding': '0 4px', 'padding-top': '9px', margin: '2px' }} className="bd-highlight">
            <i style={{ 'font-size': '20px' }} className="fa fa-sort-asc" aria-hidden="true"/>
          </button>
          <button style={{ 'min-width': '10px', width: '28px', height: '28px', 'padding': '0 4px', margin: '2px'}} className="bd-highlight">
            <i style={{ 'font-size': '20px' }} className="fa fa-times" aria-hidden="true"/>
          </button>
        </div>
      </div>

      <ul style={{ height: '250px', overflow: 'auto' }} class="tree-view">

        <li>
          <ul>
            <li>
              <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
              <span style={{ 'margin-left': '5px' }}>0</span>
            </li>

            <li>
              <details>
                <summary>
                  <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                  <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>1</span>
                </summary>
                <ul>

                  <li>
                    <details>
                      <summary>
                        <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                        <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>1.1</span>
                      </summary>
                      <ul>

                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>1.1.1</span>
                        </li>
                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>1.1.2</span>
                        </li>
                        <li style={{ 'white-space': 'nowrap' }}>
                          <i style={{ 'font-size': '16px', 'white-space': 'nowrap' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>80MAD00EN001.Температурный контроль подш</span>
                        </li>
                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>1.1.4</span>
                        </li>

                      </ul>
                    </details>
                  </li>

                  <li>
                    <details>
                      <summary>
                        <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                        <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>1.2</span>
                      </summary>
                      <ul>

                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>1.2.1</span>
                        </li>
                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>1.2.2</span>
                        </li>
                        <li style={{ 'white-space': 'nowrap' }}>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>1.2.3</span>
                        </li>
                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>1.2.4</span>
                        </li>

                      </ul>
                    </details>
                  </li>

                </ul>
              </details>
            </li>

            <li>
              <details>
                <summary>
                  <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                  <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>2</span>
                </summary>
                <ul>

                  <li>
                    <details>
                      <summary>
                        <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                        <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>2.1</span>
                      </summary>
                      <ul>

                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>2.1.1</span>
                        </li>
                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>2.1.2</span>
                        </li>
                        <li style={{ 'white-space': 'nowrap' }}>
                          <i style={{ 'font-size': '16px', 'white-space': 'nowrap' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>2.1.3</span>
                        </li>
                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>2.1.4</span>
                        </li>

                      </ul>
                    </details>
                  </li>

                  <li>
                    <details>
                      <summary>
                        <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                        <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>2.2</span>
                      </summary>
                      <ul>

                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>2.2.1</span>
                        </li>
                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>2.2.2</span>
                        </li>
                        <li style={{ 'white-space': 'nowrap' }}>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>2.2.3</span>
                        </li>
                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>2.2.4</span>
                        </li>

                      </ul>
                    </details>
                  </li>

                </ul>
              </details>
            </li>

            <li>
              <details>
                <summary>
                  <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                  <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>3</span>
                </summary>
                <ul>

                  <li>
                    <details>
                      <summary>
                        <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                        <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>3.1</span>
                      </summary>
                      <ul>

                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>3.1.1</span>
                        </li>
                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>3.1.2</span>
                        </li>
                        <li style={{ 'white-space': 'nowrap' }}>
                          <i style={{ 'font-size': '16px', 'white-space': 'nowrap' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>3.1.3</span>
                        </li>
                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>3.1.4</span>
                        </li>

                      </ul>
                    </details>
                  </li>

                  <li>
                    <details>
                      <summary>
                        <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                        <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>3.2</span>
                      </summary>
                      <ul>

                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>3.2.1</span>
                        </li>
                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>3.2.2</span>
                        </li>
                        <li style={{ 'white-space': 'nowrap' }}>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>3.2.3</span>
                        </li>
                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>3.2.4</span>
                        </li>

                      </ul>
                    </details>
                  </li>

                </ul>
              </details>
            </li>

            <li>
              <details>
                <summary>
                  <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                  <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>4</span>
                </summary>
                <ul>

                  <li>
                    <details>
                      <summary>
                        <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                        <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>4.1</span>
                      </summary>
                      <ul>

                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>4.1.1</span>
                        </li>
                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>4.1.2</span>
                        </li>
                        <li style={{ 'white-space': 'nowrap' }}>
                          <i style={{ 'font-size': '16px', 'white-space': 'nowrap' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>4.1.3</span>
                        </li>
                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>4.1.4</span>
                        </li>

                      </ul>
                    </details>
                  </li>

                  <li>
                    <details>
                      <summary>
                        <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                        <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>4.2</span>
                      </summary>
                      <ul>

                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>4.2.1</span>
                        </li>
                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>4.2.2</span>
                        </li>
                        <li style={{ 'white-space': 'nowrap' }}>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>4.2.3</span>
                        </li>
                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>4.2.4</span>
                        </li>

                      </ul>
                    </details>
                  </li>

                </ul>
              </details>
            </li>

            <li>
              <details>
                <summary>
                  <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                  <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>5</span>
                </summary>
                <ul>

                  <li>
                    <details>
                      <summary>
                        <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                        <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>5.1</span>
                      </summary>
                      <ul>

                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>5.1.1</span>
                        </li>
                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>5.1.2</span>
                        </li>
                        <li style={{ 'white-space': 'nowrap' }}>
                          <i style={{ 'font-size': '16px', 'white-space': 'nowrap' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>5.1.3</span>
                        </li>
                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>5.1.4</span>
                        </li>

                      </ul>
                    </details>
                  </li>

                  <li>
                    <details>
                      <summary>
                        <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                        <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>5.2</span>
                      </summary>
                      <ul>

                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>5.2.1</span>
                        </li>
                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>5.2.2</span>
                        </li>
                        <li style={{ 'white-space': 'nowrap' }}>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>5.2.3</span>
                        </li>
                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>5.2.4</span>
                        </li>

                      </ul>
                    </details>
                  </li>

                </ul>
              </details>
            </li>

            <li>
              <details>
                <summary>
                  <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                  <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>6</span>
                </summary>
                <ul>

                  <li>
                    <details>
                      <summary>
                        <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                        <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>6.1</span>
                      </summary>
                      <ul>

                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>6.1.1</span>
                        </li>
                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>6.1.2</span>
                        </li>
                        <li style={{ 'white-space': 'nowrap' }}>
                          <i style={{ 'font-size': '16px', 'white-space': 'nowrap' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>6.1.3</span>
                        </li>
                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>6.1.4</span>
                        </li>

                      </ul>
                    </details>
                  </li>

                  <li>
                    <details>
                      <summary>
                        <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                        <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>6.2</span>
                      </summary>
                      <ul>

                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>6.2.1</span>
                        </li>
                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>6.2.2</span>
                        </li>
                        <li style={{ 'white-space': 'nowrap' }}>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>6.2.3</span>
                        </li>
                        <li>
                          <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>6.2.4</span>
                        </li>

                      </ul>
                    </details>
                  </li>

                </ul>
              </details>
            </li>

            <li>
              <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
              <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>7</span>
            </li>

            <li>
              <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
              <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>8</span>
            </li>

            <li>
              <details>
                <summary>
                  <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                  <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>Event Browser</span>
                </summary>
                <ul>

                  <li>
                    <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                    <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>Alarm Browser</span>
                  </li>
                  <li>
                    <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                    <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>Message Browser</span>
                  </li>
                  <li>
                    <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                    <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>Operation Tracking Browser</span>
                  </li>
                  <li>
                    <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                    <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>Mask Browser</span>
                  </li>
                  <li>
                    <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                    <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>Shelving Browser</span>
                  </li>
                  <li>
                    <i style={{ 'font-size': '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                    <span style={{ 'margin-left': '5px', 'white-space': 'nowrap' }}>100.6</span>
                  </li>

                </ul>
              </details>
            </li>

          </ul>
        </li>

      </ul>

    </div>
  )
}

export default VideogramList
