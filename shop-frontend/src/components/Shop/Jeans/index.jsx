import React, { Component } from 'react'

class Jeans extends Component {
    render() {
        let allJeans = this.props.jeans.map((jean, i) => {
            return <div key={i}
                        id={i}>
                <img src={jean.picture} alt="sorry" />
                <h3>{jean.name}</h3>
                <p>${jean.price}</p>
                <button type="button" onClick={() => { this.props.addToCart(jean) }}>Add to Cart</button>
                <hr />
            </div>
        })

        return (
            <div className="Jeans">
                <h2>Jeans</h2>
                {allJeans}
            </div>
        );
    }
}

export default Jeans
