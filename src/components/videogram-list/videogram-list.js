import React from 'react'

import './videogram-list.css'

const VideogramList = () => {
  return (
    <div>
      <div style={{ marginTop: '5px' }} className="d-flex">
        <span className="p-2 flex-fill">Обновить выбранную обрасть</span>
        <button style={{ margin: '2px' }} className="flex-fill">
          Обновить
        </button>
        <button style={{ minWidth: '10px',
                         width: '18px',
                         margin: '2px',
                         padding: '0px'}}>
          <i style={{ marginBottom: '7px' }}
             className="fa fa-sort-desc"
             aria-hidden="true"/>
        </button>
      </div>

      <div style={{ marginTop: '5px' }} className="d-flex">
        <span className="p-2 flex-fill">Открыть уровни</span>
        <button style={{ minWidth: '10px', margin: '2px' }}>1</button>
        <button style={{ minWidth: '10px', margin: '2px' }}>2</button>
        <button style={{ minWidth: '10px', margin: '2px' }}>3</button>
        <button style={{ minWidth: '10px', margin: '2px' }}>4</button>
        <button style={{ minWidth: '10px',
                         margin: '2px',
                         marginLeft: '15px',
                         width: '28px',
                         height: '28px',
                         padding: '0 4px' }}>
          <i style={{ fontSize: '20px' }}
             className="fa fa-binoculars"
             aria-hidden="true"/>
        </button>
      </div>

      <div style={{ marginTop: '10px', border: '1px solid black' }}>
        <h2 style={{ fontFamily: '"Pixelated MS Sans Serif",Arial',
                       fontSize: '11px',
                       paddingLeft: '4px',
                       marginTop: '-10px',
                       marginLeft: '5px',
                       background: 'silver',
                       width: '60px' }}>
          Find picture
        </h2>
        <div className="d-flex">
          <div className="field-row flex-fill">
            <input style={{ width: 170 }} type="text" />
          </div>
          <span className="p-2 flex-fill">8 ч {"{0/0?}"}</span>
          <button style={{ minWidth: '10px', width: '28px', height: '28px', padding: '0 4px', paddingBottom: '9px', margin: '2px' }}>
            <i style={{ fontSize: '20px' }} className="fa fa-sort-desc" aria-hidden="true"/>
          </button>
          <button style={{ minWidth: '10px', width: '28px', height: '28px', padding: '0 4px', paddingTop: '9px', margin: '2px' }}>
            <i style={{ fontSize: '20px' }} className="fa fa-sort-asc" aria-hidden="true"/>
          </button>
          <button style={{ minWidth: '10px', width: '28px', height: '28px', padding: '0 4px', margin: '2px'}}>
            <i style={{ fontSize: '20px' }} className="fa fa-times" aria-hidden="true"/>
          </button>
        </div>
      </div>

      <ul style={{ height: '250px', overflow: 'auto' }} className="tree-view">

        <li>
          <ul>
            <li>
              <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
              <span style={{ marginLeft: '5px' }}>0</span>
            </li>

            <li>
              <details>
                <summary>
                  <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                  <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>1</span>
                </summary>
                <ul>

                  <li>
                    <details>
                      <summary>
                        <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                        <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>1.1</span>
                      </summary>
                      <ul>

                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>1.1.1</span>
                        </li>
                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>1.1.2</span>
                        </li>
                        <li style={{ whiteSpace: 'nowrap' }}>
                          <i style={{ fontSize: '16px', whiteSpace: 'nowrap' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>80MAD00EN001.Температурный контроль подш</span>
                        </li>
                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>1.1.4</span>
                        </li>

                      </ul>
                    </details>
                  </li>

                  <li>
                    <details>
                      <summary>
                        <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                        <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>1.2</span>
                      </summary>
                      <ul>

                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>1.2.1</span>
                        </li>
                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>1.2.2</span>
                        </li>
                        <li style={{ whiteSpace: 'nowrap' }}>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>1.2.3</span>
                        </li>
                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>1.2.4</span>
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
                  <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                  <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>2</span>
                </summary>
                <ul>

                  <li>
                    <details>
                      <summary>
                        <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                        <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>2.1</span>
                      </summary>
                      <ul>

                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>2.1.1</span>
                        </li>
                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>2.1.2</span>
                        </li>
                        <li style={{ whiteSpace: 'nowrap' }}>
                          <i style={{ fontSize: '16px', whiteSpace: 'nowrap' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>2.1.3</span>
                        </li>
                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>2.1.4</span>
                        </li>

                      </ul>
                    </details>
                  </li>

                  <li>
                    <details>
                      <summary>
                        <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                        <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>2.2</span>
                      </summary>
                      <ul>

                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>2.2.1</span>
                        </li>
                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>2.2.2</span>
                        </li>
                        <li style={{ whiteSpace: 'nowrap' }}>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>2.2.3</span>
                        </li>
                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>2.2.4</span>
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
                  <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                  <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>3</span>
                </summary>
                <ul>

                  <li>
                    <details>
                      <summary>
                        <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                        <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>3.1</span>
                      </summary>
                      <ul>

                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>3.1.1</span>
                        </li>
                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>3.1.2</span>
                        </li>
                        <li style={{ whiteSpace: 'nowrap' }}>
                          <i style={{ fontSize: '16px', whiteSpace: 'nowrap' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>3.1.3</span>
                        </li>
                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>3.1.4</span>
                        </li>

                      </ul>
                    </details>
                  </li>

                  <li>
                    <details>
                      <summary>
                        <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                        <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>3.2</span>
                      </summary>
                      <ul>

                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>3.2.1</span>
                        </li>
                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>3.2.2</span>
                        </li>
                        <li style={{ whiteSpace: 'nowrap' }}>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>3.2.3</span>
                        </li>
                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>3.2.4</span>
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
                  <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                  <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>4</span>
                </summary>
                <ul>

                  <li>
                    <details>
                      <summary>
                        <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                        <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>4.1</span>
                      </summary>
                      <ul>

                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>4.1.1</span>
                        </li>
                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>4.1.2</span>
                        </li>
                        <li style={{ whiteSpace: 'nowrap' }}>
                          <i style={{ fontSize: '16px', whiteSpace: 'nowrap' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>4.1.3</span>
                        </li>
                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>4.1.4</span>
                        </li>

                      </ul>
                    </details>
                  </li>

                  <li>
                    <details>
                      <summary>
                        <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                        <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>4.2</span>
                      </summary>
                      <ul>

                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>4.2.1</span>
                        </li>
                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>4.2.2</span>
                        </li>
                        <li style={{ whiteSpace: 'nowrap' }}>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>4.2.3</span>
                        </li>
                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>4.2.4</span>
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
                  <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                  <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>5</span>
                </summary>
                <ul>

                  <li>
                    <details>
                      <summary>
                        <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                        <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>5.1</span>
                      </summary>
                      <ul>

                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>5.1.1</span>
                        </li>
                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>5.1.2</span>
                        </li>
                        <li style={{ whiteSpace: 'nowrap' }}>
                          <i style={{ fontSize: '16px', whiteSpace: 'nowrap' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>5.1.3</span>
                        </li>
                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>5.1.4</span>
                        </li>

                      </ul>
                    </details>
                  </li>

                  <li>
                    <details>
                      <summary>
                        <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                        <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>5.2</span>
                      </summary>
                      <ul>

                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>5.2.1</span>
                        </li>
                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>5.2.2</span>
                        </li>
                        <li style={{ whiteSpace: 'nowrap' }}>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>5.2.3</span>
                        </li>
                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>5.2.4</span>
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
                  <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                  <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>6</span>
                </summary>
                <ul>

                  <li>
                    <details>
                      <summary>
                        <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                        <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>6.1</span>
                      </summary>
                      <ul>

                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>6.1.1</span>
                        </li>
                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>6.1.2</span>
                        </li>
                        <li style={{ whiteSpace: 'nowrap' }}>
                          <i style={{ fontSize: '16px', whiteSpace: 'nowrap' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>6.1.3</span>
                        </li>
                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>6.1.4</span>
                        </li>

                      </ul>
                    </details>
                  </li>

                  <li>
                    <details>
                      <summary>
                        <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                        <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>6.2</span>
                      </summary>
                      <ul>

                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>6.2.1</span>
                        </li>
                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>6.2.2</span>
                        </li>
                        <li style={{ whiteSpace: 'nowrap' }}>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>6.2.3</span>
                        </li>
                        <li>
                          <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                          <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>6.2.4</span>
                        </li>

                      </ul>
                    </details>
                  </li>

                </ul>
              </details>
            </li>

            <li>
              <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
              <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>7</span>
            </li>

            <li>
              <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
              <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>8</span>
            </li>

            <li>
              <details>
                <summary>
                  <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                  <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>Event Browser</span>
                </summary>
                <ul>

                  <li>
                    <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                    <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>Alarm Browser</span>
                  </li>
                  <li>
                    <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                    <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>Message Browser</span>
                  </li>
                  <li>
                    <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                    <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>Operation Tracking Browser</span>
                  </li>
                  <li>
                    <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                    <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>Mask Browser</span>
                  </li>
                  <li>
                    <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                    <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>Shelving Browser</span>
                  </li>
                  <li>
                    <i style={{ fontSize: '16px' }} className="fa fa-window-maximize" aria-hidden="true"/>
                    <span style={{ marginLeft: '5px', whiteSpace: 'nowrap' }}>100.6</span>
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
