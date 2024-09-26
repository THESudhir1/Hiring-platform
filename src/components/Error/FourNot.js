import React from 'react'
import './FourNot.css'
// import { connect } from 'react-redux'

export const FourNot = () => {
  return (
    <div className="container">
        <h1>Uh-Oh...</h1>
        <h3>Sorry ! The Page not found</h3>
        <p>Sorry ! The page is Not Found The link You Followed is Probably Broken</p>
        <div className="error-code">404</div>
        <a href="#" className="home-button">Return to Home</a>
    </div>
  )
}

export default FourNot;

{/* const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FourNot) */}