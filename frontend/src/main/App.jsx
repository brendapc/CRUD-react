import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Logo from '../components/templates/Logo'
import Nav from '../components/templates/Nav'
import Home from '../components/home/Home'
import Footer from '../components/templates/Footer'

export default props => 
    <div className="app">
        <Logo/>
        <Nav />
        <Home />
        <Footer />
    </div>