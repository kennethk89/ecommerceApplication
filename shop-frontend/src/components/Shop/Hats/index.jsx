import React, { Component } from 'react'

class Hats extends Component {
    render() {
        let allHats = this.props.hats.map((hat, i) => {
            return <div key={i}
                        id={i}>
                <img src={hat.picture} alt="sorry" />
                <h3>{hat.name}</h3>
                <p>${hat.price}</p>
                <button type="button" onClick={() => { this.props.addToCart(hat) }}>Add to Cart</button>
                <hr />
            </div>
        })

        return (
            <div className="Hats">
                <h2>Hats</h2>
                {allHats}
            </div>
        );
    }
}

export default Hats