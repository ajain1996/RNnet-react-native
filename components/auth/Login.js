import React, { useState, useContext } from 'react';
import {
    StyleSheet, Text, View, ScrollView, 
    TouchableOpacity, Image
} from 'react-native';

// import firebase from 'firebase';

import FormInput from './FormInput';
import FormButton from './FormButton';
import SocialButton from './SocialButton';
import { AuthContext } from '../navigation/AuthProvider';

export default function Login({ navigation }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { login } = useContext(AuthContext);
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../../assets/rn-social-logo.png')}
                style={styles.logo}
            />

            <Text style={styles.text}>RN Social Network</Text>
            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize='none'
                autoCorrect={false}
            />
            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />
            <FormButton
                buttonTitle="Sign In"
                onPress={() => login(email, password)}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
                <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>

            <View>
                <SocialButton
                    buttonTitle="Sign In with Facebook"
                    btnType="facebook"
                    color="#4867aa"
                    backgroundColor="#e6eaf4"
                    onPress={() => alert('FB Login')}
                />

                <SocialButton
                    buttonTitle="Sign In with Google"
                    btnType="google"
                    color="#de4d41"
                    backgroundColor="#f5e7ea"
                    onPress={() => alert('Google Login')}
                />
            </View>

            <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => navigation.navigate('Register')}>
                <Text style={styles.navButtonText}>
                    Don't have an acount? Create here
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
        paddingTop: 50
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
});