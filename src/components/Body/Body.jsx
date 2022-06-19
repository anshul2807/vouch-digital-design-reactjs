import React from 'react'
import './Body.css';
import BodyLeft from './BodyLeft'
import BodyRight from './BodyRight';
function Body() {
  return (
    <div className='body'>
        <div className="body__left">
            <BodyLeft />
        </div>
        <div className="body__right">
            <BodyRight />
        </div>
    </div>
  )
}

export default Body