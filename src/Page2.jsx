import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Page3.css'; // Adjust path as needed

class Page3 extends Component {
  render() {
    return (
      <div className="main3">
        <h1>Welcome to Page 3</h1>
        <div className="navigation">
          <Link to="/Page2">Go to Page 2</Link>
          <br />
          <Link to="/">Go to Home Page</Link>
        </div>
      </div>
    );
  }
}

export default Page3;
