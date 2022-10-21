import {productReducer} from "./product";
import {combineReducers} from "redux";

const reducers = combineReducers({
    allProduct: productReducer
})