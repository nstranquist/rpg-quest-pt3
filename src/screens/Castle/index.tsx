import React from 'react';
import { Link } from 'react-router-dom'

interface IProps {

}

const Castle: React.FC<IProps> = ({

}) => {
  return (
    <div className="grid castle-grid" style={{ color: 'white', textAlign: 'center', fontSize: '2em' }}>
      Castle Screen
      <br />
      <Link to='/home' style={{color:'white'}}>
        Back</Link>
    </div>
  );
}

export default Castle