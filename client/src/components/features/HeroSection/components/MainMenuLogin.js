import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainMenuLoginForm from './MainMenuLoginForm';
import { loginUserRequest } from '../../../../redux/users/userThunks';
import {
  getUsersErrorState,
  getUsersLoadingState,
} from '../../../../redux/users/userSelectors';
import { Alert, Spinner } from 'react-bootstrap';

const MainMenuLogin = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    dispatch(loginUserRequest(data));
  };

  const isLoading = useSelector(getUsersLoadingState);
  const errorMessages = useSelector(getUsersErrorState);

  return (
    <div>
      {errorMessages && (
        <Alert variant="danger" style={{ maxWidth: '200px' }}>
          <Alert.Heading>Error</Alert.Heading>
          <hr />
          <p>{errorMessages}</p>
        </Alert>
      )}

      {isLoading && !errorMessages && (
        <div style={{ maxWidth: '200px' }}>
          <Spinner className="spinner" animation="border" variant="primary" />
        </div>
      )}
      <MainMenuLoginForm action={handleSubmit} />
    </div>
  );
};

export default MainMenuLogin;
