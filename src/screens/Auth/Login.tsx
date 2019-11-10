import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import BoxHeader from '../../components/box-header'
import { RootState } from '../../store/root'
import { attemptLogin } from '../../store/user/auth'
import { directive } from '@babel/types'

interface IProps {
  isAuth: boolean
  loadingAuth: boolean
  errors: any
  attemptLogin(username: string, password: string): void
}

// I'd eventually like to allow users to login with just username/password
const Login: React.FC<IProps> = ({
  isAuth,
  loadingAuth,
  errors,
  attemptLogin
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  if(isAuth)
    return <Redirect to='/home' />
  
  return (
    <div>
      <BoxHeader title="Login" fontSize="32" />
      <form style={loginFormStyle} onSubmit={(e) => {
        e.preventDefault()
        attemptLogin(email, password)
      }}>
        {errors && <div style={{color: 'red', fontSize: '26px'}}>
          <p>An error occured while logging in:</p>
          <p>{errors.message}</p>  
        </div>}
        <div className="formItem">
          {/* <label htmlFor="email">Email</label> */}
          <input type="text" id="username" value={email} placeholder="Email..."
            onChange={(e) => setEmail(e.target!.value)} />
        </div>
        <div className="formItem">
          {/* <label htmlFor="password">Password</label> */}
          <input type="password" id="password" value={password} placeholder="*******" 
            onChange={(e) => setPassword(e.target!.value)}/>
        </div>
        {!loadingAuth ? (
          <button type="submit">Login</button>
        ) : <button>Loading...</button>}
        
      </form>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  isAuth: state.user.auth.isAuth,
  loadingAuth: state.user.auth.loadingAuth,
  errors: state.user.auth.errors
})

export default connect(
  mapStateToProps,
  { attemptLogin }
)(Login)

const loginFormStyle = {
  // margin: '0 auto',
  // textAlign: 'center',
  // position: 'absolute',
  // top: 0, bottom: 0,
  // left: 0, right: 0,
}