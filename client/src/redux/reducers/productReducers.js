import * as actionTypes from '../constants/productConstant.js';
// state => current state, actino->updated state
// passed state empty product array to prevent break of UI 
export const getProductsReducer=(state = {products: []}, action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return { products: action.payload }
        case actionTypes.GET_PRODUCTS_FAIL:
            return { error: action.payload }
        default:
            return state;
    }
}