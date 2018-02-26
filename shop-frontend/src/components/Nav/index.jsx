import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

class Nav extends Component {
    render() {
        return (

            <div>
                < ul id="dropdown1" className="dropdown-content" >
                    <li><Link to='/shop/jeans'>Jeans</Link></li>
                    <li><Link to='/shop/shoes'>Shoes</Link></li>
                    <li><Link to='/shop/hats'>Hats</Link></li>
                </ul >
                <nav>
                    <div className="nav-wrapper">
                        <Link to='/' className="brand-logo center">Stylo Milo Apollo</Link>
                        <ul className="left hide-on-med-and-down">
                            <li><Link to='/shop' className="dropdown-button" data-activates="dropdown1">Shop<i className="material-icons right">arrow_drop_down</i></Link></li>
                        </ul>
                        <Link to='/shop/cart'><i className="material-icons right">shopping_cart</i></Link>
                    </div>
                </nav>

            </div>
        );
    }
}

export default Nav


