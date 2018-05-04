import React from 'react'
import LoginForm from '../components/forms/LoginForm'
import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

class LoginPage extends React.Component {
  submit = formData => {
    console.log(formData)
  }

  render() {
    return (
      <Container>
        <Link to="/">Home</Link>
        <h1>Login Page</h1>
        <LoginForm submit={this.submit} />
      </Container>
    )
  }
}

LoginPage.propTypes = {}

export default LoginPage
