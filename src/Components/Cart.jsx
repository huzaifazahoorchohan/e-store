import React, { useContext } from 'react';
import { ProductContext } from '../Context/GlobalContext';
import Button from '@material-ui/core/Button';

const Cart = () => {
    const { cart, RemoveToCart } = useContext(ProductContext);
    const cartTrue = "YOU CHOOSED THESE PRODUCTS";
    const cartFalse = "YOU CHOOSED NOTHING";

    return (
        <div>
            <div className='cartHeader'>
                <h3>{cart.length>0?cartTrue:cartFalse}</h3>
            </div>
            <div className="row">
                <div className="col-md-10 col-11 mx-auto">
                    <div className="row mt-5 gx-3">

                        <div className="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5">

                                {cart.map((cartObj, indx)=>{
                                    return(
                                        <div className="row" key = {indx} style = {{paddingBottom:'20px'}}>

                                    <div className="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center product_img">
                                        <img src={cartObj.image} className="img-fluid" alt={cartObj.name} />
                                    </div>

                                    <div className="col-md-7 col-11 mx-auto px-4 mt-2">
                                        <div className="row">

                                            <div className="col-6 card-title">
                                                <h1 className="mb-4 product_name">{cartObj.name}</h1>
                                                <p className="mb-2">COLOR: BLUE</p>
                                                <p className="mb-3">SIZE: M</p>
                                            </div>

                                            <div className="col-6">
                                                <ul className="pagination justify-content-end set_quantity">
                                                    <li className="page-item">
                                                        <button className="page-link">-</button>
                                                    </li>
                                                    <li className="page-item"><input type="text" name="" className="page-link"/>
                                                    </li>
                                                    <li className="page-item">
                                                        <button className="page-link">+</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-8 d-flex justify-content-between remove_wish">
                                                <Button variant="contained" color="secondary" className='removecartBtn' onClick = {()=>RemoveToCart(indx)} >Remove Item</Button>
                                            </div>
                                            <div className="col-4 d-flex justify-content-end price_money">
                                                <h3>$<span id="itemval">{cartObj.price}</span></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    )
                                })}

                        </div>        

                        {cart.length>0?<div className="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">
                            <div className="right_side p-3 shadow bg-white">
                                <h2 className="product_name mb-5">Total Amount</h2>
                                <div className="price_indiv d-flex justify-content-between">
                                    <p>Product amount</p>
                                    <p>$<span id="product_total_amt">0.00</span></p>
                                </div>
                                <div className="price_indiv d-flex justify-content-between">
                                    <p>Shipping Charge</p>
                                    <p>$<span id="shipping_charge">0.0</span></p>
                                </div>
                                <hr />
                                <div className="total-amt d-flex justify-content-between font-weight-bold">
                                    <p>TOTAL AMOUNT</p>
                                    <p>$<span id="total_cart_amt">0.00</span></p>
                                </div>
                                <button className="btn btn-primary text-uppercase checkoutBtn">Checkout</button>
                            </div>
                        </div>:""}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cart;