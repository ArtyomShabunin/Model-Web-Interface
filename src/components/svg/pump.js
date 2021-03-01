import React from 'react';

const Pump= (props) => {

  const transform = `rotate(${props.rotation}, ${props.scale*32.5}, ${props.scale*32.5}) scale(${props.scale})`
  const id = props.id

  const background_style = {
    fill: '#3e80ff'
  }

  return (
    <g>
      <defs>
        <g id={props.id}
           transform={transform}>>
          <rect x="0"
                y="0"
                width="65"
                height="65"
                style={background_style} />
          <circle cx="32.5"
                  cy="32.5"
                  r="29.5"
                  style={{fill: '#e7dfde',
                          stroke: 'black',
                          strokeWidth: '3px'}}  />
          <path d="M32.5 6 L 6 32.5 L 32.5 59"
                style={{fill: 'none',
                        stroke: 'black',
                        strokeWidth: '3px'}} />

        </g>
      </defs>
      <use xlinkHref={`#${props.id}`} x={props.x-65*props.scale/2} y={props.y-65*props.scale/2}/>
    </g>
  )
}

export default Pump
