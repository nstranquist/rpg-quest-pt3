import React from 'react'

import './HUD.css'

interface IProps {
  leftOrRight: string
}

const HUD:React.FC<IProps> = ({
  leftOrRight
}) => (
  <div className={"HUD HUD-" + leftOrRight} >
    <span className="circle">
      Face
    </span>
    <div className="statbars">
      <span className="HUD-bar healthbar"/>
      <span className="HUD-bar manabar"/>
    </div>
  </div>
)

export default HUD