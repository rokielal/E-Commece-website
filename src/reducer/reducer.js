// initial state and reducer function

export const initialState = {
    cart: []
};

function reducer(state, action) {
    
    switch(action.type){
        case 'ADD_TO_CART':
            // logic to add an item to the cart
            return{
                ...state,
                cart: [...state.cart, action.payload]
            }

        case 'REMOVE_FROM_CART':
            //logic to remove an item from the cart

        default:
            return state;
    }
};

export default reducer;