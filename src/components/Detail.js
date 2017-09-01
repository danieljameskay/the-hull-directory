import React from 'react'
import history from '../history.js';

const Detail = (venue) => {
    console.log(venue.detail);
    return(
        <div className='col-xs-12'>
            <h1>{venue.detail.name}</h1>
            <h1>{venue.detail.contact.phone}</h1>
            <h1>{venue.detail.contact.twitter}</h1>
            {venue.detail.location.formattedAddress.map((item) => {
                return <h1>{item}</h1>
                }
            )}
        </div>
    )
}

export default Detail



