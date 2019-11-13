import React from 'react';
import { Link } from 'react-router-dom'

import { GridWrapper } from '../../styles/App.styles'


interface IProps {

}

const Castle: React.FC<IProps> = ({

}) => {
  return (
    <GridWrapper className="castle-grid" style={{ color: 'white', textAlign: 'center', fontSize: '2em' }}>
      Castle Screen
      <br />
      <Link to='/home' style={{color:'white'}}>
        Back</Link>
    </GridWrapper>
  );
}

export default Castle