import React from 'react';
import ListItem from './ListItem';
import './ListContainer.css';

const ListContainer = ({listings}) => {

    console.log(listings);

    // TODO: Set up some logic for a spinner to display whilst the data is being loaded.
    if(listings){
        
    }

    const listItems = listings.map((listItem,i) => {
        return (
            <ListItem key={i} {...listItem}/>
        )
    })


    return(
        <div className="col-xs-12" id="list-container">
            {listItems}
        </div>
    )

}

export default ListContainer