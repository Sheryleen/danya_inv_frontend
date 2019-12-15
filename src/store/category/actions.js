//need an action creator for each product

import * as types from "./constants";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchAllCategory = () => async dispatch => {
  dispatch({
    type: types.FETCH_ALL_CATEGORY_PENDING
  });

  try {
    let response = await axios.get(BASE_URL);
    dispatch({
      type: types.FETCH_ALL_CATEGORY_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ALL_CATEGORY_FAILED,
      payload: err
    });
  }
};

export const fetchOneCategory = id => async dispatch => {
  dispatch({
    type: types.FETCH_ONE_CATEGORY_PENDING
  });
  try {
    let response = await axios.get(BASE_URL + `/${id}`);
    dispatch({
      type: types.FETCH_ONE_CATEGORY_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ONE_CATEGORY_FAILED,
      payload: err
    });
  }
};

export const addProduct = newCategory => async dispatch => {
  dispatch({
    type: types.ADD_CATEGORY_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newCategory);
    dispatch({
      type: types.ADD_CATEGORY_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.ADD_CATEGORY_FAILED,
      payload: err
    });
  }
};

export const removeCategory = id => async dispatch => {
  dispatch({
    type: types.REMOVE_CATEGORY_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: types.REMOVE_CATEGORY_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.REMOVE_CATEGORY_FAILED,
      payload: err
    });
  }
};
export const updateCategory = updatedCategory => async dispatch => {
  dispatch({
    type: types.UPDATE_CATEGORY_PENDING
  });
  try {
    let response = await axios.patch(
      BASE_URL + `/${updatedCategory.id}`,
      updatedCategory
    );
    dispatch({
      type: types.UPDATE_CATEGORY_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.UPDATE_CATEGORY_FAILED,
      payload: err
    });
  }
};
