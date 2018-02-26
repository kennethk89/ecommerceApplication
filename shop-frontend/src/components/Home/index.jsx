import React, { Component } from 'react'
import './home.css'

class Home extends Component {
    constructor() {
        super()

        this.state = {
            name: ''
        }
    }
    render() {
        return (
            <div className="homepage">
                <div className="Home">
                    <h2>Home page baby</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        this.props.usernameAdd(e)
                    }}>
                        <div class="input-field col s6">
                            <input type="text" id="nameInput" class="validate" placeholder="Shortie" onChange={this.props.usernameInput} />
                            <label class="active" for="nameInput">May I have the honuor of knowing your name please? *flutter blinks*</label>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Home
