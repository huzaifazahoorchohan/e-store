export const appReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return[action.payload, ...state]
        case 'REMOVE_TO_CART':
            return state.filter((item, index) => index !== action.payload);
        default:
            return state
    }
};