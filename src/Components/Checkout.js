import React from 'react'
import { useStateValue } from '../StateProvider'
import './Checkout.css'
import checkoutad from '../assets/images/checkoutad.jpg'

function Checkout() {
const [{ basket }]= useStateValue();

  return (
    <div className='checkout'>
        <img className='checkout__ad' src={checkoutad} alt="checkout_ad" />
        {basket?.length === 0 ? (
            <div>
                <h2>Your Shopping Basket is empty</h2>
                <p>You have no item in your basket. Please click on "Add to Basket" next to product to add items in the basket</p>
            </div>
        ) : (
            <div>
                <h2>Your Shopping Basket</h2>   
            </div>
        )}
    </div>
  )
}

export default Checkout