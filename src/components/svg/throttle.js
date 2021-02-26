import React from 'react';

const Throttle= (props) => {

  const transform = `rotate(${props.rotation}, ${props.scale*32.5}, ${props.scale*32.5}) scale(${props.scale})`
  const id = props.id

  return (
    <g>
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#656966"/>
          <stop offset="40%" stop-color="#a4a4a4"/>
          <stop offset="100%" stop-color="black"/>
        </linearGradient>

        <g id={props.id}
           transform={transform}>>
          <polygon points="17.5 0, 47.5 0, 47.5 65, 17.5 65"
                   style={{fill: '#e7dfde',
                           stroke: 'black',
                           strokeWidth: '3px'}} />
          <line x1="32.5"
                y1="0"
                x2="32.5"
                y2="65"
                style={{stroke: 'black',
                        strokeWidth: '3px',
                        strokeDasharray: "13 5",}} />
        </g>
      </defs>
      <use xlinkHref={`#${props.id}`} x={props.x-65*props.scale/2} y={props.y-65*props.scale/2}/>
    </g>
  )
}

export default Throttle
