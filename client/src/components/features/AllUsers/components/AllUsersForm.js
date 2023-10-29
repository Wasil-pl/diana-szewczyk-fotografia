import React, { useState } from 'react';
import styles from './AllUsersForm.module.scss';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUserRequest } from '../../../../redux/users/userThunks';
import ModalComponent from '../../ModalComponent/ModalComponent';
import { modalMessages } from '../../../../consts/modalMessages';

const AllUsersForm = ({ data }) => {
  const [pendingDeletion, setPendingDeletion] = useState(null);
  const clearPendingDeletion = () => setPendingDeletion(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (id) => {
    navigate(`/dodaj-zdjecia/${id}`);
  };

  const handleDeleteUser = (e) => {
    e.preventDefault();
    dispatch(deleteUserRequest(pendingDeletion.id));
    clearPendingDeletion();
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {data.map((user) => (
          <Card
            className={styles.cart}
            key={user.id}
            style={{ width: '18rem' }}
          >
            <Card.Body>
              <Card.Title className={styles.title}>{user.surname}</Card.Title>
              <Card.Text className={styles.text}>
                {user.isChoosen === false
                  ? `nie wybrano jeszcze zdjęć`
                  : 'zdjęcia zostały wybrane'}
              </Card.Text>
              <Card.Text className={styles.text}>
                {user.pictures.length === 0
                  ? `nie dodano jeszcze zdjęć`
                  : 'zdjęcia zostały dodane'}
              </Card.Text>
              <Card.Text className={styles.buttonContainer}>
                {user.pictures.length !== 0 && (
                  <Button
                    variant="outline-info"
                    onClick={() => handleSubmit(user.id)}
                    size="sm"
                  >
                    {' '}
                    Zobacz wybrane{' '}
                  </Button>
                )}
                {user.pictures.length === 0 && (
                  <Button
                    variant="outline-info"
                    onClick={() => handleSubmit(user.id)}
                    size="sm"
                  >
                    {' '}
                    Dodaj zdjęcia{' '}
                  </Button>
                )}
                <Button
                  variant="outline-danger"
                  onClick={() => setPendingDeletion(user)}
                  size="sm"
                >
                  {' '}
                  Usuń użytkownika{' '}
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>

      <ModalComponent
        show={!!pendingDeletion}
        onClose={handleDeleteUser}
        headerText={modalMessages.deleteUserConfirm.headerText(
          pendingDeletion?.surname,
        )}
        textMessage={modalMessages.deleteUserConfirm.textMessage}
        onCancel={clearPendingDeletion}
        actionText="Delete"
      />
    </div>
  );
};

export default AllUsersForm;
