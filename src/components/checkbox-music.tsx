import React from 'react'

const MusicCheckbox: React.FC = () => {

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
    <div style={{
      position: 'absolute',
      top: 0,
      right: 0,
      padding: '.3em',
      margin: '.3em'
    }} >
      <input id="music-input" type="checkbox" onChange={toggleAudio} />
      <span style={{ color: 'white', paddingLeft: '.3em', userSelect: 'none' }}
        onClick={toggleMusicCheckbox}>
        Mute</span>
    </div>
  )
}

export default MusicCheckbox