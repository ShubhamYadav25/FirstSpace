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

function Header() {
    return ( 
        <>
            <View style={styles.header}>
                <Text style={styles.title}>FirstSpace</Text>
            </View>
        </>
    );
}

export default Header;
