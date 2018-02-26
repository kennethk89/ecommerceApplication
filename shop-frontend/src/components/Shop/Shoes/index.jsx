import React, { Component } from 'react'

class Shoes extends Component {
    render() {
        let allShoes = this.props.shoes.map((shoe, i) => {
            return <div key={i}
                        id={i}>
                <img src={shoe.picture} alt="sorry" />
                <h3>{shoe.name}</h3>
                <p>${shoe.price}</p>
                <button type="button" onClick={() => { this.props.addToCart(shoe) }}>Add to Cart</button>
                <hr />
            </div>
        })

        return (
            <div className="Shoes">
                <h2>Shoes</h2>
                {allShoes}
            </div>
        )
    }
}

export default Shoes
