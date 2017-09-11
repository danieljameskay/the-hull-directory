import React from 'react'

export function formatAddress(address) {
    return(
        <span id='location-address'>
            <span id='location-street-address'>{address[0]}, </span> 
            <span id='location-locality'> {address[1]}, {address[3]}</span>
        </span>
    )
}
