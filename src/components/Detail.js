import React from 'react'
import history from '../history.js';

const Detail = (venue) => {

    return(
        <div className='col-xs-12'>
            <h1>{venue.detail.name}</h1>
        </div>
    )
}

export default Detail