import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainMenuLoginForm.module.scss';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Error, errorMessages } from '../../../../consts/errorMesages';
import { patterns } from '../../../../consts/patterns';

const MainMenuLoginForm = ({ action }) => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const handleSubmit = (data) => {
    action({ surname: data.login, password: data.password });
  };

  return (
    <Form
      className={styles.formLogin}
      noValidate
      onSubmit={validate(handleSubmit)}
    >
      <Form.Group className={styles.inputBox}>
        <Form.Label>Nazwisko</Form.Label>
        <Form.Control
          {...register('login', {
            required: errorMessages.required,
            pattern: {
              value: patterns.surNamePattern,
              message: errorMessages.surNamePattern,
            },
          })}
          type="surName"
          placeholder="Nazwisko"
          autoComplete="surName"
          required
        />
        {errors.login && <Error>{errors.login?.message}</Error>}
      </Form.Group>
      <Form.Group className={styles.inputBox}>
        <Form.Label>Hasło</Form.Label>
        <Form.Control
          {...register('password', {
            required: errorMessages.required,
          })}
          type="password"
          placeholder="Hasło"
          required
          autoComplete="current-password"
        />
        {errors.password && <Error>{errors.password?.message}</Error>}
      </Form.Group>
      <Form.Group>
        <Button type="submit" variant="primary">
          Sign in
        </Button>
      </Form.Group>
    </Form>
  );
};

MainMenuLoginForm.propTypes = {
  action: PropTypes.func.isRequired,
};

export default MainMenuLoginForm;
