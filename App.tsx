import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Login from './src/components/Login';
import Home from './src/components/Home';
import Profile from './src/components/Profile';
import { AuthProvider } from './src/context/AuthProvider';


function App(): React.JSX.Element {

    const Tab = createMaterialBottomTabNavigator();

    return (
        
      <NavigationContainer>
		<AuthProvider>
          <Tab.Navigator 
		  	initialRouteName="Login"  
			labeled={false}
			
			activeColor="#8E4DFF"  
			// inactiveColor="#3e2465"
			sceneAnimationType = "shifting"  
			barStyle={{ 
				// backgroundColor: '#8E4DFF',
				backfaceVisibility: 'hidden',
				height: 60,  
			}} 
			
			>
			<Tab.Screen 
				name="Login" 
				component={Login} 
				options={{
					tabBarLabel: 'Login',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="home" color={color} size={25}  />
					),
				}}
			/>
			<Tab.Screen 
				name="Home" 
				component={Home}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="home-search" color={color} size={25}  />
					),
				}} 
			/>
			<Tab.Screen 
				name="Profile" 
				component={Profile}
				options={{
					tabBarLabel: 'Profile',
					
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="account" color={color} size={25}  />
					),
				}} 
			/>
          </Tab.Navigator>
		  </AuthProvider>
      </NavigationContainer>

    );
}

export default App;
