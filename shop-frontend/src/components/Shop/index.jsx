import React, { Component } from 'react'
import { Switch, Link, Route } from 'react-router-dom'
import Hats from './Hats'
import Shoes from './Shoes'
import Cart from './Cart'
import Jeans from './Jeans'
import axios from 'axios'

class Shop extends Component {
    constructor() {
        super()

        this.state = {
            shoes: [
                {
                    name: 'Boots With the Fur',
                    price: 2534,
                    picture: '/images/shoes/bootsfur.jpg',
                    type: 'Shoe'
                }, {
                    name: 'Simply the Best',
                    price: 1582,
                    picture: '/images/shoes/nicestshoe.jpg',
                    type: 'Shoe'
                }, {
                    name: 'Function() Over Fashion',
                    price: 1,
                    picture: '/images/shoes/functional.jpg',
                    type: 'Shoe'
                }, {
                    name: 'Drop Dead Gorgeous',
                    price: 9635,
                    picture: '/images/shoes/fashion.jpg',
                    type: 'Shoe'
                }
            ],
            hats: [
                {
                    name: 'Mr Hats',
                    price: 583,
                    picture: '/images/hats/mrhat.jpg',
                    type: 'Hat'
                }, {
                    name: 'Scumbag Steve Hat',
                    price: 123,
                    picture: '/images/hats/sshat.jpg',
                    type: 'Hat'
                }, {
                    name: 'Brunch Hat',
                    price: 1,
                    picture: '/images/hats/brunch.jpg',
                    type: 'Hat'
                }, {
                    name: 'The Essential Hat',
                    price: 50.99,
                    picture: '/images/hats/essential.jpg',
                    type: 'Hat'
                }
            ],
            jeans: [
                {
                    name: 'Apple Bottom Jeans',
                    price: 1099,
                    picture: '/images/shoes/applebottom.jpg',
                    type: 'Shoe'
                }
            ],
            cart: []
        }
    }

    addToCart = (item) => {
        this.setState({
            cart: this.state.cart.concat(item)
        })
    }

    componentDidMount() {
        axios.get('http://localhost:8080/cart')
            .then((response) => {
                this.setState({
                    cart: response.data.cart
                })
            })
    }

    componentDidUpdate() {
        axios.post('http://localhost:8080/cart', {
            cart: this.state.cart
        })
            .then((response) => { })
    }

    deleteItem = (i) => {
        let newCart = [...this.state.cart]
        newCart.splice(i, 1)

        this.setState({
            cart: newCart
        })
    }

    render() {
        return (
            <div className="Shop">
                <h2>Shop page</h2>
                <p>HI {this.props.username}! Spend them dolla dolla bills!!!</p>

                <Switch>
                    <Route path='/shop/hats' render={() => {
                        return <Hats hats={this.state.hats}
                            cart={this.state.cart}
                            addToCart={this.addToCart}
                        />
                    }} />

                    <Route path='/shop/shoes' render={() => {
                        return <Shoes shoes={this.state.shoes}
                            cart={this.state.cart}
                            addToCart={this.addToCart}
                        />
                    }} />

                    <Route path='/shop/jeans' render={() => {
                        return <Jeans jeans={this.state.jeans}
                            cart={this.state.cart}
                            addToCart={this.addToCart}
                        />
                    }} />

                    <Route path='/shop/cart' render={() => {
                        return <Cart cart={this.state.cart}
                            deleteItem={this.deleteItem}
                        />
                    }} />
                </Switch>

            </div>
        );
    }
}

export default Shop
