import useValidationSchema from './ValidationSchema';

const checkPasswordStrength = password => {
  try {
    useValidationSchema.validateSync(password);
    return 'strong';
  } catch (err) {
    if (password.length >= 10 && password.length < 20) {
      return 'medium';
    } else {
      return 'weak';
    }
  }
};

export default checkPasswordStrength;
