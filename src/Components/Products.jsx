import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { ProductContext } from '../Context/GlobalContext';
import { Shoes } from '../Stock/Shoes';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    myCard: {

    },
    cardImg: {
        width: '100%',
    },
}));

const Products = () => {

    const { AddToCart, cart } = useContext(ProductContext)

    const classes = useStyles();

    let addcartHandle = (shoeObj) =>{
        AddToCart(shoeObj)
        
    }

    const CheckProductIsInCart = (id) => {
        if (cart.filter(x => x.id === id).length > 0)
            return true;
        else
            return false;
    }

    return (
        <div>
            <div className='productHeader'>
                <h3>CHOOSE YOUR FAVORITE SHOES</h3>
            </div>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    {Shoes.map((shoeObj, indx) => {
                        return (
                            <Grid item xs={12} sm={3} key = {indx}>
                                <div className={classes.myCard}>
                                    <img src={shoeObj.image} alt="#" className={classes.cardImg} />
                                    {CheckProductIsInCart(shoeObj.id)?<Button disabled className='addcartBtn' onClick = {()=>addcartHandle(shoeObj)}>ADDED</Button>:<Button variant="contained" className='addcartBtn' onClick = {()=>addcartHandle(shoeObj)}>ADD TO CART</Button> }
                                </div>
                            </Grid>
                        )
            })}
            </Grid>
            </div>
        </div>
    )
};

export default Products;