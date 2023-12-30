import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
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

function Login( { navigation }): React.JSX.Element {

    // Initial value for email and password
    const [state, setState] = useState({
        email : '',
        password : '',
    })

    const onPressLogin = () => {
        console.log(state);
        navigation.navigate('Home');
    };
    const onPressForgotPassword = () => {
        // Do something about forgot password operation
    };
    const onPressSignUp = () => {
        // Do something about signup operation
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

// Adding styling
const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#D7CCFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title : {
        fontWeight: "bold",
        fontSize:50,
        color:"#8E4DFF",
        marginBottom: 40,
    },
    inputView:{
        width:"80%",
        backgroundColor:"#AEA8FF",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    inputText:{
        height:50,
        fontWeight: "bold",
        color:"black"
    },

    forgot : {
        color:"black",
        fontWeight: "bold",
        fontSize:14
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"#8E4DFF",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },

});

export default Login;
