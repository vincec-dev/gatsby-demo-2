import React from 'react'
import { Link } from  'gatsby'

export default () => (
  <header>
    <ul style={{display: 'flex', flexDirection: 'row-reverse', listStyleType: 'none'}}>
      <li style={{padding: '30px'}}><Link to="/">Home</Link></li>
      <li style={{padding: '30px'}}><Link to="/about">About Us</Link></li>
      <li style={{padding: '30px'}}><Link to="/contact">Contact</Link></li>
    </ul>
  </header>
)