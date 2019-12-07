import { createStore, combineReducers, applyMiddleware } from "redux";
import productsReducer from "./products/reducers";

import thunk from "redux-thunk";
import logger from "redux-logger";

//creat a property of the store state called combining both reducers
const rootReducer = combineReducers({
  products: productsReducer
});

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));
