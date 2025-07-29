import React, { Component } from 'react'
import{Link}from 'react-router-dom'
export default class page1 extends Component {
  render() {
    return (
      <div>
        <h1>India Is My Country</h1>
        <br/><br/>
        <Link to="Page2">Go To Page2</Link>
      </div>
    )
  }
}


