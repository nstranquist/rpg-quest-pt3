import React from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { RootState } from '../store/root'
import { ErrorScreen } from '../components/ErrorScreen';

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
        <ErrorScreen />
      )}
  />
)

const mapStateToProps = (state: RootState) => ({
  isAuth: state.user.auth.isAuth,
})

export default connect(
  mapStateToProps
)(PrivateRoute)