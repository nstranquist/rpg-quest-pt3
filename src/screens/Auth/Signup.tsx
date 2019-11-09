import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import BoxHeader from '../../components/box-header'
import { attemptSignup, AuthState } from '../../store/user/auth'
import { RootState } from '../../store/root'

interface IProps {
  auth: AuthState
  attemptSignup(username: string, email: string, password: string): void
}

const Signup: React.FC<IProps> = ({
  auth,
  attemptSignup,
}) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  if(auth.isAuth)
    return <Redirect to='/home' />
  return (
    <div>
      <BoxHeader title='Signup' fontSize='32' />
      <form onSubmit={(e) => {
        e.preventDefault()
        console.log('submitting signup form')
        attemptSignup(username, email, password)
      }}>
        {auth.errors && <div style={{color:'red',fontSize:'26'}}>
          <p>An error occurred when signing up</p>
          <p>{auth.errors.message}</p>
        </div>}
        <div className="formItem">
          {/* <label>username</label> */}
          <input type="text" name="username" value={username} placeholder="Username"
            onChange={(e) => setUsername(e.target!.value)} />
        </div>
        <div className="formItem">
          <input type="email" name="email" value={email} placeholder="Email" 
            onChange={(e) => setEmail(e.target!.value)}/>
        </div>
        <div className="formItem">
          <input type="password" name="password" value={password} placeholder="*********" 
            onChange={(e) => setPassword(e.target!.value)} />
        </div>
        {auth.loadingAuth ? (
          <button>Loading...</button>
        ) : (
          <button type="submit">Signup</button>
        )}
      </form>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  auth: state.user.auth
})

export default connect(
  mapStateToProps,
  { attemptSignup }
)(Signup)
