import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';

const Header = () => {
    return(
        <Link to={'/'}>
            <div className="col-xs-12" id="header">
                <h1 id="header-text" className="text-center">The Hull Directory</h1>
            </div>
        </Link>
    )
}

export default Header