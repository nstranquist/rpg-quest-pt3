import styled from 'styled-components'

export const LoadingBattleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  color: white;
  font-size: 42px;
`

export const BattleMenuWrapper = styled.div`
  padding-top: 1.7em;
  margin-top: 1.2em;
  border-top-right-radius: 2em;
  border-top-left-radius: 2em;
  background: rgba(0,0,0,.6);
  border: 3px solid red;
  grid-row-start: 2'
  grid-row-end: 4;
`