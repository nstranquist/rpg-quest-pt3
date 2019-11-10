import React from 'react';
import { Link } from 'react-router-dom'
// import components
import BoxHeader from '../../components/box-header';
import ActionButton from '../../components/action-btn';


const Shop: React.FC = ({
  
}) => {

  return (
    <div className="grid shop-grid" style={{ color: 'white', textAlign: 'center', fontSize: '2em', }}>
      <div className="header-row">
        <Link to='/home' style={{ color: 'white' }}>
          Back</Link>
      </div>
      <div className="box-inventory" style={{
        color: 'white', background: '#333', border: '1px solid gold'
      }}>
        Inventory
        <div>header-tab, add tabs here</div>
      </div>
      <div className="horiz-btn-box" style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
        gridRowStart: 3, gridRowEnd: 4, gridColumnStart: 2, gridColumnEnd: 14,
        margin: '.6em'
      }}>
        <ActionButton padding={'.3em 1.2em'} backgroundSize={'100% 100%'} fontSize={'.8em'} linkName="Weapons" />
        <ActionButton padding={'.3em 1.2em'} backgroundSize={'100% 100%'} fontSize={'.8em'} linkName="Items" />
        <ActionButton padding={'.3em 1.2em'} backgroundSize={'100% 100%'} fontSize={'.8em'} linkName="Armor" />
        <ActionButton padding={'.3em 1.2em'} backgroundSize={'100% 100%'} fontSize={'.8em'} linkName="Pets" />
        <ActionButton padding={'.3em 1.2em'} backgroundSize={'100% 100%'} fontSize={'.8em'} linkName="Misc" />
      </div>
    </div>
  );
}

export default Shop