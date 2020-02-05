import styled from 'styled-components'

// grids (HomeGrid, ShopGrid, etc):
// HomeGrid
// ShopGrid
// ProfileGrid
// BattleGrid
// CastleGrid

// others:
export const TitleHeader = styled.div`
  display: inline-block;  
  padding: 1em;
  padding-bottom: 1.25em;
  font-size: 2em;
  line-height: 1em;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.897);
  background: url("/images/bg-header.png");
  background-repeat: no-repeat;
  background-size: 100% 150%;
  background-position: center;
`
export const BoxHeader = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  justify-content: center;
  align-items: start;
`
export const BoxInventory = styled.div`
  grid-column-start: 2;
  grid-column-end: 14;
  grid-row-start: 2;
  grid-row-end: 3;
`
export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const SectionHeader = styled.div`
  font-size: 2em;
  line-height: 1.2em; 
  position: absolute;
  top: -1.2em; /* 1.2em line-height + .5em space */
  left: -.55em;
  width: 100%; /* to add items to */
  background: #333;
  color: gold;
  padding-left: .75em;
  padding-right: .75em;
  box-shadow: 30px -5px 30px 10px rgba(255,255,255,.42);
`

export const ButtonContainer = styled.div`
  background-image: url('/images/button.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImgFluid = styled.img`
  max-height: 100%;
  height: 100%;
  max-width: 100%;
  width: auto;
  margin: 0 auto;
  margin-bottom: 1em;
`
// check type 'div'
export const BoxButton = styled.div`
  border: 3px solid #333;
  background-size: 150% 150%;
`
export const ActionButton = styled.div`
  font-size: 1.5em;
  width: 100%;
  text-align: center;
`
export const GenericContainer = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  outline: 1px solid black;
  position: relative;
`