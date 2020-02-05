import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { GridWrapper } from '../../styles/App.styles'
import { RootState } from '../../store/root';
import { BoxHeader } from '../../components/Boxes';


const StyledCastleView = styled.div`
  margin: 1em 15%;
  padding: 1em;
  background: rgb(41,41,41);
  color: white;
  text-align: center;
  font-size: .8em;
`

interface IProps {
  name: string
  hasCastle: boolean
}

const Castle: React.FC<IProps> = ({
  name,
  hasCastle,
}) => {
  return (
    <GridWrapper className="castle-grid" style={{ color: 'white', textAlign: 'center', fontSize: '2em' }}>
      <BoxHeader title={`${name}'s Castle`} fontSize="1.3em" />
      <StyledCastleView>
        {hasCastle ? (
          <div>Here is your castle!</div>
        ) : (
          <div>You don't have a castle yet. Level up to get one!</div>
        )}
      </StyledCastleView>
      <Link to='/home' style={{color:'white'}}>
        Back</Link>
    </GridWrapper>
  );
}

const mapStateToProps = (state: RootState) => ({
  name: state.user.profile.name,
  hasCastle: state.user.profile.castle
})

export default connect(
  mapStateToProps,
  {  }
)(Castle)