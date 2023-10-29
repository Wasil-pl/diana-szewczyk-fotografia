import React from 'react';
import styles from './RegisterForm.module.scss';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import { Error, errorMessages } from '../../../../consts/errorMesages';
import { patterns } from '../../../../consts/patterns';
import { PACKAGE } from '../../../../consts/constants';

const RegisterForm = ({ action }) => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
    watch,
  } = useForm();

  const handleSubmit = (data) => {
    action(data);
  };

  return (
    <div className={styles.container}>
      <Form
        className={styles.formLogin}
        noValidate
        onSubmit={validate(handleSubmit)}
      >
        <Form.Group className={styles.inputBox}>
          <Form.Label>Nazwisko</Form.Label>
          <Form.Control
            {...register('surname', {
              required: errorMessages.required,
            })}
            type="surname"
            placeholder="Nazwisko"
            autoComplete="surname"
            required
          />
          {errors.surname && <Error>{errors.surname?.message}</Error>}
        </Form.Group>
        <Form.Group className={styles.inputBox}>
          <Form.Label>Hasło</Form.Label>
          <Form.Control
            {...register('password', {
              required: errorMessages.required,
              minLength: {
                value: patterns.passwordMinLength,
                message: errorMessages.minLength(patterns.passwordMinLength),
              },
            })}
            type="password"
            placeholder="Hasło"
            required
            autoComplete="current-password"
          />
          {errors.password && <Error>{errors.password?.message}</Error>}
        </Form.Group>
        <Form.Group className={styles.inputBox}>
          <Form.Label>Powtórz Hasło</Form.Label>
          <Form.Control
            {...register('passwordRepeat', {
              required: errorMessages.required,
              validate: (value) =>
                value === watch('password') || errorMessages.passwordMatch,
            })}
            type="password"
            placeholder="Powtórz Hasło"
            required
            autoComplete="current-password"
          />
          {errors.passwordRepeat && (
            <Error>{errors.passwordRepeat?.message}</Error>
          )}
        </Form.Group>
        <Form.Group className={styles.inputBox}>
          <Form.Label>Wybierz pakiet</Form.Label>
          <Form.Control
            {...register('package', {
              required: errorMessages.required,
            })}
            as="select"
            required
          >
            <option value="">Wybierz pakiet</option>
            {Object.entries(PACKAGE).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </Form.Control>

          {errors.package && <Error>{errors.package?.message}</Error>}
        </Form.Group>
        <Form.Group className={styles.buttonBox}>
          <Button type="submit" variant="primary">
            Sign in
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default RegisterForm;
