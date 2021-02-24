import React from 'react'

export const TriangleBig = ({id, fill}) => {
  return (<defs>
            <marker id={id}
                    viewBox="0 0 20 20"
                    refX="10" refY="10"
                    markerUnits="userSpaceOnUse"
                    markerWidth="20" markerHeight="20"
                    orient="auto">
                <path d="M 0 0 L 20 10 L 0 20 z"
                      fill={fill}/>
            </marker>
          </defs>)
}

export const TriangleSmall = ({id, fill}) => {
  return (<defs>
              <marker id={id}
                      viewBox="0 0 10 10"
                      refX="20" refY="5"
                      markerUnits="userSpaceOnUse"
                      markerWidth="10" markerHeight="10"
                      orient="auto">
                  <path d="M 0 0 L 10 5 L 0 10 z"
                        fill={fill}/>
              </marker>
          </defs>)
}
