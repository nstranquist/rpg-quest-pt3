import React from 'react'
import { connect } from 'react-redux'

//import ui components
import { BoxHeader, BoxSidebar, BoxInventory, BoxMessageBoard } from '../../components/Boxes'
import { ActionButton as MenuButton } from '../../components/Buttons'
import { MusicCheckbox } from '../../components/checkbox-music'
import { GridWrapper } from '../../styles/App.styles'

import { getProfileData, ProfileState } from '../../store/user/profile'
import { RootState } from '../../store/root'

import '../screen.css'

const lineHeight = '4.5em';
const actionBtnBg = 'url(/images/minecraft-wood.jpeg)';

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
    const { name, xp, level, gold, hp } = this.props.profile

    return (
      <GridWrapper className="home-grid">
        <MusicCheckbox />
        <BoxInventory
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
          {/* TODO: replace with grid gutters?? */}
        <MenuButton linkName='Battle' linkRoute='/battle' margin='1em 0 0 1em' lineHeight={lineHeight} backgroundImage={actionBtnBg} />
        <MenuButton linkName='Character' linkRoute='/character' margin='1em 1em 0 0' lineHeight={lineHeight} backgroundImage={actionBtnBg} />
        <MenuButton linkName='Shop' linkRoute='/shop' margin='0 0 1em 1em' lineHeight={lineHeight} backgroundImage={actionBtnBg} />
        <MenuButton linkName='Castle' linkRoute='/castle' margin='0 1em 1em 0' lineHeight={lineHeight} backgroundImage={actionBtnBg} />
        <BoxMessageBoard message='Battle Monsters to start earning gold and xp!' />
      </GridWrapper>
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
