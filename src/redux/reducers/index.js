import {combineReducers} from "redux";
import {productReducer, selectedProductReducer} from "./product";

const reducers = combineReducers({
    allProduct: productReducer,
    product: selectedProductReducer
})

export default reducers