import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Container, Spinner } from 'react-bootstrap';
import { loadSingleUserRequest } from '../../../../redux/users/userThunks';
import {
  getUsersLoadingState,
  getUsersErrorState,
  getUser,
} from '../../../../redux/users/userSelectors';
import { HeroSection } from '../../HeroSection';
import Heading from '../../Heading/Heading';
import SingleUserForm from './SingleUserForm';
import styles from './SingleUser.module.scss';
import { useParams } from 'react-router-dom';

export const SingleUser = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const isLoading = useSelector(getUsersLoadingState);
  const errorMessages = useSelector(getUsersErrorState);

  useEffect(() => {
    dispatch(loadSingleUserRequest(id));
  }, [dispatch, id]);

  const user = useSelector(getUser);

  return (
    <div>
      <HeroSection />
      <div className={styles.heading}>
        <Heading text={user?.surname} />
      </div>
      <Container className={styles.container}>
        {errorMessages && (
          <Alert className="alert" variant="danger">
            <Alert.Heading>Error</Alert.Heading>
            <hr />
            <p>{errorMessages}</p>
          </Alert>
        )}
        {isLoading && !errorMessages && (
          <div className="spinnerBox">
            <Spinner className="spinner" animation="border" variant="primary" />
          </div>
        )}
        {!isLoading && !errorMessages && user && <SingleUserForm data={user} />}
      </Container>
    </div>
  );
};
