export const AuthValidations = {
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
};
