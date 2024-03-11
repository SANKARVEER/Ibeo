

import React from 'react';
import './index.css'
// import { useNavigate } from "react-router-dom";



function Navbar() {
  // const navigation = useNavigate();

  return (


    <div className=''>
      <nav class="navbar navbar-expand-md navbar-dark">
        <div class="container">

            <a class="" href="#">
                <img src={require('../../../images/ibea logo1.jpg')} alt='' className='rounded-logo'/>
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Products & Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About US</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact Us</a>
                    </li>
                </ul>

                <button class="btn btn-login ml-md-4">
                    <i class="fas fa-user"></i> Login
                </button>
            </div>
        </div>
    </nav>
    </div>

  );
}

export { Navbar } 
