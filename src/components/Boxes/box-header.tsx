import React from 'react'

interface IProps {
  title: string,
  titlePadding?: string,
  fontSize?: string
  colEnd?: number
  colStart?: number
  style?: any
}

export const BoxHeader: React.FC<IProps> = ({
  title,
  titlePadding,
  fontSize,
  colEnd,
  colStart=1,
}) => (
  <div className="box-header">
    <h1 className="title-header"
      style={{
        padding: titlePadding,
        gridColumnStart: colStart,
        gridColumnEnd: colEnd,
        fontSize: fontSize
      }}>
      {title}</h1>
  </div>
)