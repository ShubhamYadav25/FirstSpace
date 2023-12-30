import React, { useState } from 'react';
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

function Home(): React.JSX.Element {

    return (

        // View with container style
        <View style={styles.container}>
        
            <Text style={styles.title}>Welcome to Home</Text>
           
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

export default Home;
