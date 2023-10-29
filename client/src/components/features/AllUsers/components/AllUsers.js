import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Container, Spinner } from 'react-bootstrap';
import { loadUsersRequest } from '../../../../redux/users/userThunks';
import {
  getUsersLoadingState,
  getUsersErrorState,
  getAllUsers,
} from '../../../../redux/users/userSelectors';
import { HeroSection } from '../../HeroSection';
import Heading from '../../Heading/Heading';
import AllUsersForm from './AllUsersForm';
import styles from './AllUsers.module.scss';

export const AllUsers = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getUsersLoadingState);
  const errorMessages = useSelector(getUsersErrorState);

  useEffect(() => {
    dispatch(loadUsersRequest());
  }, [dispatch]);

  const users = useSelector(getAllUsers);

  return (
    <div>
      <HeroSection />
      <div className={styles.heading}>
        <Heading text="Wszyscy Użytkownicy" />
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
        {!isLoading && !errorMessages && users && <AllUsersForm data={users} />}
      </Container>
    </div>
  );
};
