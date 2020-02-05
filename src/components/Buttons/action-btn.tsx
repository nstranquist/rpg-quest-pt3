import React from 'react'
import { Link } from 'react-router-dom'

interface IProps {
  linkName: string
  linkRoute?: string
  margin?: string
  backgroundSize?: string
  backgroundImage?: string
  fontSize?: string
  padding?: string
  lineHeight?: string
  handleClick?(): any
}

export const ActionButton: React.FC<IProps> = ({
  linkRoute,
  linkName,
  margin,
  backgroundSize,
  backgroundImage,
  fontSize,
  padding,
  lineHeight,
  handleClick,
}) => (
  <div className="box-btn" style={{ margin, backgroundImage, }}>
    <div className="container btn-container" style={{ backgroundSize }}>
      <Link to={linkRoute!} className="action-btn" onClick={handleClick}
        style={{ lineHeight, userSelect: 'none', MozUserSelect: 'none', fontSize, padding }}>
        {linkName}
      </Link>
    </div>
  </div>
)
