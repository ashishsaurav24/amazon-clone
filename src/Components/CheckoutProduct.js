import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from '../StateProvider'

function CheckoutProduct({ id, title, image, rating, price }) {

    const [{ basket }, dispatch] = useStateValue();
    const RemoveFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <span>{price}</span>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={RemoveFromBasket}>Remove From Basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct