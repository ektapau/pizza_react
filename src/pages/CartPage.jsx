import React, { Component } from 'react'

export default class CartPage extends Component {
    constructor() {
        super();
        this.state = {
            cartItemComponents: null,
            totalCartPrice: 0,

        }
    }
    componentDidMount() {
        if (localStorage.getItem('myCart') === null || JSON.parse(localStorage.getItem('myCart')).length === 0) {
            this.setState({ cartItemComponents: <h1 className="text-cener">No items found  </h1>, totalCartPrice: 0 });
        } else {
            let totalCartPrice = 0;
            const cartItemComponents = JSON.parse(localStorage.getItem('myCart')).map((item, key) => {
                totalCartPrice += item.price;
                return (
                    <div key={key} className="col-md-12">
                        <div className="row">
                            <div className="col-4">
                                <img src={item.image} alt="" width="100%" />
                            </div>
                            <div className="col-8">
                                <h4>{item.foodType === 'pizza' ? item.name : item.tname}</h4>
                                <p>{item.description}</p>
                                <h5>₹ {item.price}</h5>
                                <button type="button" className="btn btn-outline-danger" onClick={(e) => this.removeFromCart(item)}> 🗑 Remove </button>
                                
                            </div>
                        </div>
                        <hr />
                    </div>
                )
            })
            this.setState({ cartItemComponents, totalCartPrice });
        }
    }

    removeFromCart = (item) => {
        let cartProducts = localStorage.getItem('myCart') === null ? [] : JSON.parse(localStorage.getItem('myCart'));
        cartProducts = cartProducts.filter(el => !(el.foodType === item.foodType && el.id === item.id));
        localStorage.setItem('myCart', JSON.stringify(cartProducts));
        this.componentDidMount();
    }

    render() {
        
        return (
            <div className="row">
                
                <div className="col-md-6 offset-md-3">
                    <div className="row">
                        {this.state.cartItemComponents}
                    </div>
                </div>
                <div className="col-md-12">
                    {this.state.totalCartPrice !== 0 ? <h3 className="text-center text-warning">Total Price is ₹{this.state.totalCartPrice} </h3> : ''}
                </div>
                <div className="col-md-4 offset-md-4 text-center">
                    
                    <button className={this.state.totalCartPrice !== 0 ? 'btn btn-outline-primary btn-block' : 'btn btn-outline-primary btn-block disabled '}> Place Order  ₹{this.state.totalCartPrice} </button>
                </div>
            </div>
        )
    }
}
