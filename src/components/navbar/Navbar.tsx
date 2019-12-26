import * as React from 'react'
import { Link } from 'react-router-dom'

const navbar_container: React.CSSProperties = {
  backgroundColor: 'darkblue',
  height: '50px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  // width: '50rem',
  // margin: 'auto'
}

const link_item: React.CSSProperties = {
  color: 'white',
  fontSize: '20px',
  textDecoration: 'none'
}

function Navbar() {
  return (
    <div style={navbar_container}>
      <Link style={link_item} to="/">
        Block
      </Link>
      <Link style={link_item} to="/products">
        Products
      </Link>
      <Link style={link_item} to="/data">
        Data
      </Link>
      <Link style={link_item} to="/explorer">
        Explorer
      </Link>
    </div>
  )
}

export default Navbar