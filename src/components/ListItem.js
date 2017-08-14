import React from 'react';
import './ListItem.css';
import { Link } from 'react-router-dom'

const ListItem = (listItem) => {

    const { venue } = listItem;

    // build up image url....needs some work :)
    const imageUrl = venue.featuredPhotos.items[0].prefix + '400x400' + venue.featuredPhotos.items[0].suffix; 

    return(
        <div className="col-xs-12 col-sm-6 col-md-3">
            <Link to={`/detail/${venue.id}`}>
                {<img className="list-item-image img-thumbnail img-responsive" alt="abc" src={imageUrl}/>}
            </Link>
            <div className="list-item-info">
                <h3 className="name">{venue.name}</h3>
                <h4 className="address">{venue.location.address}</h4>
                <h5 className="category">{venue.categories[0].name}</h5>          
                <h5 className="rating">Rating: {venue.rating}</h5>
            </div>
        </div>
    )
}

export default ListItem
