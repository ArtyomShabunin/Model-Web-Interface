import React from 'react';

const Filter= (props) => {

  const transform = `rotate(${props.rotation}, ${props.scale*32.5}, ${props.scale*32.5}) scale(${props.scale})`
  const id = props.id

  return (
    <g>
      <defs>
        <g id={props.id}
           transform={transform}>>
          <circle cx="32.5"
                  cy="32.5"
                  r="32.5"
                  style={{fill: '#e7dfde',
                          stroke: 'black',
                          strokeWidth: '3px'}}  />
          <line x1="32.5"
                y1="0"
                x2="32.5"
                y2="65"
                style={{stroke: 'black',
                        strokeWidth: '3px',
                        strokeDasharray: "20 5",}} />
        </g>
      </defs>
      <use xlinkHref={`#${props.id}`} x={props.x-65*props.scale/2} y={props.y-65*props.scale/2}/>
    </g>
  )
}

export default Filter
