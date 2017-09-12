import React from 'react'
import { formatAddress } from '../helpers/LocationHelper'
import './LocationDetail.css';

const LocationDetail = (venue) => {
    console.log(venue)

    let url = null;
    let currency = null;
    let twitter = null;
    let phone = null;

    if(venue.detail.price){
        currency = <span id='location-currency'>{venue.detail.price.currency}</span>;
    }

    if(venue.detail.url){
        url = <span id='location-url'><a href={venue.detail.url}>Website</a></span>;
    }

    if(venue.detail.contact.twitter){
        twitter = <span id='twitter'><i id='twitter-icon' className="fa fa-twitter fa-2x" aria-hidden="true"></i> {venue.detail.contact.twitter}</span>
    }

    if(venue.detail.contact.phone){
        phone = <span id='phone'><i id='phone-icon' className="fa fa-phone fa-2x" aria-hidden="true"></i>{venue.detail.contact.phone}</span>;
    }

    const address = formatAddress(venue.detail.location.formattedAddress);
    return(
        <div className='col-xs-12'>
            <div id='location-detail-header'>
                <div id='address-website'>
                    <h1 key={venue.detail.id} id="location-name">{venue.detail.name}</h1>
                    {address}
                    {url}
                    {currency}
                </div>
                <div id='contact-details'>
                    {twitter}
                    {phone}
                </div>
            </div>
        </div>
    )
}

export default LocationDetail


