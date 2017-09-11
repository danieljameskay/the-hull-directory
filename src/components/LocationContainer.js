import React from 'react';
import LocationItem from './LocationItem';
import Spinner from './Spinner';
import './LocationContainer.css';

const LocationContainer = ({listings}) => {

    // TODO: Set up some logic for a spinner to display whilst the data is being loaded.

    const LocationItems = listings.map((locationItem,i) => {
        return (
            <LocationItem key={i} {...locationItem}/>
        )
    })


    return(
        <div className="col-xs-12" id="location-container">
            {LocationItems}
        </div>
    )

}

export default LocationContainer