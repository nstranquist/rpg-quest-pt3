import React from 'react'
import { Route, Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'

//import ui components
import BoxHeader from '../../components/box-header'
import BoxSidebar from '../../components/box-sidebar'
import ActionButton from '../../components/action-btn'
import MessageBox from '../../components/box-messageboard'
import MusicCheckbox from '../../components/checkbox-music'
import InventoryBox from '../../components/box-inventory'

//import TitleScreen from './title_screen'
//import BattleScreen from './battle_screen'
//import ProfileScreen from './profile_screen'
//import ShopScreen from './shop_screen'
import CastleScreen from '../Castle'

import { getProfileData, ProfileState } from '../../store/user/profile'
import { RootState } from '../../store/root'

import '../screen.css'

//const API_URL = 'https://us-central1-rpg-quest-4174a.cloudfunctions.net/api'

interface IProps {
  profile: ProfileState
  getProfileData(): void
}
interface IState {
  screenActive: string
}

class Home extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.toggleScreen = this.toggleScreen.bind(this);
    this.state = {
      screenActive: 'title',
    }
  }

  componentDidMount() {
    this.props.getProfileData()
  }

  toggleScreen = (e: any) => {
    this.setState({
      screenActive: e.screenName,
    })
    this.render();
  }

  render() {
    const {
      name,
      xp,
      level,
      gold,
      hp,
    } = this.props.profile

    return (
      <div className="grid home-grid">
        <MusicCheckbox />
        <InventoryBox playerName={name}
          playerLevel={level!}
          playerXP={xp!}
          playerGold={gold!} />
        <BoxHeader title='RPGQuest' />
        <BoxSidebar headerDisplay='none'
          imgSrc='/images/player-m-02.png'
          imgAlt='A brave warrior' />
          {/* 4 boxes in a square (hence the different margin style values) */}
        <ActionButton linkName='Battle' linkRoute='/battle' margin='1em 0 0 1em' />
        <ActionButton linkName='Character' linkRoute='/profile' margin='1em 1em 0 0' />
        <ActionButton linkName='Shop' linkRoute='/shop' margin='0 0 1em 1em' />
        <ActionButton linkName='Castle' linkRoute='/castle' margin='0 1em 1em 0' />
        <MessageBox message='Battle Monsters to start earning gold and xp!' />
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  profile: state.user.profile,
})

export default connect(
  mapStateToProps,
  { getProfileData }
)(Home)
