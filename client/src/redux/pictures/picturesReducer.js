import {
  ADD_CHECKBOX_ERROR,
  ADD_CHECKBOX_SUCCESS,
  START_REQUEST,
  END_REQUEST,
  ERROR_REQUEST,
  LOAD_PICTURES,
  ADD_PICTURES,
  ADD_PICTURES_SUCCESS,
  ADD_PICTURES_ERROR,
  DELETE_PICTURES,
  ADD_CHECKBOX,
  RESET_PICTURES_STATES,
} from './picturesActionTypes';

export const picturesReducer = (
  statePart = {
    success: false,
    loading: false,
    error: null,
    all: [],
    images: {
      success: false,
      error: null,
    },
    checkbox: {
      success: false,
      error: null,
    },
  },
  action,
) => {
  switch (action.type) {
    case START_REQUEST:
      return {
        ...statePart,
        loading: true,
        error: null,
      };
    case END_REQUEST:
      return {
        ...statePart,
        loading: false,
        error: null,
      };
    case ERROR_REQUEST:
      return {
        ...statePart,
        loading: false,
        error: action.payload.message,
      };
    case LOAD_PICTURES:
      return {
        ...statePart,
        all: [...action.payload],
      };
    case ADD_PICTURES:
      return {
        ...statePart,
        all: [...statePart.all, action.payload],
      };
    case ADD_CHECKBOX:
      return {
        ...statePart,
        all: [...statePart.all, action.payload],
      };
    case DELETE_PICTURES:
      return {
        ...statePart,
        all: [...statePart.all.filter((item) => item._id !== action.payload)],
      };
    case ADD_PICTURES_SUCCESS:
      return {
        ...statePart,
        loading: false,
        error: null,
        images: {
          success: true,
          error: null,
        },
      };
    case ADD_PICTURES_ERROR:
      return {
        ...statePart,
        loading: false,
        error: null,
        images: {
          success: false,
          error: action.payload.message,
        },
      };
    case ADD_CHECKBOX_SUCCESS:
      return {
        ...statePart,
        loading: false,
        error: null,
        checkbox: {
          success: true,
          error: null,
        },
      };
    case ADD_CHECKBOX_ERROR:
      return {
        ...statePart,
        loading: false,
        error: null,
        checkbox: {
          success: false,
          error: action.payload.message,
        },
      };
    case RESET_PICTURES_STATES:
      return {
        ...statePart,
        loading: false,
        error: null,
        images: {
          success: false,
          error: null,
        },
        checkbox: {
          success: false,
          error: null,
        },
      };

    default:
      return statePart;
  }
};
