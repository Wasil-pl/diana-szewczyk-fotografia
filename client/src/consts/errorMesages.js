export const errorMessages = {
  required: 'To pole jest wymagane',
  requiredFile: 'Proszę dodać zdjęcia',
  selectPackage: 'Przoszę wybrać pakiet',
  validateFile: 'Nieprawidłowy format pliku',
  passwordMatch: 'Hasła nie są takie same',
  minLength: (minLength) =>
    `To pole musi zawierać co najmniej ${minLength} znaków`,
  minNumber: (minNumber) => `This field must be at least ${minNumber}`,
};

export const Error = ({ children }) => (
  <small className="d-block form-text text-danger mt-2">{children}</small>
);
