import * as Yup from 'yup';

const passwordValidation = Yup.string()
  .required('Required')
  .min(8, 'Password must be at least 8 characters long')
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
  .matches(/[0-9]/, 'Password must contain at least one number')
  .matches(/[\W_]/, 'Password must contain at least one special character');

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  phoneNumber: Yup.string()
    .required('Required')
    .matches(/^[0-9]{10,15}$/, 'Invalid phone number'),
  secondPhoneNumber: Yup.string().matches(
    /^[0-9]{10,15}$/,
    'Invalid phone number'
  ),
  website: Yup.string().url('Invalid URL'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: passwordValidation,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required'),
  terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
});

export default validationSchema;
