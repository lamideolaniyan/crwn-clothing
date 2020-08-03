import React from 'react';
import { connect } from 'react-redux';

import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton to='/checkout'>Go to checkout</CustomButton>
  </div>
);

// Check the root-reducer file to understand the argument destructuring below
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
