import React from 'react'
import PropTypes from 'prop-types'
import validator from 'validator'
import { Button, Form, Icon } from 'semantic-ui-react'
import FormError from '../messages/FormError'

const { Field } = Form

class LoginForm extends React.Component {
  state = {
    loading: false,
    formData: {
      email: '',
      password: ''
    },
    errors: {}
  }

  onChange = e =>
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value
      }
    })

  onSubmit = e => {
    e.preventDefault()

    const errors = this.validateForm(this.state.formData)

    this.setState({ errors })

    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.formData)
    }
  }

  validateForm = formData => {
    const errors = {}

    if (!validator.isEmail(formData.email)) errors.email = 'Invalid eMail'
    if (!formData.password) errors.password = 'Password cannot be blank'

    return errors
  }

  render() {
    const { formData, errors } = this.state

    return (
      <Form onSubmit={this.onSubmit}>
        <Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="example@example.com"
            onChange={this.onChange}
          />
          {errors.email && <FormError message={errors.email} />}
        </Field>
        <Field error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={this.onChange}
          />
          {errors.password && <FormError message={errors.password} />}
        </Field>
        <Field>
          <Button type="submit" color="black" icon labelPosition="right">
            <Icon name="chevron right" />
            Login
          </Button>
        </Field>
      </Form>
    )
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default LoginForm
