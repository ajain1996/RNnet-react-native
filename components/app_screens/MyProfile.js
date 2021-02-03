import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from './Colors';

export default function MyProfile({ navigation, icon, time, info, chevron }) {
    return (
        <TouchableOpacity 
            style={styles.container} 
            onPress={() => navigation.navigate('BottomTabs')}
            activeOpacity={.7}
        >
            <View style={styles.icon}>
                <FontAwesome name={icon} size={26} color="#ff375e" />
            </View>
            <View style={styles.text}>
                <Text style={styles.infoText}>
                    {info}
                </Text>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', margin: 4,
        padding: 4,
        backgroundColor: '#fff',
    },
    icon: {
        justifyContent: 'center', alignItems: 'center', padding: 10,
    },
    text: {
        padding: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoText: {
        fontSize: 14,
        color: Colors.ONYX,
        textAlign: 'left',
        alignSelf: 'stretch',
    },
});