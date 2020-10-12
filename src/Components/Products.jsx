import React from 'react';
import Paper from '@material-ui/core/Paper';

// products
import { cycle } from '../Products/Bicycles';

const Products = () => {

    return (
        <div className='container'>
            <h1 className='text-center productsHead'>PRODUCTS</h1>
            <div>
                <div className="row">

                    {cycle.map((cycle, indx) => {
                        return (
                            <div className="col-sm-4" key = {indx} id = {cycle.id} ><Paper elevation={3}>
                                <h5 style={{ color: '#E74C3C', padding: '20px', fontWeight: 'bolder' }}>{cycle.name}</h5>
                                <img className='cycleImage' src={cycle.image} alt = 'cycleImage' />
                                <h3 style={{ color: '#333', fontWeight: 'bold', textAlign: 'center' }}>{cycle.model}</h3>
                                <h4 style={{ color: '#333', fontWeight: 'lighter', textAlign: 'center', paddingBottom: '20px' }}>${cycle.price}</h4>
                            </Paper></div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default Products;