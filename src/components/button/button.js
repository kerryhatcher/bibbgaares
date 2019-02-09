import React, { Component } from 'react';
import { withAuthenticator } from 'aws-amplify-react'; 
import './button.css'; // Tell Webpack that Button.js uses these styles

class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return (
        <h1>testings</h1>
    );
  }
}

export default withAuthenticator(Button, true);