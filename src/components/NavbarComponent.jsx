import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class NavbarComponent extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>
                        Pizzeria &nbsp;
                        <img src="PizzeriaLogo.png" alt="" width="30" height="30" className="d-inline-block align-text-top" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to='/'> Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to='/order'> Order Pizza </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to='/build'> Build Ur Pizza</Link>
                            </li>
                        </ul>
                    </div>
                    <Link className="btn btn-warning" to="/cart" > 🛒 Shoping Cart</Link>
                </div>
            </nav>
        )
    }
}
