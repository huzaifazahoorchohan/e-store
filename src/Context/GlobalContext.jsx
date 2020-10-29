import React, { createContext, useReducer } from 'react';
import { appReducer } from './Reducer';
export const ProductContext = createContext();

export const ProductContextProvider = ({children}) =>{

    let [state, dispatch] = useReducer(appReducer, [] );

    function AddToCart(shoeObj){
        dispatch(
            {
                type:'ADD_TO_CART',
                payload:shoeObj,
            }
        )
    };

    function RemoveToCart(id){
        dispatch(
            {
                type:'REMOVE_TO_CART',
                payload:id,
            }
        )
    }

    return(
        <ProductContext.Provider value = {{
            AddToCart,
            RemoveToCart,
            cart:state,
        }}>
            {children}
        </ProductContext.Provider>
    )
};