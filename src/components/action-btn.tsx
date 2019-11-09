import React from 'react'
import { Link } from 'react-router-dom'

interface IProps {
  linkRoute: string
  linkName: string
  margin?: string
  backgroundSize?: string
  fontSize?: string
  padding?: string
}

const ActionButton: React.FC<IProps> = ({
  linkRoute,
  linkName,
  margin,
  backgroundSize,
  fontSize,
  padding
}) => (
  <div className="box-btn" style={{ margin, backgroundImage,
  }}>
    <div className="container btn-container" style={{
      backgroundSize,
    }}>
      <Link to={linkRoute} className="action-btn"
        style={{ lineHeight, userSelect: 'none', MozUserSelect: 'none', fontSize, padding }}>
        {linkName}
      </Link>
    </div>
  </div>
)

export default ActionButton

const lineHeight = '4.5em';
const backgroundImage = 'url(/images/minecraft-wood.jpeg)';