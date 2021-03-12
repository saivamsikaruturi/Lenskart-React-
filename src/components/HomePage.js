import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
 

//This component will render the homepage.
function HomePage() {
    return (
        <div>
          
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <img src="lenskart_logo.png" alt="Lenskart" width="90" height="45" />
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/Home">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.lenskart.com/about-us.html">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact Us</a>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="btn btn-light"><Link to="/SignUp" >Register</Link></button>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="#"></a> </li>
                        <li class="nav-item">
                            <button type="button" class="btn btn-light"><Link to="/Admin" >Admin</Link></button>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="#"></a> </li>
                        <li class="nav-item">
                            <button type="button" class="btn btn-light"><Link to="/Login" >Log in</Link></button>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="#"></a> </li>
                        <li class="nav-item">
                            <button type="button" class="btn btn-light" ><Link to="/Home" >Log out</Link></button>
                        </li>

                    </ul>


                </div>
            </nav>
            <br />
           
</div>
      
    )
}

export default HomePage;
