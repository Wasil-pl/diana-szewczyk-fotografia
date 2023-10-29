const initialState = {
  users: {
    loading: false,
    error: null,
    isLogged: false,
    loginSuccess: false,
    registerSuccess: false,
    registerError: null,
    user: null,
    list: [],
    userRole: null,
  },
  pictures: {
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
};

export default initialState;
