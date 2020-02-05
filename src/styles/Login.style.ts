import styled from 'styled-components'

const StyledLoginView = styled.div`
  margin-left: 25%;
  margin-right: 25%;

  @media (max-width: 600px) {
    margin-left: 10%;
    margin-right: 10%;
  }
  @media (max-width: 300px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`
const StyledLoginForm = styled.div`
  background: rgb(41,41,41);
  color: white;
  margin: 10px auto;
  padding: 2em;
  text-align: center;
`
const StyledFormItem = styled.p`
  margin-top: 12px;
`
const StyledFormInput = styled.input`
  padding: .4em .8em;
`
const StyledLoginButton = styled.button`
  padding: .2em 2.2em;
  margin: 1.5em;
  font-size: 1em;
  font-weight: 500;
`
const StyledError = styled.div`
  color: red;
  opacity: .8;
  font-size: 1.8em;
`

export {
  StyledLoginView,
  StyledLoginForm,
  StyledFormItem,
  StyledFormInput,
  StyledLoginButton,
  StyledError
}