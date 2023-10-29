import { httpClient } from '../../api/httpClient';
import { httpClientFormData } from '../../api/httpClientFormData';
import { API_URL } from '../../config';
import {
  addCheckboxError,
  addCheckboxSuccess,
  addPictures,
  addPicturesError,
  addPicturesSuccess,
  endRequest,
  errorRequest,
  loadPictures,
  startRequest,
} from './picturesActions';

export const loadPicturesRequest = () => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      const data = await httpClient.get(`${API_URL}/api/pictures`);
      dispatch(loadPictures(data));
      dispatch(endRequest());
    } catch (error) {
      const action = errorRequest({ message: error.message });
      dispatch(action);
    }
  };
};

export const addPicturesRequest = (data) => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      const response = await httpClientFormData.post(
        `${API_URL}/api/pictures`,
        data,
      );
      dispatch(addPictures(response));
      dispatch(addPicturesSuccess());
    } catch (error) {
      const action = addPicturesError({ message: error.message });
      dispatch(action);
    }
  };
};

export const deletePicturesRequest = (id) => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      await httpClient.delete(`${API_URL}/api/pictures${id}`);
      dispatch(endRequest());
    } catch (error) {
      const action = errorRequest({ message: error.message });
      dispatch(action);
    }
  };
};

export const addCheckboxRequest = (id, data) => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      await httpClient.patch(`${API_URL}/api/pictures${id}`, data);
      dispatch(addCheckboxSuccess());
    } catch (error) {
      const action = addCheckboxError({ message: error.message });
      dispatch(action);
    }
  };
};
