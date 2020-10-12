import React from 'react';
import { Link } from 'react-router-dom';

// Icons
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = () => {
    return (
        <div className='container-fluid headerMain'>
            <div className = 'container'>
                <div className="row">
                    <div className="col-9">
                        <h1>BICYCLE STORE</h1>
                    </div>
                    <div className="col-3">
                        <Link to = '/cart'><ShoppingCartIcon className = 'cart' style = {{fontSize:'40'}} /></Link>
                    </div>
                </div>
            </div>
        </div>    
    )
};

export default Header;