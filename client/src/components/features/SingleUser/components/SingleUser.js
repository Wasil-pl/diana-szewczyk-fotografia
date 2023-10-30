import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Container, Spinner } from 'react-bootstrap';
import { loadUserRequest } from '../../../../redux/users/userThunks';
import {
  getUsersLoadingState,
  getUser,
} from '../../../../redux/users/userSelectors';
import { HeroSection } from '../../HeroSection';
import SingleUserForm from './SingleUserForm';
import styles from './SingleUser.module.scss';
import { addCheckboxRequest } from '../../../../redux/pictures/picturesThunks';
import ModalComponent from '../../ModalComponent/ModalComponent';
import { getAddCheckboxStates } from '../../../../redux/pictures/picturesSelectors';
import { useNavigate } from 'react-router-dom';
import { resetPicturesStates } from '../../../../redux/pictures/picturesActions';
import { modalMessages } from '../../../../consts/modalMessages';

export const SingleUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector(getUsersLoadingState);

  useEffect(() => {
    dispatch(loadUserRequest());
  }, [dispatch]);

  const user = useSelector(getUser);
  const addCheckboxStates = useSelector(getAddCheckboxStates);
  const { error, success } = addCheckboxStates;

  const handleSubmit = (data) => {
    dispatch(addCheckboxRequest(data));
  };

  const handleCloseModal = () => {
    navigate('/');
    dispatch(resetPicturesStates());
  };

  return (
    <div className={styles.wrapper}>
      <HeroSection />
      <Container>
        {error && (
          <Alert className="alert" variant="danger">
            <Alert.Heading>Error</Alert.Heading>
            <hr />
            <p>{error}</p>
          </Alert>
        )}
        {isLoading && !error && (
          <div className="spinnerBox">
            <Spinner className="spinner" animation="border" variant="primary" />
          </div>
        )}
        {!isLoading && !error && user && (
          <SingleUserForm action={handleSubmit} user={user} />
        )}
      </Container>

      <ModalComponent
        show={success}
        onClose={handleCloseModal}
        headerText={modalMessages.addCheckboxSuccess.headerText}
        textMessage={modalMessages.addCheckboxSuccess.textMessage}
      />
    </div>
  );
};
