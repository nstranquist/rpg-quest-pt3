import React from 'react'
import { connect } from 'react-redux'
//import ui components
import BoxHeader from '../../components/box-header'
import BoxSidebar from '../../components/box-sidebar'
import ActionButton from '../../components/action-btn'
import HUD from '../../components/HUD'

//import Battle from '../containers/battle'
import { startBattle } from '../../store/battle'
import { RootState } from '../../store/root'
//import { battle } from '../../store/battle/battle'

//import styles
import '../screen.css'

interface IProps {
  player: any
  battle: any
  monsterHealth: number
  startBattle(): void
}
interface IState {
  winner: boolean
  whoWon: string
  playersTurn: boolean
  playerHUDRatio: string
  monsterHUDRatio: string
}

// IDEA: could use selectors to manage some of the battle state
// HUD bars are 10ems each, .1em = 1%
class Battle extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      winner: false,
      whoWon: '',
      playersTurn: Math.floor(Math.random() * 2) === 0 ? true : false,
      playerHUDRatio: `${this.props.player.hp / 100}em`,  // if 100 health, for every 1 pt, deducts .1em (the HUD ratio)
      monsterHUDRatio: `${this.props.monsterHealth / 100}em`,
    }
    //this.battle = new Battle(); // create new battle instance
    //this.battle.createBattle()
    //this.startBattle();
  }
  componentDidMount() {
    this.props.startBattle()
  }

  componentWillUnmount() {
    //clearInterval(this.interval);
    //this.cancelSetState = true;
    //console.log('componentWillUnmount');
  }

  startBattle = () => {
    console.log(this.state.playersTurn);
    //if (this.props.player.hp <= 0) {
    //  console.log('You are already... DEAD');
    //  this.toggleScreen({ 'screenName': 'home' });
    //}
    //this.battle.startBattle();
    //if (!this.state.playersTurn) {
    //  this.battle.startMonsterRound();
    //  setTimeout(() => this.toggleBattleMenu(), 1000); // toggle nav
    //}
  }

  //endGame = (whoWon) => {
  //  console.log(whoWon + ' won!');
  //  this.setState({
  //    winner: true,
  //    whoWon: whoWon,
  //  });
  //}

  handleAttack = () => {
    console.log('damage called');
    // disable attack buttons
    this.setState({ playersTurn: false });
    // start battle round
    //let winner = this.battle.startRound();
    // check for winner
    //if (winner)
    //  this.endGame('player');
    // replace
    //else {
      // if no winner, play monster round
      //winner = this.battle.startMonsterRound();
      //if (this.props.)  // selector
      //  this.endGame('monster');
    //}
    // toggle nav
    setTimeout(() => this.toggleBattleMenu(), 1000);
  }

  toggleBattleMenu = () => {
    this.setState({ playersTurn: true });
    this.render();
  }

  handleUseItem = () => console.log('item used')

  handleSelectInventory = () => console.log('inventory item selected')

  render() {
    const {
      loading,
      monsterHealth,
      monsterDamage,
      xpReward,
      goldReward,
      otherReward,
      playerTurn,
    } = this.props.battle

    return (
      <div className="grid battle-grid" >
        <HUD leftOrRight='left' />
        <HUD leftOrRight='right' />
        <BoxHeader title='Battle'
          colStart={2} colEnd={3} />
        {loading && (
          <div className="loadingScreen" style={{position:'absolute', top:0, left:0,right:0,bottom:0, background:'black',color:'white',fontSize:'42px'}}>
            Loading Battle...
          </div>
        )}
        <BoxSidebar headerDisplay='none'
          imgSrc='/images/player-m-02.png'
          imgAlt='A brave warrior' />
        <BoxSidebar headerDisplay='none'
          imgSrc='/images/monster-01.png'
          imgAlt='A frightening monster'
          direction='right' />
        {this.state.playersTurn && !this.state.winner &&
          < div style={{
            paddingTop: '1.7em',
            marginTop: '1.2em',
            borderTopRightRadius: '2em',
            borderTopLeftRadius: '2em',
            background: 'rgba(0,0,0,.6)',
            border: '3px solid red',
            gridRowStart: '2',
            gridRowEnd: '4',
          }}>
            <ActionButton linkName="Attack" handleClick={this.handleAttack} lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} />
            <ActionButton linkName="Items" handleClick={this.handleUseItem} lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} />
            <ActionButton linkName="Weapons" handleClick={this.handleSelectInventory} lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} />
            <ActionButton linkName="Pets" handleClick={this.handleSelectInventory} lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} />
            <ActionButton linkName="Flee" linkRoute='/home' lineHeight={lineHeight} backgroundSize={backgroundSize} margin={'0'} />
          </div>
        }
        {this.state.winner &&
          < div style={{
            paddingTop: '1.7em',
            borderTopRightRadius: '2em',
            borderTopLeftRadius: '2em',
            background: 'rgba(0,0,0,.6)',
            border: '3px solid red',
            //display: 'flex',
            //flexDirection: 'column',
            //justifyContent: 'center',
          }}>
            <div style={{ height: '4em', width: '100%', background: 'beige' }}>
              {this.state.whoWon === 'player' ? 'You Won!' : 'You Lost!'}
            </div>
            <ActionButton linkName="Go Back" linkRoute='/home' lineHeight={lineHeight}
              backgroundSize={backgroundSize} margin={margin} />
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  player: state.user.profile,
  battle: state.battle,
  monsterHealth: state.battle.monsterHealth,
  //isPlayerDead selector here(same for monster)
})

export default connect(
  mapStateToProps,
  { startBattle }
)(Battle)


const lineHeight = '2em';
const backgroundSize = '100% 120%';
const margin = '0 0 .5em 0'



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