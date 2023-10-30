import React, { useEffect } from 'react';
import { HeroSection } from '../../HeroSection';

import { Alert, Container, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadSingleUserRequest } from '../../../../redux/users/userThunks';
import {
  getUser,
  getUsersErrorState,
  getUsersLoadingState,
} from '../../../../redux/users/userSelectors';
import SelectedPicturesForm from './SelectedPicturesForm';

export const SelectedPictures = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSingleUserRequest(id));
  }, [dispatch, id]);

  const user = useSelector(getUser);

  const isLoading = useSelector(getUsersLoadingState);
  const error = useSelector(getUsersErrorState);

  return (
    <div>
      <HeroSection />
      <Container>
        {isLoading && !error && (
          <div className="spinnerBox">
            <Spinner className="spinner" animation="border" variant="primary" />
          </div>
        )}
        {error && (
          <Alert className="alert" variant="danger">
            <Alert.Heading>Error</Alert.Heading>
            <hr />
            <p>{error}</p>
          </Alert>
        )}

        {!isLoading && !error && user && <SelectedPicturesForm user={user} />}
      </Container>
    </div>
  );
};
