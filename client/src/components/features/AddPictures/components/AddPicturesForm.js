import React, { useState } from 'react';
import { Button, Form, InputGroup, FormControl, Alert } from 'react-bootstrap';
import styles from './AddPicturesForm.module.scss';
import { useForm } from 'react-hook-form';
import { Error, errorMessages } from '../../../../consts/errorMesages';
import { useParams } from 'react-router-dom';

const AddPicturesForm = ({ action }) => {
  const { id } = useParams();
  const [files, setFiles] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const [fileError, setFileError] = useState('');
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChipDelete = (index) => {
    const updatedFiles = [...files];
    const updatedFileNames = [...fileNames];
    updatedFiles.splice(index, 1);
    updatedFileNames.splice(index, 1);
    setFiles(updatedFiles);
    setFileNames(updatedFileNames);
  };

  const onSubmitCallback = () => {
    const formData = new FormData();

    if (files.length === 0) return setFileError(errorMessages.requiredFile);

    files.forEach((file) => {
      formData.append('files', file);
    });
    formData.append('userId', id);

    action(formData);
  };

  return (
    <div>
      <div className={styles.container}>
        <Form
          className={styles.formBox}
          onSubmit={handleSubmit(onSubmitCallback)}
        >
          <Form.Group>
            <Form.Label>Dodaj zdjęcia</Form.Label>
            <InputGroup className={styles.boxContainer}>
              <FormControl
                type="file"
                onChange={(e) => {
                  const selectedFiles = Array.from(e.target.files);
                  setFiles([...files, ...selectedFiles]);
                  const selectedFileNames = selectedFiles.map(
                    (file) => file.name,
                  );
                  setFileNames([...fileNames, ...selectedFileNames]);
                }}
                multiple
              />
            </InputGroup>
            {errors.file && <Error>{errors.file.message}</Error>}
            <div className={styles.chipContainer}>
              {fileNames.length > 0 &&
                fileNames.map((fileName, index) => (
                  <div key={fileName} variant="primary" className={styles.chip}>
                    {fileName}{' '}
                    <Button
                      variant="link"
                      onClick={() => handleChipDelete(index)}
                    >
                      Delete
                    </Button>
                  </div>
                ))}
            </div>
            {fileError && <Error>{fileError}</Error>}
          </Form.Group>
          <Button
            className={styles.confirmButton}
            type="submit"
            variant="primary"
          >
            Dodaj zdjęcia
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddPicturesForm;
