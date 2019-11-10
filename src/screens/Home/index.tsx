import React from 'react'
import { connect } from 'react-redux'
//import { Route, Redirect, Link } from 'react-router-dom'

//import ui components
import BoxHeader from '../../components/box-header'
import BoxSidebar from '../../components/box-sidebar'
import MenuButton from '../../components/action-btn'
import MessageBox from '../../components/box-messageboard'
import MusicCheckbox from '../../components/checkbox-music'
import InventoryBox from '../../components/box-inventory'

import { getProfileData, ProfileState } from '../../store/user/profile'
import { RootState } from '../../store/root'

import '../screen.css'

//const API_URL = 'https://us-central1-rpg-quest-4174a.cloudfunctions.net/api'

interface IProps {
  profile: ProfileState
  getProfileData(): void
}

class Home extends React.Component<IProps> {
  // constructor here if needed (maybe switch to functional component)

  componentDidMount() {
    // only load profile data on first mount
    if(!this.props.profile.xp && !this.props.profile.gold && !this.props.profile.hp && !this.props.profile.level)
      this.props.getProfileData()
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
        <InventoryBox
          playerName={name}
          playerXP={xp!}
          playerLevel={level!}
          playerGold={gold!}
          playerHP={hp!} />
        <BoxHeader title='RPGQuest' />
        <BoxSidebar headerDisplay='none'
          imgSrc='/images/player-m-02.png'
          imgAlt='A brave warrior' />
          {/* 4 boxes in a square (hence the different margin style values) */}
        <MenuButton linkName='Battle' linkRoute='/battle' margin='1em 0 0 1em' lineHeight={lineHeight} backgroundImage={actionBtnBg} />
        <MenuButton linkName='Character' linkRoute='/profile' margin='1em 1em 0 0' lineHeight={lineHeight} backgroundImage={actionBtnBg} />
        <MenuButton linkName='Shop' linkRoute='/shop' margin='0 0 1em 1em' lineHeight={lineHeight} backgroundImage={actionBtnBg} />
        <MenuButton linkName='Castle' linkRoute='/castle' margin='0 1em 1em 0' lineHeight={lineHeight} backgroundImage={actionBtnBg} />
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

const lineHeight = '4.5em';
const actionBtnBg = 'url(/images/minecraft-wood.jpeg)';