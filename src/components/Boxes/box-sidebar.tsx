import React from 'react'

interface IProps {
  sectionHeader?: string
  imgSrc: string
  imgAlt: string
  direction?: string
  headerDisplay: string
}

export const BoxSidebar: React.FC<IProps> = ({
  sectionHeader,
  imgSrc,
  imgAlt,
  headerDisplay,
  direction = 'left',
}) => (
  <div className={'box-sidebar box-sidebar-' + direction}>
    <div className="container sidebar">
      <div className="section-header" style={{ display: headerDisplay }}>
        {sectionHeader}</div>
      <img src={imgSrc} alt={imgAlt} className="img-fluid" />
    </div>
  </div>
)