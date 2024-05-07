import React from 'react'
import './PlaceOrder.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {

  const{getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>


      <div className="place-order-right">
      <div className="cart-total">
            <h2>Cart Total</h2>
            
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>Rs {getTotalCartAmount()}</p>
              </div>
              <hr/>
              <div className="cart-total-details">
              <p>Delivery Fee</p>
                <p>Rs {getTotalCartAmount()===0?0:49}</p>
              </div>
              <hr/>
              <div className="cart-total-details">
                <b>Total</b>
                <b>Rs {getTotalCartAmount()===0?0:getTotalCartAmount()+49}</b>
              </div>
            </div>

            <button >PROCEES TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder