import React from 'react';
import { Link } from 'react-router-dom'

interface IProps {
  buttonName: string
  screenLink: string
  handleOnClick?(): void
}

const BoxMessageBtn: React.FC<IProps> = ({
  buttonName,
  handleOnClick,
  screenLink
}) => (
  <div className="box_message-btn" onClick={handleOnClick} style={{
    padding: '.5em',
    margin: '1em',
    marginTop: 0,
    background: '#896C42',
    border: '.25em solid #563E26',
    cursor: 'var(--cursor-pointer)'
  }} >
    <div className="message-btn" style={{
      width: '100%', textAlign: 'center',
    }}>
      <Link to={`/${screenLink}`} style={{
        letterSpacing: '3px', color: '#f7f7f7', cursor: 'var(--cursor-pointer)'
      }}>
        {buttonName}
      </Link>
    </div>
  </div>
)

export default BoxMessageBtn