import React, { useState } from 'react';
import {
    StyleSheet, Text, View, ScrollView,
    TouchableOpacity, Image
} from 'react-native';

import { Colors } from './Colors';

import FormInput from '../auth/FormInput';
import FormButton from '../auth/FormButton';

export default function FirstTimeLogin({ navigation }) {
    const [password, setPassword] = useState();
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../../assets/stc_icon.png')}
                style={styles.logo}
            />


            <Text style={styles.text1}>Employee services app</Text>


            <View style={styles.userBlock}>

                <Image
                    source={require('../../assets/userProfile.png')}
                    style={styles.userProfile}
                />

                <View style={{ padding: 10 }}>
                    <Text style={styles.text2}>Welcome</Text>
                    <Text style={{ color: Colors.ONYX }}>Alama Diab</Text>
                </View>
            </View>

            <View style={styles.userBlock}>

                <Image
                    source={require('../../assets/fingerprint.jpg')}
                    style={styles.fingerprint}
                />

                <View style={{ padding: 5 }}>
                    <Text style={styles.text2}>Login with Face ID</Text>
                    <Text style={styles.text2}>
                        Turn on biometrics Login in Settings
                    </Text>
                </View>
            </View>


            <View style={{ marginTop: 20 }}></View>


            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />


            <View style={{ marginTop: 10 }}></View>


            <FormButton
                buttonTitle="Sign In"
                onPress={() => navigation.navigate('BottomTabs')}
            />


            <View style={{ marginTop: 10 }}></View>


            <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => navigation.navigate('Register')}>
                <Text style={styles.navButtonText}>
                    Forgot Password
                </Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => navigation.navigate('Register')}>
                <Text style={styles.navButtonText}>
                    Unlink account from this device
                </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 20,
    },
    logo: {
        height: 130,
        width: 130,
        resizeMode: 'cover',
    },
    text1: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
        color: Colors.ONYX,
    },
    text2: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 12,
        fontWeight: '600',
        color: Colors.SILVER,
    },

    // User Profile styling
    userBlock: {
        flexDirection: 'row',
        textAlign: 'left', alignSelf: 'stretch',
        marginTop: 20,
    },
    userProfile: {
        height: 60,
        width: 60,
        resizeMode: 'cover',
        borderColor: Colors.CORAL,
        borderWidth: 3,
        borderRadius: 50,
    },
    fingerprint: {
        height: 50,
        width: 50,
        marginRight: 10,
        resizeMode: 'cover',
    },
    forgotButton: {
        marginVertical: 10,
    },
    navButtonText: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.SILVER,
        fontFamily: 'Lato-Regular',
    },
});