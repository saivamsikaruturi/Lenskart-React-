import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-warning bg-dark">
                    {/* <div>
                            <h2 className = "navbar-brand">Lenksart Management App</h2>
                        </div> */}
                        <div>
                            
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <Link to="#" className="navbar-brand text-white m-3">Lenskart</Link>
                                    </li>
                                    <li className="nav-item active">
                                        <Link to="/category" className="nav-link text-white" href="#">Category </Link>
                                        {/* <span className="sr-only">(current)</span> */}
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/products" className="nav-link text-white">Product</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent;
