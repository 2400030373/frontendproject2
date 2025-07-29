import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Page3.css'; // <-- Use this if Page3.css is next to Page3.jsx

export default class Page3 extends Component {
  render() {
    return (
      <div className="content">
        <div className="header">Header</div>
        <div className="body">Body</div>
        <div className="footer">Footer</div>

        <div className="navigation">
          <Link to="/">Go to Home</Link>
          <br />
          <Link to="/Page2">Go to Page 2</Link>
        </div>
      </div>
    );
  }
}
