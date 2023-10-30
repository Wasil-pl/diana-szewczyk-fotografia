import {
  START_REQUEST,
  ERROR_REQUEST,
  END_REQUEST,
  LOAD_PICTURES,
  ADD_PICTURES_SUCCESS,
  ADD_PICTURES_ERROR,
  RESET_PICTURES_STATES,
  ADD_CHECKBOX,
  ADD_CHECKBOX_SUCCESS,
  ADD_CHECKBOX_ERROR,
} from './picturesActionTypes';

export const startRequest = (payload) => ({ payload, type: START_REQUEST });
export const errorRequest = (payload) => ({ payload, type: ERROR_REQUEST });
export const endRequest = (payload) => ({ payload, type: END_REQUEST });
export const loadPictures = (payload) => ({ payload, type: LOAD_PICTURES });
export const addCheckbox = (payload) => ({ payload, type: ADD_CHECKBOX });

export const addPicturesSuccess = (payload) => ({
  payload,
  type: ADD_PICTURES_SUCCESS,
});
export const addPicturesError = (payload) => ({
  payload,
  type: ADD_PICTURES_ERROR,
});
export const resetPicturesStates = () => ({
  type: RESET_PICTURES_STATES,
});
export const addCheckboxSuccess = (payload) => ({
  payload,
  type: ADD_CHECKBOX_SUCCESS,
});
export const addCheckboxError = (payload) => ({
  payload,
  type: ADD_CHECKBOX_ERROR,
});
