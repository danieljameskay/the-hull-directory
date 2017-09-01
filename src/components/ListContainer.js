import React from 'react';
import ListItem from './ListItem';
import Spinner from './Spinner';
import './ListContainer.css';

const ListContainer = ({listings}) => {

    // TODO: Set up some logic for a spinner to display whilst the data is being loaded.

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