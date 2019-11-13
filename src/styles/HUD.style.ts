import styled from 'styled-components'


// might still need HUDRight props for subtracting health bar
interface HealthBarProps {
  HUDRatio: string
}
interface ManaBarProps {
  HUDRatio?: string
}

export const HUDContainer = styled.div`
  position: absolute;
  top: .5em;
  display: flex;
  align-items: center;
  &.HUD-left {
    left: 1em;
  }
  &.HUD-right {
    right: 1em;
    flex-direction: row-reverse;
    text-align: right;
  }
`
export const Statbars = styled.div`
  display: flex;
  flex-direction: column;
  $.HUD-left {
    margin-left: -.14em;
  }
  &.HUD-right {
    margin-right: -.14em;
    text-align: right;
  }
`
export const HUDBar = styled.div`
  height: .8em;
  width: 10em;
  border-top-right-radius: 5px;
  border: 1px solid gold;
`
export const HealthBar = styled.div<HealthBarProps>`
  background: #DC0000;
  height: .8em;
  width: ${props => props.HUDRatio};
  &.HUD-left {
    border-top-right-radius: 5px;
  }
  &.HUD-right {
    border-top-left-radius: 5px;
    text-align: right;
    align-self: right;
  }
`
export const ManaBar = styled.div<ManaBarProps>`
  background: blue;
  height: .8em;
  width: 10em;
  &.HUD-left {
    border-bottom-right-radius: 5px;
  }
  &.HUD-right {
    border-bottom-left-radius: 5px;
    text-align: right;
  }
`
export const HUDCircle = styled.span`
  height: 5em;
  width: 5em;
  color: red;
  background: #333;
  border-radius: 100%;
  border: 3px solid gold;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`