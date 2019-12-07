//need an action creator for each product

import * as types from "./constants";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchAllProducts = () => async dispatch => {
  dispatch({
    type: types.FETCH_ALL_PRODUCTS_PENDING
  });

  try {
    let response = await axios.get(BASE_URL);
    dispatch({
      type: types.FETCH_ALL_PRODUCTS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ALL_PRODUCTS_FAILED,
      payload: err
    });
  }
};

export const fetchOneProduct = id => async dispatch => {
  dispatch({
    type: types.FETCH_ONE_PRODUCT_PENDING
  });
  try {
    let response = await axios.get(BASE_URL + `/${id}`);
    dispatch({
      type: types.FETCH_ONE_PRODUCT_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ONE_PRODUCT_FAILED,
      payload: err
    });
  }
};

export const addProduct = newProduct => async dispatch => {
  dispatch({
    type: types.ADD_PRODUCT_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newProduct);
    dispatch({
      type: types.ADD_PRODUCT_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.ADD_PRODUCT_FAILED,
      payload: err
    });
  }
};

export const removeProduct = id => async dispatch => {
  dispatch({
    type: types.REMOVE_PRODUCT_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: types.REMOVE_PRODUCT_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.REMOVE_PRODUCT_FAILED,
      payload: err
    });
  }
};
export const updateProduct = updatedProduct => async dispatch => {
  dispatch({
    type: types.UPDATE_PRODUCT_PENDING
  });
  try {
    let response = await axios.patch(
      BASE_URL + `/${updatedProduct.id}`,
      updatedProduct
    );
    dispatch({
      type: types.UPDATE_PRODUCT_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.UPDATE_PRODUCT_FAILED,
      payload: err
    });
  }
};
