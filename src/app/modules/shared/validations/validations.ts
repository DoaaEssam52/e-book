export const Validations = {
  password: {
    minLength: 4,
    pattern: '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}|:"<>?]).*',
  },
  firstName: {
    minLength: 3,
    maxLength: 20,
  },
  lastName: {
    minLength: 3,
    maxLength: 20,
  },
  otp: {
    pattern: '[0-9]+',
  },
  subject: {
    minLength: 3,
    maxLength: 50,
  },
  message: {
    minLength: 2,
    maxLength: 150,
  },
};
