import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class BuidPizzaPage extends Component {
    constructor() {
        super();
        this.cartProducts = localStorage.getItem('myCart') === null ? [] : JSON.parse(localStorage.getItem('myCart'))
        this.selectedIngredients = [];
        this.state = {
            ingredientsTableRow: null, 
            total: 0,
            redirect: null,
        }
    }
    componentDidMount() {
        this.cartProducts = localStorage.getItem('myCart') === null ? [] : JSON.parse(localStorage.getItem('myCart'))
        axios.get('http://localhost:5000/ingredient/')
            .then(res => {
                const ingredientsTableRow = res.data.map((ingredient, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                <img width="100px" height="100px" src={ingredient.image} alt="" />
                            </td>
                            <td>{ingredient.tname} <span className="text-success"> <b>{' ₹' + ingredient.price}</b></span></td>
                            <td><input className="form-check-input" type="checkbox" onClick={(e) => this.onProductSelect(ingredient)}  /></td>
                        </tr>
                    )
                });
                this.setState({ ingredientsTableRow});
            })
            .catch(er => console.log(er));
    }

    onProductSelect = (product) =>{
        if (this.selectedIngredients.includes(product)) {
            this.setState({total: this.state.total-product.price});
            this.selectedIngredients = this.selectedIngredients.filter(el => el.id !== product.id);
        } else {
            this.selectedIngredients.push(product);
            this.setState({ total: this.state.total + product.price });
        }
    }
    onAddToCart = (e) => {
        this.selectedIngredients.forEach((product, index) => {
            this.cartProducts.push({ ...product, foodType: 'ingredient', description: ''})
        });
        localStorage.setItem('myCart', JSON.stringify(this.cartProducts));
        this.setState({redirect: '/cart'});
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="row">
                <div className="col-md-12">
                    <h3 className="text-center" >Customize your pizza</h3>
                </div>
                <div className="col-md-8 offset-md-2 card">
                    <table className="table table-striped table-bordered">
                        <tbody>
                            {this.state.ingredientsTableRow}
                        </tbody>
                    </table>
                    <br />
                    <h4 className="text-center"> Total Cost ₹{this.state.total} </h4>
                    <button className={this.state.total === 0 ? 'btn btn-outline-warning disabled' : 'btn btn-outline-warning'} onClick={this.onAddToCart}>Build Your Pizza 🍕 </button>
                </div>
            </div>
        )
    }
}
