import React, { Component } from 'react';
import '../styles/PlaceOrder.css';

class PlaceOrder extends Component {
  render() {
    return (
      <div role="main">
        <div class="title">
          <h2>Place an Order</h2>
        </div>
        <p>
          Please contact us for pricing information or to place an order!
          <br />
          <br />
          We are looking forward to working with you on your custom cookies.
          <br />
          <br />
          <strong>Email:</strong>{' '}
          <a href="mailto:the.cookie.barne@gmail.com">
            the.cookie.barne@gmail.com
          </a>{' '}
        </p>
        <p>
          <strong>Phone (Call or Text):</strong> 281-210-6269{' '}
        </p>
      </div>
    );
  }
}

export default PlaceOrder;
