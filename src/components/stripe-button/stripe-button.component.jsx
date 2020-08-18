import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HHOxSBcw3j9RLWSNUyUNmLHRHrGEM2RH8I2C56JlBKbyi99RkAf40nUJBc0EFXXb5ml7Y1cMaLrkTnEG58HUSAf00SA9jwlYv';
  const onToken = token => {
    console.log(token);
    alert('Payment successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='crwn Clothing Ltd'
      billingAddress
      shippingAddress
      image=''
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
