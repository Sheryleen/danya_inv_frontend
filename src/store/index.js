import { createStore, combineReducers, applyMiddleware } from "redux";
import productsReducer from "./products/reducers";
import categoryReducer from "./category/reducers";

import thunk from "redux-thunk";
import logger from "redux-logger";

//creat a property of the store state called combining both reducers
const rootReducer = combineReducers({
  products: productsReducer,
  category: categoryReducer,
});

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));
