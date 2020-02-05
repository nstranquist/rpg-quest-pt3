import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
// components
import { BoxHeader } from '../../components/Boxes'
import {
  StyledLoginForm, StyledFormItem, StyledLoginButton, StyledLoginView, StyledError, StyledFormInput
} from '../../styles/Login.style'
// redux
import { RootState } from '../../store/root'
import { attemptLogin } from '../../store/user/auth'

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
  const [loginForm, setLoginForm] = useState<any>({ email: '', password: '' })

  const handleChange = (e: any) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    attemptLogin(loginForm.email, loginForm.password)
  }
  
  if(isAuth)
    return <Redirect to='/home' />
  
  return (
    <StyledLoginView>
      <BoxHeader title="Login" fontSize="2em" />
      <StyledLoginForm onSubmit={handleSubmit}>
        {errors && (
          <StyledError>
            <p>An error occured while logging in:</p>
            <p>{errors.message}</p>  
          </StyledError>
        )}
        <StyledFormItem>
          <BoxHeader title="Email" fontSize="1.3em" />
          <input type="email" name="email" value={loginForm.email} placeholder="Email..." 
            onChange={handleChange}/></StyledFormItem>
        <StyledFormItem>
          <BoxHeader title="Password" fontSize="1.3em" />
          <input type="password" name="password" value={loginForm.password} placeholder="*******" 
            onChange={handleChange}/></StyledFormItem>

        {!loadingAuth ? (
          <StyledLoginButton type="submit" onClick={handleSubmit}>Login</StyledLoginButton>
        ) : <StyledLoginButton>Loading...</StyledLoginButton>}
      </StyledLoginForm>
    </StyledLoginView>
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
