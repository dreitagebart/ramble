import React from 'react'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Link to="/login">Login</Link>
        <div>
          <h1>Home Page</h1>
        </div>
      </div>
    )
  }
}

HomePage.propTypes = {}

export default HomePage
