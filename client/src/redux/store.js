import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {thunk} from 'redux-thunk'
import { getProductsReducer } from './reducers/productReducers';

const reducer = combineReducers({
    getProducts: getProductsReducer
})

const middleware=[thunk];
// Reducer is action What we Want
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;