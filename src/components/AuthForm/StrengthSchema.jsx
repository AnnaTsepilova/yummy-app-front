import useValidationSchema from './ValidationSchema';

const checkPasswordStrength = password => {
  try {
    useValidationSchema.validateSync(password);
    return 'strong';
  } catch (err) {
    if (password.length >= 8 && password.length < 12) {
      return 'medium';
    } else {
      return 'weak';
    }
  }
};

export default checkPasswordStrength;
