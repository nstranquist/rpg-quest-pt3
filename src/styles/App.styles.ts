import styled from 'styled-components'

export const MainAspect = styled.main`
  width: 100vw;
  height: 75vw;
  background: pink;
  max-height: 100vh;
  max-width: 133.33vh;
  margin: 0 auto;
  position: absolute;
  top: 0; bottom: 0;
  left: 0; right: 0;
  background-image: url('/images/bg-screen.png');
  background-repeat: no-repeat;
  background-size: cover;
`

export const GridWrapper = styled.div`
  display: grid;
  grid-template-rows: 20% 1fr 1fr 1fr;
  width: 100%;
  height: 100%;
`

///* 16/9 = 1.778 */
 /* height:width ratio = 9/16 = .5625  */