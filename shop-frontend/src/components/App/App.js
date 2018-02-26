import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Home from '../Home'
import Shop from '../Shop'
import Nav from '../Nav'

class App extends Component {
  constructor() {
    super()

    this.state = {
      username: ''
    }
  }

  usernameInput = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  usernameAdd = (e) => {
    e.preventDefault()
    localStorage.setItem('username', JSON.stringify(this.state.username))
  }

  componentWillMount() {
    this.setState({
      username: JSON.parse(localStorage.getItem('username'))
    })
  }

  render() {
    return (
      <div className="App">
        <nav className='blue-grey lighten-3'>
          <Nav />
        </nav>
        <Switch>
          <Route exact path='/' render={() => {
            return <Home username={this.state.username}
              usernameInput={this.usernameInput}
              usernameAdd={this.usernameAdd} />
          }} />
          <Route path='/shop' render={() => {
            return <Shop username={this.state.username} />
          }} />

        </Switch>
      </div>
    );
  }
}

export default App
