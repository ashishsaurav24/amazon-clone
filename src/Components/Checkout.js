import React from 'react'
import { useStateValue } from '../StateProvider'
import './Checkout.css'
import checkoutad from '../assets/images/checkoutad.jpg'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
const [{ basket }]= useStateValue();

  return (
    <div className='checkout'>
        <div className="checkout__left">
        <img className='checkout__ad' src={checkoutad} alt="checkout_ad" />
        {basket?.length === 0 ? (
            <div>
                <h2>Your Shopping Basket is empty</h2>
                <p>You have no item in your basket. Please click on "Add to Basket" next to product to add items in the basket</p>
            </div>
        ) : (
            <div>
                <h2 className='checkout__title'>Your Shopping Basket</h2>  
                {basket?.map(item=>(
                    <CheckoutProduct 
                    id = {item.id}
                    title = {item.title}
                    image = {item.image}
                    price = {item.price}
                    rating = {item.rating}
                    />
                ))}
            </div>
        )}
        </div>
        {basket.length>0 && (
            <div className="checkout__right">
                <h1>Subtotal</h1>
            </div>
        )}
    </div>
  )
}

export default Checkout