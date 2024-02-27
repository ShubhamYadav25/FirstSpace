import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import { withFormik, FormikProps, Formik } from "formik";
import * as Yup from "yup";

import styles from '../../Styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { ISignUPForm } from "../../shared/domain/interfaces";
import { Role } from "../../shared/domain/enum";
import { signUpSchemaValidations } from "../../shared/domain/schemaValidation";

function Signin() : React.JSX.Element  {

    const intialSignUpFormValues: ISignUPForm = {
        firstName: "",
        lastName: "",
        middleName: "",
        password: "",
        email: "",
        confirmPassword: "",
        role: Role.User,
    }

    const handleSubmit = (values: typeof intialSignUpFormValues) => {
        console.log(values);
    }


    return ( 
        <>
        <View style={styles.container}>

            <View>
                <Text style={styles.titleSignUp}>Create Account</Text>
            </View>

            <View>
                <Text style={styles.titleSignUpDescription}>Get started with your free account</Text>
            </View>

            <Formik 
                initialValues={intialSignUpFormValues} 
                onSubmit={handleSubmit} 
                validationSchema={signUpSchemaValidations}
                enableReinitialize={false}
                >
                {
                    ({ values, handleChange, isValid, errors, touched, handleBlur }) => (
                        <View style={styles.container}>                   
                            <View style={styles.inputView}>
                            {/* <MaterialCommunityIcons name="cards-heart" color='#8E4DFF' size={25} /> */}
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="First Name"
                                    value={values.firstName}
                                    placeholderTextColor="#003f5c"  
                                    onChangeText={handleChange('firstName')}
                                    onBlur={handleBlur('firstName')}
                                />
                                <View style={{marginTop: -8}}>
                                { 
                                touched.firstName && errors.firstName && ( <Text style={styles.ErrorText}>{errors.firstName}</Text>)
                                }
                                </View>
                            </View>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Middle Name"
                                    value={values.middleName}
                                    onChangeText={handleChange('middleName')}
                                />
                                <View style={{marginTop: -8}}>
                                { 
                                touched.middleName && errors.middleName && ( <Text style={styles.ErrorText}>{errors.middleName}</Text>)
                                }
                                </View>
                            </View>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Last Name"
                                    value={values.lastName}
                                    onChangeText={handleChange('lastName')}
                                    onBlur={handleBlur('lastName')}
                                />
                                <View style={{marginTop: -8}}>
                                { 
                                touched.lastName && errors.lastName && ( <Text style={styles.ErrorText}>{errors.lastName}</Text>)
                                }
                                </View>
                            </View>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.inputText}
                                    value={values.email}
                                    placeholder="Email"
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    keyboardType="email-address"
                                />
                                <View style={{marginTop: -8}}>
                                { 
                                touched.email && errors.email && ( <Text style={styles.ErrorText}>{errors.email}</Text>)
                                }
                                </View>
                            </View>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.inputText}
                                    value={values.password}
                                    placeholder="Password"
                                    onChangeText={handleChange('password')}
                                    secureTextEntry
                                />
                                <View style={{marginTop: -8}}>
                                { 
                                touched.password && errors.password && ( <Text style={styles.ErrorText}>{errors.password}</Text>)
                                }
                                </View>
                            </View>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Confirm Password"
                                    value={values.confirmPassword}
                                    onChangeText={handleChange('confirmPassword')}
                                    secureTextEntry
                                />
                                <View style={{marginTop: -8}}>
                                { 
                                touched.confirmPassword && errors.confirmPassword && ( <Text style={styles.ErrorText}>{errors.confirmPassword}</Text>)
                                }
                                </View>
                            </View>

                            <TouchableOpacity onPress={() => handleSubmit(values)} style={styles.SigninBtn}>
                                <Text style={styles.inputText}>Submit</Text>
                            </TouchableOpacity>
                        </View>                   
                    )
                }
            </Formik>
        </View>
        </>
    );
}

export default Signin;
