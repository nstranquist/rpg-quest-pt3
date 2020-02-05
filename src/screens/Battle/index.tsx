import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
//import ui components
import { BoxHeader, BoxSidebar } from '../../components/Boxes'
import { ActionButton} from '../../components/Buttons/action-btn'
import HUD from '../../components/HUD'

import { GridWrapper } from '../../styles/App.styles'
import { LoadingBattleWrapper, BattleMenuWrapper } from '../../styles/Battle.style'

//import Battle from '../containers/battle'
import { startBattle, startPlayerTurn, startMonsterTurn, endBattle } from '../../store/battle'
import { playerIsAlive, monsterIsAlive } from '../../store/selectors'
import { RootState } from '../../store/root'
//import { battle } from '../../store/battle/battle'

//import styles
import '../screen.css'

const lineHeight = '2em';
const backgroundSize = '100% 120%';
const margin = '0 0 .5em 0'

const StyledWinMessage = styled.div`
  padding-top: 1.7em;
  border-top-right-radius: 2em;
  border-top-left-radius: 2em;
  background: rgba(0,0,0,.6);
  border: 3px solid red;
  //display: 'flex';
  //flexDirection: 'column';
  //justifyContent: 'center';

  &.win-message.inner {
    height: 6em;
    width: 100%;
    background: beige;
  }
`

interface IProps {
  player: any
  battle: any
  monsterHealth: number
  playerIsAlive: boolean
  monsterIsAlive: boolean
  xpReward: number
  goldReward: number
  startBattle(): void
  startPlayerTurn(): void
  startMonsterTurn(): void
  endBattle(playerWon: boolean): void
}
interface IState {
  winner: boolean
  whoWon: string
  playersTurn: boolean
  playerHUDRatio: string
  monsterHUDRatio: string
}


// TODO: make '100' into a max level variable, to decide the max health

// IDEA: could use selectors to manage some of the battle state
// HUD bars are 10ems each, .1em = 1%
class Battle extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      winner: false,
      whoWon: '',
      playersTurn: true,
      playerHUDRatio: `${(this.props.player.hp / 100) * 10}em`,  // if 100 health, for every 1 pt, deducts .1em (the HUD ratio)
      monsterHUDRatio: `${(this.props.monsterHealth / 100) * 10}em`,
      //playersTurn: Math.floor(Math.random() * 2) === 0 ? true : false,
    }
    //this.battle = new Battle(); // create new battle instance
    //this.battle.createBattle()
    //this.startBattle();
  }
  componentDidMount() {
    this.props.startBattle()
  }
  componentDidUpdate(prevProps: any) {
    if(prevProps.player.hp !== this.props.player.hp)
      this.setState({ playerHUDRatio: `${(this.props.player.hp / 100) * 10}em` })
    if(prevProps.monsterHealth !== this.props.monsterHealth)
      this.setState({ monsterHUDRatio: `${(this.props.monsterHealth / 100) * 10}em` })
  }

  handleAttack = () => {
    console.log('damage called');
    this.setState({ playersTurn: false });
    // start battle round
    this.props.startPlayerTurn()  // can add checking for player defeat inside thunk
    if(!this.props.monsterIsAlive) {
      console.log('monster has been defeated')
      this.setState({ winner: true })
      this.props.endBattle(true) // playerWon = true
    }
    else {
      setTimeout(() => {
        this.props.startMonsterTurn()
        if(!this.props.playerIsAlive) {  // may need to make async
          console.log('player has been defeated')
          this.setState({ winner: true })
          this.props.endBattle(false) //playerWon = false
        }
        else this.toggleBattleMenu()
      }, 1000)
    }
  }

  toggleBattleMenu = () => {
    this.setState({ playersTurn: true }, () => this.render())
  }

  handleUseItem = () => console.log('item used')

  handleSelectInventory = () => console.log('inventory item selected')

  render() {
    const {
      loading,
      //monsterHealth,
      monsterDamage,
      xpReward,
      goldReward,
      otherReward,
      //playerTurn,
    } = this.props.battle

    return (
      <GridWrapper className="battle-grid" >
        <HUD direction='HUD-left' HUDRatio={this.state.playerHUDRatio} />
        <HUD direction='HUD-right' HUDRatio={this.state.monsterHUDRatio} />
        <BoxHeader title='Battle'
          colStart={2} colEnd={3} />
        {loading && (
          <LoadingBattleWrapper className="loadingScreen">
            Loading Battle...
          </LoadingBattleWrapper>
        )}
        <BoxSidebar headerDisplay='none'
          imgSrc='/images/player-m-02.png'
          imgAlt='A brave warrior' />
        <BoxSidebar headerDisplay='none'
          imgSrc='/images/monster-01.png'
          imgAlt='A frightening monster'
          direction='right' />
        {this.state.playersTurn && !this.state.winner &&
          <BattleMenuWrapper>
            <ActionButton linkName="Attack" handleClick={this.handleAttack} lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} />
            <ActionButton linkName="Items" handleClick={this.handleUseItem} lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} />
            <ActionButton linkName="Weapons" handleClick={this.handleSelectInventory} lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} />
            <ActionButton linkName="Pets" handleClick={this.handleSelectInventory} lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} />
            <ActionButton linkName="Flee" linkRoute='/home' lineHeight={lineHeight} backgroundSize={backgroundSize} margin={'0'} />
          </BattleMenuWrapper>
        }
        {this.state.winner &&
          <StyledWinMessage>
            <div className="win-message-inner">
              {this.props.playerIsAlive ? (
                <div>
                  You Won!
                  <p>+{this.props.xpReward} xp</p>
                  <p>+{this.props.goldReward} gold</p>
                </div>
              ): (
                'You Lost!'
              )}
            </div>
            <ActionButton linkName="Go Back" linkRoute='/home' lineHeight={lineHeight}
              backgroundSize={backgroundSize} margin={margin} />
          </StyledWinMessage>
        }
      </GridWrapper>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  player: state.user.profile,
  battle: state.battle,
  xpReward: state.battle.xpReward,
  goldReward: state.battle.goldReward,
  playerIsAlive: playerIsAlive(state),
  monsterIsAlive: monsterIsAlive(state),
})

export default connect(
  mapStateToProps,
  { startBattle, startPlayerTurn, startMonsterTurn, endBattle }
)(Battle)


/*
<div className="simulateBtn" style={{
      dispay: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '50%',
      margin: '0 auto'
    }}>
      <div>
        <input type="checkbox" />
        <span style={{ marginLeft: '.3em' }}>simulate</span>
      </div>
      <div>
        <input type="checkbox" />
        <span style={{ marginLeft: '.3em' }}>music</span>
      </div>
      <div>
        <input type="checkbox" />
        <span style={{ marginLeft: '.3em' }}>sfx</span>
      </div>
    </div>
    */