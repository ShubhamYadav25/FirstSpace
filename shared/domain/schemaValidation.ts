import * as yup from 'yup';


export const signUpSchemaValidations = yup.object().shape({

    firstName: yup
        .string()
        .required("FirstName is required"),
    
    lasttName: yup
        .string()
        .required("LastName is required"),

    email: yup
        .string()
        .email('Email is Invalid').required('Email Cannot Be Empty'),
    
    password: yup
        .string()
        .min(6, 'Password Must have a Minimum if ten Characters').required('Password Cannot Be Empty'),
    
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords must match').
        required('Please Enter Password Again!'),

    // TODO Add validation for role
});