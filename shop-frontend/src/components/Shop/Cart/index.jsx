import React, { Component } from 'react'

class Cart extends Component {

    render() {

        let totalPrice = this.props.cart.reduce((acc, sum) => {
            return acc + sum.price
        }, 0)

        let cartTable = this.props.cart.map((item, i) => {
            return <tr key={i}
                id={i}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.type}</td>
                <td><button type='button' onClick={this.props.deleteItem}>Delete</button></td>
            </tr>
        })

        return (
            <div className="Cart">
                <h2>Shopping Cart</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartTable}
                    </tbody>
                </table>
                <br />
                Total price: ${totalPrice} CAD
            </div>
        )
    }
}

export default Cart
