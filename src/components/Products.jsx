import React from 'react'
import './Products.css';
import { useStateValue } from '../context/StateProvider';

function Products( {id, title, price, rating, image}) {

  const [_, dispatch] = useStateValue();

  function addToCart (){
    // dispatch add to cart action

    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id,
        title,
        price,
        rating,
        image
      }
    })
  }

  return (
    <div className='product'>
      <div className='product_info'>
         <p>{title}</p>
         <p className='product_price'>
            <strong>Rs.</strong>
            <span>{price}</span>
         </p>
         <div className='product_rating'>
            {Array(rating)
            .fill()
            .map(_ => (
                <span>⭐</span>
            ))}
         </div>
      </div>
      <img className= "product_image" src={image} />
      <button onClick={addToCart}>Add to cart</button>
    </div>
  )
}

export default Products
