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

export default function Register({ navigation }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

    const {register} = useContext(AuthContext)
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.text}>RN Social Network</Text>

            <FormInput
                labelValue={firstName}
                onChangeText={(firstName) => setFirstName(firstName)}
                placeholderText="First Name"
                iconType="team"
                autoCapitalize='none'
                autoCorrect={false}
            />
            <FormInput
                labelValue={lastName}
                onChangeText={(lastName) => setLastName(lastName)}
                placeholderText="Last Name"
                iconType="user"
                autoCapitalize='none'
                autoCorrect={false}
            />

            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="mail"
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
                buttonTitle="Sign Up"
                onPress={() => register(email, password, firstName, lastName)}
            />

            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By registering, you confirm that you accept our{' '}
                </Text>
                <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                    <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
                        Terms of service
                    </Text>
                </TouchableOpacity>
                <Text style={styles.color_textPrivate}> and </Text>
                <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
                    Privacy Policy
                </Text>
            </View>

            <View>
                <SocialButton
                    buttonTitle="Sign In with Facebook"
                    btnType="facebook"
                    color="#4867aa"
                    backgroundColor="#e6eaf4"
                    onPress={() => fbLogin()}
                />

                <SocialButton
                    buttonTitle="Sign In with Google"
                    btnType="google"
                    color="#de4d41"
                    backgroundColor="#f5e7ea"
                    onPress={() => googleLogin()}
                />
            </View>

            <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.navButtonText}>Have an account? Sign In</Text>
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
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey',
    },
});