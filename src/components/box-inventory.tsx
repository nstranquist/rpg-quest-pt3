import React from 'react';

interface IProps {
  playerName: string,
  playerLevel: number,
  playerXP: number,
  playerGold: number
}

const InventoryBox: React.FC<IProps> = ({
  playerName,
  playerLevel,
  playerXP,
  playerGold
}) => (
  <div className='top-inventory' style={{
    position: 'absolute',
    top: '1em', left: '1em',
    width: '10em', height: 'auto'
  }}>
    <div style={{
      position: 'relative', width: '100%', height: '100%', border: '1px solid red', color: 'white',
      background: '#333', padding: '0 .2em .2em .2em'
    }}>
      <div style={{ textAlign: 'center' }}>{playerName}</div>
      <div>Lvl: <span style={{ float: 'right' }}>{playerLevel}</span></div>
      <div>xp: <span style={{ float: 'right' }}>{playerXP}</span></div>
      <div>gold: <span style={{ float: 'right' }}>{playerGold}</span></div>
    </div>
  </div>
)

export default InventoryBox