import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {thunk} from 'redux-thunk'
import { getProductsReducer, getProductDetailsReducer } from './reducers/productReducers';

const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer
})

const middleware=[thunk];
// Reducer is action What we Want
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;