import React, { useContext, useState } from 'react';
import type {PropsWithChildren} from 'react';
import styles from '../../Styles';
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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { AuthContext, useAuth } from '../context/AuthProvider';
import { getObjectDataSession } from '../../shared/domain/sessionStorage';

function Login( { navigation }): React.JSX.Element {

    // Auth context
    const { login } = useAuth(); 

    // Initial value for email and password
    const [state, setState] = useState({
        email : '',
        password : '',
    })

    const onPressLogin = () => {
        
        if (state.email !== '' || state.password !== '') {

            // Calling login auth
            login(state.email, state.password); 
            
        }
        
        navigation.navigate('Home');
    };
    const onPressForgotPassword = () => {
        // Do something about forgot password operation
    };
    const onPressSignUp = () => {
    };

    return (
        
        // View with container style
        <View style={styles.container}>

            <Text style={styles.title}>FirstSpace</Text>

            <View style={styles.inputView}>
                <TextInput
                style={styles.inputText}
                placeholder="Email"
                placeholderTextColor="#003f5c"
                onChangeText={text => setState({email:text})}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                style={styles.inputText}
                secureTextEntry
                placeholder="Password"
                placeholderTextColor="#003f5c"
                onChangeText={text => setState({password:text})}
                />
            </View>

            <TouchableOpacity onPress = {onPressForgotPassword}>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {onPressLogin} style={styles.loginBtn}>
                <Text style={styles.forgot}>LOGIN </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {onPressSignUp}>
                <Text style={styles.inputText}>Signup</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Login;
