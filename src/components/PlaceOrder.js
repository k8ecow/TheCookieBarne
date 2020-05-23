import React, { Component } from 'react';

class PlaceOrder extends Component {
  render() {
    return (
      <div role="main">
        <h2>Place an Order</h2>
        <p>
          Email:{' '}
          <a href="mailto:the.cookie.barne@gmail.com">
            the.cookie.barne@gmail.com
          </a>{' '}
        </p>
        <p>Phone: 281-210-6269 </p>
      </div>
    );
  }
}

export default PlaceOrder;
