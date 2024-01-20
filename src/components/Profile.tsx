import React, { useState } from 'react';
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
  ImageBackground,
} from 'react-native';

import { Avatar, Card } from "react-native-paper"; 
import { Divider, useTheme  } from '@rneui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';





function Profile(): React.JSX.Element {
    
    const image = {uri: 'https://pixabay.com/photos/skyscrapers-singapore-city-sky-3184798/'};
    const { theme } = useTheme();   

    
    return ( 
        
        <>
            <Card style={styles.Avatarcontainer}>
               <Card.Content style={styles.CardMenuList}>
                    <View>
                        <ImageBackground  source={image} resizeMode="cover">
                            <Avatar.Image 
                                    size={80} 
                                    source={{ 
                                        uri:  
                                        `https://cdn.pixabay.com/photo/2022/12/01/04/35/sunset-7628294_1280.jpg`, 
                                    }} 
                                /> 
                        </ImageBackground>
                    </View>
                    <View style={styles.AvatarPlaceHolder}>
                        <Text style= {{ fontSize: 18, fontWeight:'bold' }}>Shubham Yadav</Text>
                        <Text style= {{ fontSize: 18, fontWeight:'bold' }}>IMSEC, Ghaziabad</Text>
                    </View>
               </Card.Content>
            </Card>
            <View>
                <Divider inset={true} color='#8E4DFF' style={{marginTop:10}} insetType="middle" />
            </View>
            <View style={{marginTop: 10}}>
                <View>
                    <Card>
                        <Card.Content style={styles.CardMenuList}>
                            <View style={{flexDirection: 'row'}}>
                                <MaterialCommunityIcons name="cards-heart" color='#8E4DFF' size={25} />
                                <Text style={styles.CardMenuListText}>Liked Rooms</Text>
                            </View>
                            {/* <MaterialCommunityIcons name="greater-than" color='#8E4DFF' style={styles.CardMenuIcon} size={25} /> */}
                        </Card.Content>
                    </Card>
                </View>
                <View>
                    <Card>
                        <Card.Content style={styles.CardMenuList}>
                            <View style={{flexDirection: 'row'}}>
                                <MaterialCommunityIcons name="home-circle" color='#8E4DFF' size={25} />
                                <Text style={styles.CardMenuListText}>My Bookings</Text>
                            </View>
                            {/* <MaterialCommunityIcons name="greater-than" color='#8E4DFF' style={styles.CardMenuIcon} size={25} /> */}
                        </Card.Content>
                    </Card>
                </View>
                <View>
                    <Card>
                        <Card.Content style={styles.CardMenuList}>
                            <View style={{flexDirection: 'row'}}>
                                <MaterialCommunityIcons name="google-maps" color='#8E4DFF' size={25} />
                                <Text style={styles.CardMenuListText}>Saved Address</Text>
                            </View>
                            {/* <MaterialCommunityIcons name="greater-than" color='#8E4DFF' style={styles.CardMenuIcon} size={25} /> */}
                        </Card.Content>
                    </Card>
                </View>
                <View>
                    <Card>
                        <Card.Content style={styles.CardMenuList}>
                            <View style={{flexDirection: 'row'}}>
                                <MaterialCommunityIcons name="eye-off" color='#8E4DFF' size={25} />
                                <Text style={styles.CardMenuListText}>Change Password</Text>
                            </View>
                            {/* <MaterialCommunityIcons name="greater-than" color='#8E4DFF' style={styles.CardMenuIcon} size={25} /> */}
                        </Card.Content>
                    </Card>
                </View>
                <View>
                    <Card>
                        <Card.Content style={styles.CardMenuList}>
                            <View style={{flexDirection: 'row'}}>
                                <MaterialCommunityIcons name="focus-field" color='#8E4DFF' size={25} />
                                <Text style={styles.CardMenuListText}>Settings</Text>
                            </View>
                            {/* <MaterialCommunityIcons name="greater-than" color='#8E4DFF' style={styles.CardMenuIcon} size={25} /> */}
                        </Card.Content>
                    </Card>
                </View>
                <View>
                    <Divider inset={true} color='#FFFFFF' insetType="middle" />
                </View>
                <View>
                    <Divider inset={true} color='#FFFFFF' style={{marginTop:10}} insetType="middle" />
                </View>
                <View>
                    <Card>
                        <Card.Content style={styles.CardMenuList}>
                            <View style={{flexDirection: 'row'}}>
                                <MaterialCommunityIcons name="share-variant" color='#8E4DFF' size={25} />
                                <Text style={styles.CardMenuListText}>Refer a friend</Text>
                            </View>
                            {/* <MaterialCommunityIcons name="greater-than" color='#8E4DFF' style={styles.CardMenuIcon} size={25} /> */}
                        </Card.Content>
                    </Card>
                </View>
                <View>
                    <Card>
                        <Card.Content style={styles.CardMenuList}>
                            <View style={{flexDirection: 'row'}}>
                                <MaterialCommunityIcons name="logout" color='#8E4DFF' size={25} />
                                <Text style={styles.CardMenuListText}>Log out</Text>
                            </View>
                            {/* <MaterialCommunityIcons name="greater-than" color='#8E4DFF' style={styles.CardMenuIcon} size={25} /> */}
                        </Card.Content>
                    </Card>
                </View>
            </View>
        </>
    
    );
}

export default Profile;
