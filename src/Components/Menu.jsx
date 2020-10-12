import React from 'react';
import { Link } from 'react-router-dom';
const Menu = () => {
    return(
        <div className = 'container-fluid'>
            <div className = 'menuBar'>
                <Link to = '' className = 'menuItem'>ABOUT</Link>
                <Link to = '/products' className = 'menuItem'>PRODUCTS</Link>
                <Link to = '' className = 'menuItem'>SERVICE</Link>
                <Link to = '' className = 'menuItem'>CONTACT</Link>
            </div>
        </div>
    )
};

export default Menu;