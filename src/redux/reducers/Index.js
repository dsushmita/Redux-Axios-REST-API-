//we are going having multiple reduce 
//here we are going to combine

import {combineReducer} from 'redux';
import {productReducer} from './productReducer';


const reducers = combineReucers({
    allProducts:productReducer,

});