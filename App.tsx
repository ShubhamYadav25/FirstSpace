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

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/components/Login';
import Home from './src/components/Home';

function App(): React.JSX.Element {

    const Stack = createNativeStackNavigator();

    return (
        
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" >
            <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
            <Stack.Screen name="Home" 
                options={{ 
                    title: 'FirstSpaces',
                    headerStyle: {
                      backgroundColor: '#8E4DFF',
                    },
                    headerShown: false,
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }} 
                component={Home} 
            />
          </Stack.Navigator>
      </NavigationContainer>

    );
}

export default App;
