import React, { Component } from 'react'
import axios from 'axios';

import PizzaCard from '../components/PizzaCard';

export default class OrderPage extends Component {
    
    constructor() {
        super();
        this.cartProducts = localStorage.getItem('myCart') === null ? [] : JSON.parse(localStorage.getItem('myCart'));
        this.state = {
            pizzaCards: null
        }
    }
    onProductAdd = (pizza) => {
        this.cartProducts.push({...pizza, foodType: 'pizza'});
        localStorage.setItem('myCart', JSON.stringify(this.cartProducts));
        alert(`The pizza "${pizza.name}" was added to your cart.` );
    } 
    componentDidMount() {
        this.cartProducts = localStorage.getItem('myCart') === null ? [] : JSON.parse(localStorage.getItem('myCart'));
        axios.get('http://localhost:5000/pizza').then(res => {
            const pizzaCards = res.data.map((pizza, index) => {
                return (
                    <div key={index} className="col-md-6 pad-20">
                        <PizzaCard pizza={pizza} onClickEvent={this.onProductAdd} />
                    </div>
                )
            });
            this.setState({pizzaCards});
        }).catch(err => {
            console.log('err'+err)
        })
    }

    render() {
        return (
            <div className="row equal">
                {this.state.pizzaCards}
            </div>
        )
    }
}

