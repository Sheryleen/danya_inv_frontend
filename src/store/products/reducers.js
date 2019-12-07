import * as types from "./constants";

const initialState = {
  all: [],
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_PRODUCTS_PENDING:
    case types.ADD_PRODUCT_PENDING:
    case types.REMOVE_PRODUCT_PENDING:
      return state;

    case types.FETCH_ALL_PRODUCTS_FAILED:
    case types.ADD_PRODUCT_FAILED:
    case types.REMOVE_PRODUCT_FAILED:
      return {
        ...state,
        err: action.payload
      };
    case types.FETCH_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case types.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        all: [...state.all, action.payload[0]]
      };
    case types.REMOVE_PRODUCT_SUCCESS:
      return {
        ...state,
        //take array from payload give all then the deleted one
        all: state.all.filter(PRODUCT => PRODUCT.id !== action.payload[0].id)
      };
    case types.UPDATE_PRODUCT_SUCCESS: //once changed look for one came back and change to the one that came back
      return {
        ...state,
        all: state.all.map(product => {
          if (product.id === action.payload[0].id) {
            return action.payload[0];
          } else {
            return product;
          }
        })
      };

    default:
      return state;
  }
};
