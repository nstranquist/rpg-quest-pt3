import React from 'react'
import styled from 'styled-components'

const StyledCheckbox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: .3em;
  margin: .3em;
`
const StyledMute = styled.span`
  color: white;
  padding-left: .3em;
  user-select: none;
`


export const MusicCheckbox: React.FC = () => {

    //TODO: provide better typings for these 2 functions, then remove ts-ignore
    const toggleMusicCheckbox = () => { // uncheck box and toggle audio
      //@ts-ignore
      document.getElementById('music-input')!.checked ^= 1;  //toggles checkbox
      toggleAudio();
    }
    const toggleAudio = () => {
      let myAudio = document.getElementById('title_music')
      //@ts-ignore
      myAudio!.paused ? myAudio!.play() : myAudio!.pause();
    }

  return (
    <StyledCheckbox>
      <input id="music-input" type="checkbox" onChange={toggleAudio} />
      <StyledMute onClick={toggleMusicCheckbox}>
        Mute</StyledMute>
    </StyledCheckbox>
  )
}