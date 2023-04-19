import React from 'react'
import Home from './Components/Home/Home'
import Shop from './Components/Shop/Shop'
import Black from './Components/Black/Black'
import Products from './Components/Products/Products'
import Reviews from './Components/Reviews/Reviews'
import Services from './Components/services/Services'
import Footer from './Components/Footer/Footer'
const Routes = () => {
    return (
        <div>
            <Home />
            <Shop />
            <Black />
            <Products />
            <Reviews />
            <Services/>
            <Footer/>
        </div>
    )
}

export default Routes