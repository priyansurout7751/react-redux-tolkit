import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Cart() {
    const cartItems = useSelector((state) => state.cart.item);
   


  return (
    <div>
        <header>
              <div className="cart-icon">
            <Link to="/cartlist" >          🛒
          <span className="cart-count"><sup>{cartItems.length?cartItems.length:null}</sup></span></Link>
        </div>
      </header>
    </div>
  )
}

export default Cart