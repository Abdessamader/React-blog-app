import React from 'react'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div className='not-found'>
        <h2>Oops!</h2>
        <h3>That page cannot be found  </h3>
        <Link to='/'>Back to Homepage...</Link>
     </div>
  )
}

export default NotFound