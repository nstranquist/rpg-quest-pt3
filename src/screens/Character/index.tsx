import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

//import ui components
import { BoxHeader, BoxSidebar, BoxMessageBoard } from '../../components/Boxes'
import { ActionButton } from '../../components/Buttons'
import { GridWrapper } from '../../styles/App.styles'

//import styles
import '../screen.css'

const lineHeight = '2em';
const backgroundSize = '100% 200%';
const margin = '0 0 .5em 0';

const Character: React.FC = ({

}) => {
  const [activeStat, setActiveStat] = useState<string | null>(null)

  const renderStatView = () => {
    switch(activeStat) {
      case 'Strength':
        return;
      default:
        return;
    }
  }

  return (
    <GridWrapper className="profile-grid">
      <div style={{ position: 'absolute', top: 0,right: 0, color: 'white', padding: '.2em', margin: '.2em' }}>
        <Link to='/home' style={{ color: 'white' }}>Back</Link>
      </div>
      <BoxHeader title='Character' />
      <BoxSidebar headerDisplay='none' direction='center'
        imgSrc='/images/player-m-02.png'
        imgAlt='A brave warrior' />
      <div>
        <ActionButton lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} linkName="Strength" />
        <ActionButton lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} linkName="Dexterity" />
        <ActionButton lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} linkName="Intelligence" />
        <ActionButton lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} linkName="Charisma" />
        <ActionButton lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} linkName="Luck" />
      </div>
      <div style={{ width: '100%', height: '100%' }}>
        <BoxMessageBoard boardTitle='Stats' margin='0' padding='0' message='Strength: Dexterity: Intelligence: Charisma: __Luck__: ' />
      </div>
    </GridWrapper>
  )
}

export default Character
