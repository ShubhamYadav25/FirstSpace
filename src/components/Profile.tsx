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
} from 'react-native';

function Profile() {
    return ( 
        <>
            <View style={styles.header}>
                <Text style={styles.title}>Profile works</Text>
            </View>
        </>
    );
}

export default Profile;
