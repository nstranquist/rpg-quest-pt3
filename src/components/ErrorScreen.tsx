import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledErrorScreen = styled.div`
  color: white;
  text-align: center;
  width: 100%;
  font-size: 2em;

  &.error-screen-message,
  &.error-screen-link {
    color: white;
    text-align: center;
  }

  &.error-screen-link:hover {
    text-decoration: underline;
  }
`

export const ErrorScreen = () => {
  return (
    <div >
      <div className="error-screen-message">Error, you aren't logged in yet</div>
      <Link to='/' className="error-screen-link">Go Back</Link>
    </div>
  )
}
