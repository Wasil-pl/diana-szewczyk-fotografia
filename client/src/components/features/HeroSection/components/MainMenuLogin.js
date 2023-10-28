import React from 'react';
import { useDispatch } from 'react-redux';
import MainMenuLoginForm from './MainMenuLoginForm';
import { loginUserRequest } from '../../../../redux/users/userThunks';

const MainMenuLogin = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    console.log('data:', data);
    dispatch(loginUserRequest(data));
  };

  return (
    <div>
      <MainMenuLoginForm action={handleSubmit} />
    </div>
  );
};

export default MainMenuLogin;
