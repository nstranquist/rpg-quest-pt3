import React from 'react'
import { Route, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { RootState } from '../store/root'

interface IProps {
  component: any
  isAuth: boolean
  path: string
}

const PrivateRoute: React.FC<IProps> = ({
  component: Component,
  isAuth,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuth ? (
        <Component {...props} />
      ) : (
        // <Redirect to='/' />
        <div>
          <div>Error, you aren't logged in yet</div>
          <Link to='/'>Go Back</Link>
        </div>
      )}
  />
)

export default connect(
  (state: RootState) => ({isAuth: state.user.auth.isAuth})
)(PrivateRoute)