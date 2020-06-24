import {GET_PRODUCTS_SUCCESS} from "../Actions/productsAction";

const initialState = {
  products:{},
};

const productsReducer = (state = initialState,action) => {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS:
            return{...state, products: action.products};
        default:
            return state;
    }
};

export default productsReducer;