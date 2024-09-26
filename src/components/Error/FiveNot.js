import React from 'react'
import './FiveNot.css'


export const FiveNot = () => {
  return (
    <div className="container">
        <div className="error-container">
            <span className="error-code">505</span>
            <span className="server-message">Server Error</span>
        </div>
         <h3>Page not found</h3>
         <p>Oops, something went wrong .</p>
        <p> Try to refresh this page or feel free to contact us if the problem persists </p>
        
       </div>
  )
}


export default FiveNot;