import React from 'react';
import { HeroSection } from '../../HeroSection';
import { useDispatch, useSelector } from 'react-redux';
import { addPicturesRequest } from '../../../../redux/pictures/picturesThunks';
import AddPicturesForm from './AddPicturesForm';
import {
  getAddPicturesStates,
  getPicturesLoadingState,
} from '../../../../redux/pictures/picturesSelectors';
import { Alert, Container, Spinner } from 'react-bootstrap';
import { resetPicturesStates } from '../../../../redux/pictures/picturesActions';
import { useNavigate } from 'react-router-dom';
import ModalComponent from '../../ModalComponent/ModalComponent';
import { modalMessages } from '../../../../consts/modalMessages';

export const AddPictures = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(getPicturesLoadingState);
  const addPicturesStates = useSelector(getAddPicturesStates);
  const { error, success } = addPicturesStates;

  const handleSubmit = (data) => {
    dispatch(addPicturesRequest(data));
  };

  const handleCloseModal = () => {
    navigate('/wszyscy-uzytkownicy');
    dispatch(resetPicturesStates());
  };

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
        <AddPicturesForm action={handleSubmit} />
        <ModalComponent
          show={success}
          onClose={handleCloseModal}
          headerText={modalMessages.addImagesSuccess.headerText}
          textMessage={modalMessages.addImagesSuccess.textMessage}
        />
      </Container>
    </div>
  );
};
