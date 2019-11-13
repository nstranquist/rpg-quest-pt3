import React from 'react'

import { HUDContainer, HealthBar, ManaBar, Statbars, HUDBar, HUDCircle } from '../../styles/HUD.style'

interface IProps {
  direction: string
  HUDRatio: string
}

const HUD:React.FC<IProps> = ({
  direction,
  HUDRatio
}) => (
  <HUDContainer className={direction} >
    <HUDCircle>
      Face
    </HUDCircle>
    <Statbars className={direction}>
      <HUDBar>
        <HealthBar HUDRatio={HUDRatio}  />
      </HUDBar>
      <HUDBar>
        <ManaBar  />
      </HUDBar>
    </Statbars>
  </HUDContainer>
)

export default HUD