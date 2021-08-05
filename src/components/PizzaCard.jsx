import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PizzaCard extends Component {
    render() {
        return (
            <div className="card card-ext">
                <div className="row ">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-8"><h4 className="text-warning">{this.props.pizza.name} </h4></div>
                            
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-7">
                                        <h5 className="text-success">₹ {this.props.pizza.price}</h5>
                                    </div>
                                    <div className="col-1">
                                        <div className={this.props.pizza.type === 'veg' ? 'box-green' : 'box-red'}></div> 
                                    </div>
                                    <div className="col-4">
                                        {this.props.pizza.type.toUpperCase()}
                                    </div>
                                </div>
                                

                                <p>{this.props.pizza.description} </p>
                                <p><b>Ingredients : </b> {this.props.pizza.ingredients.join(', ')} </p>
                                <p><b>Toppings : </b> {this.props.pizza.topping.join(', ')} </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 justify-content-center align-self-center">
                        <img src={this.props.pizza.image} width="100%" alt="" /><br />
                        <div className=" d-grid gap-2 d-md-flex justify-content-md-center">
                            <button className="btn btn-warning" onClick={(e) => { this.props.onClickEvent(this.props.pizza) }}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

PizzaCard.propTypes = {
    pizza: PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['veg', 'nonveg']).isRequired,
        price: PropTypes.number.isRequired,
        ingredients: PropTypes.array.isRequired,
        topping: PropTypes.array.isRequired,
        image: PropTypes.string.isRequired
    }).isRequired
}

PizzaCard.defaultProps = {
    pizza: {
        name: '',
        type: '',
        price: 0,
        ingredients: [],
        topping: [],
        image: ''
    }
}

