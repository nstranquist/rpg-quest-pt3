import React from 'react'
import { Route, Link } from 'react-router-dom'
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
//import CastleScreen from './castle_screen'

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
    // if (this.state.screenActive !== 'home') {
    //   let screenComponent;
    //   switch (this.state.screenActive) {
    //     case 'title':
    //       screenComponent = <TitleScreen handleId={this.setUserId} toggleScreen={this.toggleScreen} />
    //       break;
    //     case 'battle':
    //       screenComponent = <BattleScreen toggleScreen={this.toggleScreen} />
    //       break;
    //     case 'profile':
    //       screenComponent = <ProfileScreen toggleScreen={this.toggleScreen} />
    //       break;
    //     case 'shop':
    //       screenComponent = <ShopScreen toggleScreen={this.toggleScreen} />
    //       break;
    //     case 'castle':
    //       screenComponent = <CastleScreen toggleScreen={this.toggleScreen} />
    //       break;
    //   }
    //   return screenComponent;
    // }

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
        <ActionButton linkName='Battle' onClick={() => this.toggleScreen({ 'screenName': 'battle' })} margin='1em 0 0 1em' />
        <ActionButton linkName='Character' onClick={() => this.toggleScreen({ 'screenName': 'profile' })} margin='1em 1em 0 0' />
        <ActionButton linkName='Shop' onClick={() => this.toggleScreen({ 'screenName': 'shop' })} margin='0 0 1em 1em' />
        <ActionButton linkName='Castle' onClick={() => this.toggleScreen({ 'screenName': 'castle' })} margin='0 1em 1em 0' />
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
